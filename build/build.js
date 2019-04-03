const merge = require('webpack-merge');
const baseConfig = require('.');

module.exports = merge(baseConfig, {
  entry: {
    gutenberg: ['./src/main.js']
  },
  externals: [
    /(^@wordpress|^gutenberg-)/i,
    {
      noop: 'noop',
      'prop-types': 'prop-types'
    }
  ],
  output: {
    library: 'GutenbergEditor',
    libraryTarget: 'umd'
  }
});
