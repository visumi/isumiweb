module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Arvo', 'serif'],
      display: ['Lemon']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
