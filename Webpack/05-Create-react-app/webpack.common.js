const path=require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env)=>({
    mode: env.mode,
    entry: path.resolve(__dirname,'src/index.js'),
    module: {
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html')
        })
    ],
})