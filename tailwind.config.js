module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      display: ['Varela Round', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FBFBFB'
    }),
    extend: {
      colors: {
        'aqua-light': '#C1DEE2',
        'aqua-dark': '#89C5CC'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      transitionProperty: ['hover', 'responsive'],
      fontSize: ['hover'],
    },
  },
  plugins: [],
}
