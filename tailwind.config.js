/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        red: "#ff7a7a",
        green: "#38cc8c",
        blue: "#6055a5",
        "dark-blue": "#3e3c49",
        "grayish-blue": "#b9b6d3",
      },
      fontFamily: {
        'poppins': ["'Poppins'"]
      }
    },
  },
  plugins: [],
};
