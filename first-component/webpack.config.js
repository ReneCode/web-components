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
    extensions: [".css", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          // "style-loader",
          // Translates CSS into CommonJS
          // "css-loader",
          "raw-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   test: /.css$/,
      //   exclude: /node_modules/,
      //   use: ["css-loader"],
      // },
    ],
  },
};
