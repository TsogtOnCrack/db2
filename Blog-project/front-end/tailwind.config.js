/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "mukta": ["Mukta", 'sans-serif']
    },
    extend: {
      maxWidth: {
        "MAX_WIDTH": '1400px',
      }
    },
  },
  plugins: [],
}