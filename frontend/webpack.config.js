const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Example chat exercise',
      filename: 'index.html'
    })
  ]
};
