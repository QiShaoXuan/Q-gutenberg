const merge = require('webpack-merge');
const { resolve } = require('path');
const baseConfig = require('.');
const cwd = process.cwd();
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

const WP_EXTERNALS = [
  function(context, request, callback) {
    if (/(^@wordpress)/.test(request)) {
      return callback(null, 'commonjs2 ' + request);
    }
    callback();
  },
  {
    'gutenberg-i18n': 'gutenberg-i18n',
    'prop-types': 'prop-types'
  }
];

module.exports = merge(baseConfig, {
  entry: {
    // gutenberg: ['./src/main.js']
    gutenberg: ['./public/index.js']
  },
  externals: {},
  output: {
    libraryTarget: 'umd',
    path: resolve(cwd, 'docs')
  },
  plugins: [
    new ReplaceInFileWebpackPlugin([
      {
        dir: 'docs',
        files: ['gutenberg.js'],
        rules: [
          {
            search: /require\(\"@wordpress\/api-fetch\"\)/g,
            replace: 'require("@wordpress/api-fetch").default'
          }
        ]
      }
    ])
  ]
});
