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
conf.plugins.push( new webpack.DefinePlugin({
  "process.env": {
     NODE_ENV: JSON.stringify("production")
   }
}));

module.exports = conf;
