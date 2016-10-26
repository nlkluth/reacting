const path = require('path');

const webpackConfig = {
  entry: path.join(__dirname, './app.js'),
  output: {
    path: path.join(__dirname, './'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    }]
  }
};

module.exports = webpackConfig;
