const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: "public",
    }),
    new HTMLWebpackPlugin({
      title: "Movie App",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /(node_modules)/, loader: "ts-loader" },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    port: 4000,
    historyApiFallback: true,
    allowedHosts: "all",
  },
};
