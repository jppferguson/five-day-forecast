var conf = require('./webpack.config');
var webpack = require('webpack');

/* Production-specific overides */
conf.devtool = null;
conf.plugins = conf.plugins || []
conf.plugins.push( new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
}));

module.exports = conf;
