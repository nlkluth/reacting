const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src/app.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react', 'react-hmre'] // note: don't do this in production app
      }
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
};

module.exports = webpackConfig;
