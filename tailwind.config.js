/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Righteous: ["Righteous", "sans-serif"],
        ReadexPro: ["ReadexPro", "sans-serif"],
      },
      colors: {
        primary: "#eab308", // Warna biru utama
        secondary: "#a855f7", // Warna pink sekunder
      },
    },
  },
  plugins: [],
};
