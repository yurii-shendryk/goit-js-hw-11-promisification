const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: './index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'task1.html',
      chunks: ['task1'],
      template: './task1.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'task2.html',
      chunks: ['task2'],
      template: './task2.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'task3.html',
      chunks: ['task3'],
      template: './task3.html',
    }),
  ],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    open: true,
  },
});
