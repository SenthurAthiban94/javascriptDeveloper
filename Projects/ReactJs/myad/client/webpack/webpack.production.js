const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[hash].bundle.js',
        publicPath: './',
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
        },
        // runtimeChunk: 'single', // needed when multimple chunks are used
    },
}