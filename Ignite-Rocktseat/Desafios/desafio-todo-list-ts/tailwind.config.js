/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray700: "#0D0D0D",
        gray600: "#1A1A1A",
        gray500: "#262626",
        gray300: "#808080",
        gray100: "#F2F2F2",
        blueDark: "#1E6F9F",
        blue: "#4EA8DE",
      }
    },
  },
  plugins: [],
}

