const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ['./src/**/*.{html,js,ejs}'],
  theme: {
    screens: {
      pc: '900px',
      sp: {'max': '899px'},
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans' : ['Noto Sans JP',"Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif" ],
      'serif' : ['Noto Serif JP'],
    },
    extend: {
      colors: {
        "daihen": '#0091D7',
        "dark-blue": "#006ED7",
      },
      backgroundImage: {
        "home-pickup": 'url(../images/home/pickup-bg.png)'
      },
    },
  },
  plugins: [],
}
  