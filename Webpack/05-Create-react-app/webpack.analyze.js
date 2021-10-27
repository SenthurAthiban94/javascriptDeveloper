const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (preset)=>({
    plugins:[
        new BundleAnalyzer()
    ],
})