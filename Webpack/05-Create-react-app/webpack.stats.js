const StatsPlugin = require('stats-webpack-plugin');
module.exports = (preset)=>(!preset ? {} : {
    plugins: [
        new StatsPlugin(`${preset}.json`, {
            chunkModules: true,
            exclude: [/node_modules[\\\/]react/]
        })
    ]
})