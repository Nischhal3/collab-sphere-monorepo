/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        logo: ["Oranienbaum", "serif"],
      },
      colors: {
        gray: "#dbdbdb",
        white: "#ffffff",
        lilac: "#a281f3",
        black: "#1a1a1a",
        darkNavy: "#091e42",
        lavender: "#cccaf4",
        lightGray: "#f9f9fb",
        lightPurple: "#F3E8FF",
      },
    },
  },
  plugins: [],
};
