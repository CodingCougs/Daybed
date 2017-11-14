/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDetails = require('../package.json');
/* eslint-enable */

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: `${appDetails.name}-${appDetails.version}.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
     
    },
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['style-loader', 'css-loader'],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        use: [
          {
            loader: 'url-loader?limit=10000',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif)/,
        use: [
          {
            loader: 'url-loader?limit=10000',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)/,
        use: {
          loader: 'file-loader?name=[name].[ext]&publicPath=static/images/&outputPath=images/',
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
      },
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    new ExtractTextPlugin({
      filename: `${appDetails.name}-${appDetails.version}.css`,
      disable: false,
      allChunks: true,
    }),
      // generates index.html with js/css source references
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: `${appDetails.displayName}`,
      version: `${appDetails.version}`,
      description: `${appDetails.description}`,
    }),
  ],
};
