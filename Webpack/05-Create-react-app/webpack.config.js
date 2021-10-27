const webpackConfig = (env)=>require(`./webpack.${env}`);
const webpackCommonConfig = (env)=>require('./webpack.common')(env);
const webpackAnalyze = (preset)=>preset ? require(`./webpack.${preset}`)(preset) : {};
const {merge} = require('webpack-merge');

module.exports = (env)=> merge(
    webpackCommonConfig(env),
    webpackConfig(env.mode),
    webpackAnalyze(env.preset)
);