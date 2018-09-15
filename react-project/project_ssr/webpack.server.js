const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const moduleConfig = require('./webpack.module.js')

const serverConfig = {
    mode: 'development',
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: nodeExternals()
}

module.exports = merge(serverConfig, moduleConfig)