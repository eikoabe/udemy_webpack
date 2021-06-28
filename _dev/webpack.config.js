const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'assets/js/app.js',
  },
  module: {
    rules:[
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,//外部書き出し
          },
          {
            loader: 'css-loader',//登録
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/app.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
