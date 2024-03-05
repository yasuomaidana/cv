const { type } = require("os");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const webpack = require('webpack');

module.exports = (env) => {
  const dotenvFilename  = env.NODE_ENV;
  const envPath = path.resolve(__dirname, dotenvFilename);
  const envVars = require('dotenv').config({ path: envPath }).parsed || {};
return {
  entry: "./src/index.tsx", // Replace with your entry point
  output: {
    path: path.resolve(__dirname, envVars.BUILD_PATH), // Output directory for bundled files
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
  optimization:{
    minimize:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new InterpolateHtmlPlugin({
      REACT_APP_PUBLIC_URL: envVars.REACT_APP_PUBLIC_URL,
      REACT_APP_STATIC_URL: envVars.REACT_APP_STATIC_URL
  }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envVars),
    }),
  ]
  
}};