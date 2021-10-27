module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#ffffff',
        secondary: '#0589ff',
        bgSecondary: '#001049',
        bgPrimary: '#f4f7f9',
        txtPrimary: '212121',
      },
      container:{
        padding: '2rem',
      },
      fontFamily:{
        body: ["Roboto","Montserrat","sans-serif"]
      },
      minWidth: {
        '0': '0',
        'max': 'max-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
