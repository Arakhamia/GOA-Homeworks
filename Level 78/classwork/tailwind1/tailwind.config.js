/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        'max-768px': {'max': "768px"},
        'max-425px': {'max': "425px"},
        'phone': "425px",
      }
    },
  },
  plugins: [],
}

