import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.jsx',

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
      '/user': 'http://localhost:3000/',
      '/api': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/i,
        exclude: [/node_modules/],
        include: path.resolve(path.resolve(), 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test:/\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
};
