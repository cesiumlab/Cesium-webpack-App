const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      'index.html',
      {
        from: process.env.XBSJ_IMPORT !== 'external' ? './node_modules/cesium/Build/Cesium' : 'Static/Cesium',
        to: 'Cesium',
        toType: 'dir'
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../../dist')
  }
};