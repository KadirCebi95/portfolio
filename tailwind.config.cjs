/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#facc15",
        dark: "#0e0e0e",
      },
    },
  },

  plugins: [],
}
