const { defineConfig } = require("@vue/cli-service");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp("https://hn.algolia.com/api"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },
        ],
      }),
    ],
  },
  pwa: {
    workboxOptions: {
      swSrc: "public/service-worker.js",
    },
  },
};
