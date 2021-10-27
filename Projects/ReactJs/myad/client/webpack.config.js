const {merge} = require('webpack-merge');
const webpackCommon = require('./webpack/webpack.common');
const webpackEnv = (env)=>require(`./webpack/webpack.${env.mode}`);
const analyzer = (env)=>env.preset ? require(`./webpack/webpack.${env.preset}`)() : {};

module.exports = (env)=>merge(
    webpackCommon(env),
    webpackEnv(env),
    analyzer(env)
);