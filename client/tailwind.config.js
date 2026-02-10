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
        white: "#ffffff",
        lavender: "#cccaf4",
        lilac: "#a281f3",
        black: "#1a1a1a",
        lightGray: "#f9f9fb",
        gray: "#dbdbdb",
      },
    },
  },
  plugins: [],
};
