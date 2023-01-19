# Install dependencies only when needed
FROM balenalib/raspberrypi4-64-alpine-node AS deps

#RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm clean-install --force

# Rebuild the source code only when needed
FROM balenalib/raspberrypi4-64-alpine-node AS builder

WORKDIR /app
ENV NODE_OPTIONS --openssl-legacy-provider
COPY next.config.js package.json package-lock.json ./
COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build
RUN npm install --production --ignore-scripts --prefer-offline --force

# Production image, copy all the files and run next
FROM balenalib/raspberrypi4-64-alpine-node AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
RUN mkdir -p /app/.next/cache/images && chown nextjs:nodejs /app/.next/cache/images
VOLUME /app/.next/cache/images

# Because we are not deploying our website on Vercel, we installed sharp for image optimization,
# which is recommended by Next.js for production environment.
RUN npm install sharp --force

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]