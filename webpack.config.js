const { type } = require("os");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Replace with your entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Injects styles into DOM (development)
          "css-loader", // Converts CSS to CommonJS modules
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.(jpg|png|svg|jpeg)$/i,
        type:"asset"
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
};
