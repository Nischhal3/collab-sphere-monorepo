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
        background: "#ffffff",
        primary: "#cccaf4",
        button: "#a281f3",
        text: "#000000",
        dropdownBg: "#f9f9fb",
      },
    },
  },
  plugins: [],
};
