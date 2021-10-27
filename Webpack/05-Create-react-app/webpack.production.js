const path = require("path");
module.exports = {
    output: {
        filename: "[contenthash].bundle.js",
        path: path.resolve(__dirname,'dist'),
    }
}