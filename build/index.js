const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('gutenberg.css');

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.scss', '.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/src/, /public/, /node_modules\/@wordpress/],
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/i,
        use: extractCSS.extract({
          fallback: 'style-loader', // creates style nodes from JS strings
          use: [
            { loader: 'css-loader' }, // translates CSS into CommonJS
            { loader: 'sass-loader' } // compiles Sass to CSS
          ]
        })
      }
    ]
  },
  plugins: [
    extractCSS,
    new CleanWebpackPlugin(['docs', 'languages']),
    new HtmlWebpackPlugin({ template: './public/index.ejs' })
  ],
  externals: [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
      moment: 'moment',
      jquery: 'jQuery'
    }
  ]
};
