const { resolve } = require('path');
const merge = require('webpack-merge');
const baseConfig = require('.');
const cwd = process.cwd();

module.exports = merge(baseConfig, {
  entry: {
    gutenberg: ['./public/index.js']
  },
  output: {
    libraryTarget: 'umd',
    path: resolve(cwd, 'docs')
  },
  devServer: {
    host: '0.0.0.0'
  }
});
