/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      },
     colors : {
      customYellow: {
        light: '#FBEB95',
      },
      Midnight: {
        gray_800: "#343539",
        gray_600: '#4D4D4D'
      }
     }
    },
  },
  plugins: [],
  darkMode: 'class'
}

