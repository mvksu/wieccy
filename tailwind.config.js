/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
    colors: {
      "green-main" : "#A2D7C7",
      "green-dark" : "#124733",
      "sandi" : "#F2F0E4",
      "dark-sandi": "#E7E1CC",
    },
    fontFamily: {
      area: ["Area", "AreaNormal"],
      doulous: ["Doulous", "Doulous"],
    }, 
  },
  plugins: [],
};
