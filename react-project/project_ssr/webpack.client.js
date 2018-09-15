const path = require('path')
const merge = require('webpack-merge')
const moduleConfig = require('./webpack.module.js')

const clientConfig = {
    mode: 'development',
    entry: './src/client/client.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(clientConfig, moduleConfig)