const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "example/index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
