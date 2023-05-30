/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        sectionMax: '60rem',
      },
      minHeight: {
        sectionMin: '40rem'
      }
    },
  },
  plugins: [],
}