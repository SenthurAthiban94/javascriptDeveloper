const path = require('path');
module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    }
}