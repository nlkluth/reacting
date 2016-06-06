const webpackConfig = {
  entry: './app.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel']
    }]
  }
}

module.exports = webpackConfig;
