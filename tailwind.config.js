/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#fff",
        secondary: "1e1e1e",
        textBlack: "#000",
        textGrey: "#1e1e1e",
      },
      flex:{
        full: "0 0 100%",
      }
    },
  },
  plugins: [],
}

