var webpack = require('webpack');
var path = require('path');
var debug = require('debug');
require("babel-core/register");
require("babel-polyfill");
// var proxy = require('http-proxy-middleware');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  context: path.join(__dirname, "src"),
  devtool: debug
    ? "inline-sourcemap"
    : false,
  entry: ['babel-polyfill', APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: "client.min.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'env', 'stage-0'
          ],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
        }
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]?[hash]'
            }
          }
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

      plugins: debug
        ? []
        : [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
        ],

    devServer: {
      host: 'localhost', // Defaults to `localhost`
      port: 3000,
      proxy: {
        '^/api/*': {
          target: 'http://localhost:3000/',
          secure: false
        }
      }
    },
  };

  module.exports = config;
