var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve('source'),
  entry: [
    "./client"
  ],
  output: {
    path: path.resolve('dist'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'source/public'
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
        // loaders: ["style", "css", "sass"],
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin("main.css")
  ]
};
