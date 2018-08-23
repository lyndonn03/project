const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.module.js');

const serverConfig = {
  mode: "development",
  entry: "./server/react/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
}

module.exports = merge(serverConfig, baseConfig);
