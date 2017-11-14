/* eslint-disable */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDetails = require('../package.json');
/* eslint-enable */

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    // Directory where generated assests (css, fonts, images) are located after build
    publicPath: '/',
    filename: `${appDetails.name}-${appDetails.version}.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      config: path.join(__dirname, '../src/config/default.js'),
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
        test: /\.(jpe?g|png|gif|svg|ico)/,
        use: {
          loader: 'file-loader?name=[name].[ext]&publicPath=static/images/&outputPath=images/',
        },
      },
    ],
  },
  plugins: [
    // bundle extracted css into single file
    new ExtractTextPlugin(`${appDetails.name}-${appDetails.version}.css`),

    // generates index.html with js/css source references
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: `${appDetails.displayName}`,
      version: `${appDetails.version}`,
      description: `${appDetails.description}`,
    }),
  ],
};
