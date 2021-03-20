const path = require("path");

//mode: "production",

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".css", ".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: ["css-loader"],
      },
    ],
  },
};
