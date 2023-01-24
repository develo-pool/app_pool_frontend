const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';

module.exports = {
  mode: webpackEnv,
  entry: {
    app: path.join(rootDir, './index.web.tsx'),
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'index_bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader',
        include: path.resolve(
          __dirname,
          'node_modules/react-native-vector-icons',
        ),
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.join(rootDir, './web/assets/favicon.ico'),
      manifest: path.join(rootDir, './web/assets/site.webmanifest'),
    }),
  ],
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ], // read files in fillowing order
    alias: Object.assign({
      'react-native$': 'react-native-web',
    }),
  },
};
