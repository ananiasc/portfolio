/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      padding: {
        '144': '36rem' /* 32rem = 512px */
      }
    },
  },
  plugins: [],
}

