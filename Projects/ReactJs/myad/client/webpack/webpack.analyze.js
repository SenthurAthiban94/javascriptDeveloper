const WebPackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = ()=>({
    plugins: [
        new WebPackBundleAnalyzer()
    ]
});