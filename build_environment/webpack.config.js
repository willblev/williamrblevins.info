const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const { boilerpack } = require('boilerpack');
const { resolve } = require('path');

module.exports = boilerpack({
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  devtool: 'source-maps',
})
  .addEntry('main', [resolve(__dirname, 'src/index'), 'preact'])
  .addExtensions('.ts', '.tsx', '.css')
  .addRule('typescript', {
    test: /\.tsx?$/,
    use: ['awesome-typescript-loader'],
  })
  .addRule('css', {
    test: /\.css?$/,
    use: ['style-loader', 'css-loader'],
  })
  .addPlugin(
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
  )
  .addPlugin(
    new FaviconsWebpackPlugin({
      logo: './src/logo.png',
      background: '#000',
      title: 'williamrblevins.info',
    }),
  )
  .addPlugin(new CopyWebpackPlugin([{ from: 'src/logo.png' }]))
  .addPlugin(new webpack.NamedModulesPlugin())
  .withOutput({
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  })
  .make();
