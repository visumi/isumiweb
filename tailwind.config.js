module.exports = {
  purge: ['./src/**/*.tsx'],
  mode: 'jit',
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      display: ['Varela Round', 'sans-serif']
    },
    extend: {
      colors: {
        'aqua-light': '#C1DEE2',
        'aqua-dark': '#568f96',
      }
    },
  },
  plugins: [],
}
