/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark : "#222222",
        darkBlue: "#004385",
        lightGray : "#c4c4c4"
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        }
      },
      animation: {
        slideIn: "slideIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
}