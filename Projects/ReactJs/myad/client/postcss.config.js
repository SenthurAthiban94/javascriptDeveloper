const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [
      './public/**/*.html',
      './public/*.html',
      './src/**/*.js',
      './src/**/**/*.js',
      // etc.
    ],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    ident: 'postcss',
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ],
};