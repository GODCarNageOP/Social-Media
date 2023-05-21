/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        mobile: { max: "640px" },
        tablet: { min: "640px", max: "1023px" },
        desktop: { min: "1024px", max: "1279px" },
        wide: { min: "1280px" },

        // ...
      },
    },
  },
  plugins: [],
};
