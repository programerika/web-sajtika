module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 300 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 20,
  },
  reactStrictMode: true

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/v1/:slug*",
  //       destination: "http://localhost:8080/api/v1/:slug*",
  //     },
  //   ];
  // },
};
