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
        // note: don't do this in production app
        presets: ['es2015', 'stage-0', 'react', 'react-hmre']
      }
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.json$/,
      loaders: ['json-loader']
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }]
  }
};

module.exports = webpackConfig;
