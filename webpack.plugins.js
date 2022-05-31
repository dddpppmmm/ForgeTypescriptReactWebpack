const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/app/index.html',
    inject:'body',
    chunks: ['app'],
  }),
  //new CopyPlugin({
    //patterns: [
      //{
        //from: path.resolve(__dirname, "./src/assets/svg/"),
        //to: path.resolve(__dirname, ".webpack/assets/svg")
      //}
    //]
  //})
];
