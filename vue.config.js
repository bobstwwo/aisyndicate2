var path = require('path');

module.exports = {
  publicPath: '/aisyndicate2/',
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, '@'),
      },
    },
  },
};
