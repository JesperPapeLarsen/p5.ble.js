const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    watchFiles: ['dist/**/*'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'p5ble',
    }),
  ],
});
