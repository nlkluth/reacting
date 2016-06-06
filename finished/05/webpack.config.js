const webpackConfig = {
  entry: './app.js',
  output: {
    path: './',
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
}

module.exports = webpackConfig;
