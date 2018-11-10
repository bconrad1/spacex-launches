const HtmlWebPackPlugin = require('html-webpack-plugin');
let path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/public/index.html',
  filename: './index.html',
  publicPath: '/',
});

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin],
};