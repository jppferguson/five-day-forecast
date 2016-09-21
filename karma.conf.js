var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'source/**/*.Spec.js',
    ],
    preprocessors: {
      'source/**/*.Spec.js': ['webpack']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    webpack: webpackConfig
  })
}
