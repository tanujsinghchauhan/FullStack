// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/assets/background.jpeg')",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },
      },
      animation: {
        typing:
          "typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        orange: "#d46427",
        purple: "#bb86fc",
      },
    },
  },
  plugins: [],
};
