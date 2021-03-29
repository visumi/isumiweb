module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
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
        'aqua-dark': '#568f96',
      }
    },
  },
  plugins: [],
}
