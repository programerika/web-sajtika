module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/v1/:slug*",
        destination: "http://localhost:8080/api/v1/:slug*",
      },
    ];
  },
};
