const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './script/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'style/'
            }
          }
        ]
      }]
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon: './style/transformer.png'
    })
  ]
}
