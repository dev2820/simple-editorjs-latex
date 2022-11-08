const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  target: "web",
<<<<<<< HEAD
  output: {
    filename: "LaTeX.js",
    path: path.resolve(__dirname, "dist"),
    library: "editorjs-latex",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
=======
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "example/index.html",
    }),
  ],
  output: {
    filename: "LaTeX.js",
    path: path.resolve(__dirname, "dist"),
    library: "LaTeX",
    libraryTarget: "umd",
    libraryExport: "default",
>>>>>>> 31a0904 (chore/ package build option change (to create LaTeX file))
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
