const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: ['idempotent-babel-polyfill', './src/p5.ble.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    filename: 'p5.ble.js',
    library: 'p5ble',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      emitWarning: true,
      failOnError: false,
    }),
  ],
};
