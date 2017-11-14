/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./base.js');
/* eslint-enable */

const TARGET = process.env.npm_lifecycle_event;

// Local config running webpack-dev-server
if (TARGET === 'start') {
  module.exports = merge(commonConfig, {
    entry: {
      app: [
        // activate HMR for React
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',
        './src/index.js',
      ],
    },
    devServer: {
      inline: true,
      noInfo: true,
      quiet: false,
      lazy: false,
      publicPath: '/',
      historyApiFallback: true,
      hot: true,
      contentBase: path.join(__dirname, '/dist'),
      port: 3000,
      https: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),
    ],
  });
}

// Development build
if (TARGET === 'build:dev') {
  module.exports = merge(commonConfig, {
    entry: {
      app: ['./src/index.js'],
    },
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
    ],
  });
}

// Production build - minified
if (TARGET === 'build') {
  module.exports = merge(commonConfig, {
    entry: {
      app: ['./src/index.js'],
    },
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        beautify: false,
        mangle: { screw_ie8: true, keep_fnames: true },
        compress: {
          screw_ie8: true,  // React doesn't support IE8
        },
      }),
    ],
  });
}
