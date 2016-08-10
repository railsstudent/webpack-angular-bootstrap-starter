'use strict';

var webpack = require('webpack'),
  path = require('path');

var APP = __dirname + '/app';
module.exports = {
    // config goes here
    context: APP,
    entry: {
        app: [
                'webpack/hot/dev-server'
                , './core/bootstrap.js'
              ]
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
    output: {
        path: APP,
        filename: './bundle.js'
    },
    module: {
      loaders: [
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']    // sass loader => css loader => style loader
        }
      ]
    }
};

// hot-reload plugin
// test in browser: http://localhost:8080/webpack-dev-server/bundle
