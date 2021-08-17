var path = require('path');

module.exports = {
  publicPath: '/aisyndicate2/',
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, '@'),
      },
    },
  },
};
