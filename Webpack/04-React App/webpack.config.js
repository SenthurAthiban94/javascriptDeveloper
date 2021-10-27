const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env","@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html')
        })
    ]
}