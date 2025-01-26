module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = "./src/index.tsx";
      return webpackConfig;
    },
  },
  devServer: {
    client: {
      overlay: false,
    },
  },
};
