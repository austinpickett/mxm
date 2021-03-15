const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: path.resolve(appDirectory, "src/js/index.ts"), //path to the main .ts file
  output: {
    filename: "js/main.js", //name for the js file that is created/compiled in memory
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    host: "localhost",
    port: 8080, //port that we're using for local host (localhost:8080)
    disableHostCheck: true,
    contentBase: path.resolve(appDirectory, "public"), //tells webpack to serve from the public folder
    publicPath: "/",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(appDirectory, "public/index.html"),
    }),
    new CopyPlugin({
      patterns: ['public/ExtrudeMXMthin.glb', {
        from: 'public/css/index.css', to: 'css/index.css'
      }]
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
};
