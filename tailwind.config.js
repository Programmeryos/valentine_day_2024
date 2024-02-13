/** @type {import('tailwindcss').Config} */
// import colors from './src/styles/colors'
// const  colors = require('./src/styles/colors')

module.exports = {
  content: ["./src/App.tsx", "./src/**/**/*.{jsx,tsx}", "./src/**/**/**/*.{jsx,tsx}", "./src/**/**/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#F5F5F5',
        black: "#000000",
        black1: "#0A0A0A",
        blue: "#0353D6",
        blue1: "#649EFB",
        blue2: "#6BAAFB",
        blue3: "#4C7BD7",
        brown: "#555555",
        grey: "#93A1CD",
        grey1: "#E0E8E6",
        textGrey: "#92918D",
        textBlue: "#0653D7",
        white: "#FFFFFF",
        redError: "#B00B0B",
        redErrorLight: "#ff0000ef",
        red: "#D60000",
        placeholder: "#89A5C9",
        pink: "#e57291",
      },
      fontSize: {
        '11': 11,
        '12': [12, { lineHeight: "26.7px" }],
        '13': 13,
        '14': [14, { lineHeight: "22px" }],
        '15': 15,
        '16': [16, { lineHeight: "22px" }],
        '17': 17,
        '18': [18, { lineHeight: "26px" }],
        '19': 19,
        '20': [20, { lineHeight: "25.4px" }],
        '22': 22,
        '23': 23,
        '24': [24, { lineHeight: "29.4px" }],
        '26': 26,
        '30': 30,
        '36': [36, {lineHeight: "42.6px"}],
        '32': [32, { lineHeight: "36.2px" }],
        '48': [48, { lineHeight: '57.6px' }]
      },
      borderRadius: {
        '0': 0,
        '13': 13,
        '20': 20,
        '30': 30,
        '45': 45,
        '50': 50,
      },
      borderWidth: {
        "1": 1,
      }
    },


  },
  plugins: [],
}
