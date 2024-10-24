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
        primary: "#eab308", // Warna kuning utama
        secondary: "#fefce8", // Warna putih-kuning
        dark: "#0f172a", // Warna hitam
        secondary: "#fefce8", // Warna putih-kuning
        putih: "#cbd5e1", // Warna putih
      },
    },
  },
  plugins: [],
};
