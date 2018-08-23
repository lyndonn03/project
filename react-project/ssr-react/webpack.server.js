const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.module.js');

const serverConfig = {
  mode: 'development',
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "server_build")
  }
}

module.exports = merge(serverConfig, baseConfig);
