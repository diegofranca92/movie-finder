/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#861040',
        secondary: '#E73980',
        selected: '#D18000'
      }
    }
  },
  plugins: []
}
