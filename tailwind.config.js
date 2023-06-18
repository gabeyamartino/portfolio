/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "900px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      maxHeight: {
        sectionMax: '60rem',
      },
      minHeight: {
        sectionMin: '40rem'
      },
      backgroundImage: {
        'main-bg': "linear-gradient(to right bottom, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)), url(/assets/main-bg.svg);"
      }
    },
  },
  plugins: [],
}