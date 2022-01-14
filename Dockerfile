# Install dependencies only when needed
FROM balenalib/raspberry-pi-alpine-node AS deps
#RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM balenalib/raspberry-pi-alpine-node AS builder
WORKDIR /app
ENV NODE_OPTIONS --openssl-legacy-provider
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build
RUN npm install --production --ignore-scripts --prefer-offline
RUN SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install --arch=arm64 --platform=linux sharp

# Production image, copy all the files and run next
FROM balenalib/raspberry-pi-alpine-node AS runner
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


USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]