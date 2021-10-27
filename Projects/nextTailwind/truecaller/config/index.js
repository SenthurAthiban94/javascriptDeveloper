const websiteConfig = {
    domain: process.env.APP_DOMAIN || 'https://public-api.wordpress.com',
    version: 'v1.1',
    websiteId: 107403796,
}

export const apiBaseURL = `${websiteConfig.domain}/rest/${websiteConfig.version}/sites/${websiteConfig.websiteId}`;

export const API= {
    postsUrl:`${apiBaseURL}/posts/`,
    categoriesUrl:`${apiBaseURL}/categories/`,
    postDetailsUrl:`${apiBaseURL}/posts/`,
}