import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',

  mode: process.env.NODE_ENV,

  output: {
    path: path.resolve(path.resolve(), 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    static: {
      directory: path.resolve(path.resolve(), './dist'),
      publicPath: './dist',
    },
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '/': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  
};
