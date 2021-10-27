const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('webpack').ProgressPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const postCssConfig = require('./../postcss.config');

module.exports = (env)=>({
    mode: env.mode,
    entry: path.resolve(__dirname,'../src/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options: {
                            postcssOptions: postCssConfig
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html')
        }),
    ]
})