const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    filename: path.resolve(__dirname, 'index.js'),
  },
  output: {
    filename: 'build.js',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
