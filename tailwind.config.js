const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ['./docs/**/*.{html,ejs}'],
  theme: {
    screens: {
      pc: '900px',
      mpc: {'max': '1100px','min':'900px'},
      sp: {'max': '899px'},
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans' : ['Noto Sans JP',"Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif" ],
      'serif' : ['Noto Serif JP'],
    },
    extend: {
    },
  },
  plugins: [],
}
  