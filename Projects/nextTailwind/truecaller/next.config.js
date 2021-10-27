const path = require('path');
module.exports = {
    images: {
        domains: ['truecaller.blog'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    experimental: {
        scrollRestoration: true
    }
}