/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        clay: {
          50: "#D2DCE7",
          100: "#C5D1E0",
          200: "#ABBCD2",
          300: "#90A7C4",
          400: "#7592B6",
          500: "#5B7DA8",
          600: "#4C698E",
          700: "#3D5673",
          800: "#2F4259",
          900: "#212E3E",
        },
        bandicoot: {
          50: "#D8D9D0",
          100: "#CFD0C4",
          200: "#BCBEAD",
          300: "#A9AC97",
          400: "#979A80",
          500: "#83866B",
          600: "#656752",
          700: "#464839",
          800: "#282820",
          900: "#090907",
        },
      },
    },
  },
  plugins: [],
};
