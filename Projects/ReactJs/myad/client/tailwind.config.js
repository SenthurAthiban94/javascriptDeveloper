const {themes,safeList} = require('./src/themes/themes');

module.exports = {
  purge: {
    enabled: true,
    content:[
      './src/*.{js,jsx,ts,tsx}',
      './src/**/*.{js,jsx,ts,tsx}',
      './src/**/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ],
    safelist: safeList()
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: themes,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
