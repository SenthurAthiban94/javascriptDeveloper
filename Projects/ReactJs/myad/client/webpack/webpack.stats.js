const StatsPlugin = require('stats-webpack-plugin');
module.exports = ()=>({
    plugins: [
        new StatsPlugin('stats.json', {
            chunkModules: true,
            exclude: [/node_modules[\\\/]react/]
        })
    ]
})