/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          950: "#1A2B3D",
          800: "#3E4957",
          700: "#596572",
          600: "#5A6573",
          500: "#9BA6B2",
          400: "#76818b",
          100: "#F5F7FA",
        },
        blue: {
          700: "#1882FF",
          200: "#E8F3FF",
        },
        yellow: {
          300: "#FFE1C2",
          200: "#FFEEDB",
        },
      },
    },
  },
  plugins: [],
};
