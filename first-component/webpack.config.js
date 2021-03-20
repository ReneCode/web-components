const path = require("path");

// mode: "production",

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".css", ".js"],
  },
  module: {
    rules: [
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
