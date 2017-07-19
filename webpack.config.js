const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
     entry: './src/index.js',
     output: {
         path: path.join(__dirname, '/dist'),
         filename: '[name].js'
     },
        plugins: [
          new HtmlWebpackPlugin({
            title: 'Rise'
          }),
          new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
          })
        ]
 }