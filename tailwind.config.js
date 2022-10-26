/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-h": "#41306C",
        "gray-h": "#8a8c8f",
        "gdark-h": "#666162",
      }
    },
  },
  plugins: [],
}
