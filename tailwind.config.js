/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/main.handlebars'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'stone': '#292524',
      'emerald': '#10b981',
      'stone-light': '#e7e5e4',
      'yellow': '#eab308',
      'battership-gray': '#8A7E72'
    },
    fontFamily: {
      mono: ['Menlo, Monaco, Consolas, "Liberation Mono", "Courier New"']
    },
    extend: {},
  },
  plugins: [],
}

