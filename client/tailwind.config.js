const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      forest: colors.lime,
      aquamarine: colors.emerald,
      green: colors.green,
      grey: colors.blueGray,
      lightblue: colors.teal,
      pink: colors.rose,
    },
    extend: {
      fontFamily: {
        'title': ["'Ceviche One'", 'cursive'],
        'sub-title': ["'Acme'", 'sans-serif'],
        'normal': ["'Zen Kurenaido'", 'sans-serif'],
      }
    },
  },
  screens: {
    'mobile': '640px',
    'laptop': '1024px',
    'desktop': '1280px',
  },
  variants: {
    extend: {
      italic: ['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
