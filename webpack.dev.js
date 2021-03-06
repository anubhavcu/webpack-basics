const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. inject styles into DOM
          'css-loader', // 2. turns css into commonjs module
          'sass-loader', // 1. turns sass into css
        ],
      },
    ],
  },
});
