/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        namecat: ["Namecat", "sans-serif"],
      },
      backgroundImage: {
        'bg-texture': "url('/src/img/fondo.jpg')",
        '1': "url('/src/img/bg1.jpg')",
        '2': "url('/src/img/bg2.jpg')",
        '3': "url('/src/img/bg3.png')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
  darkMode:'class',
}