/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "900px",
      md: "768px",
      sm: "625px",
    },
    extend: {
      maxHeight: {
        sectionMax: "60rem",
      },
      minHeight: {
        sectionMin: "30rem",
      },
      width: {
        xxl: "560px",
      },
      backgroundImage: {
        "main-bg":
          "linear-gradient(to right bottom, rgba(0, 98, 185, 0.8), rgba(0, 98, 185, 0.8)), url(/assets/main-bg.svg);",
      },
      minWidth: {
        skillBox: "350px",
        mobileAbout: "90vw",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
};
