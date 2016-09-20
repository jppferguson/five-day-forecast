var path = require('path');

module.exports = {
  context: path.resolve('source'),
  entry: [
    "./client"
  ],
  output: {
    path: path.resolve('assets/js/'),
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
