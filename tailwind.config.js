/** @type {import('tailwindcss').Config} */


const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/App.js",
    "./src/**/*.{js,jsx.ts,tsx,svg}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })  
  ],
}
