/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'purple': '#8C30F5',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#ECECF4',
    },
    extend: {},
    screens: {
      'sm': { 'max': '768px' },
      'xl': { 'max': '1280px' },
    },
  },
  plugins: [],
}
