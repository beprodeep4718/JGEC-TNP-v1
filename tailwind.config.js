/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#A04C0B",
        "secondary": "#FFFFF0",
        "tertiary": "#D9B202"
      },
    },
  },
  plugins: [],
}