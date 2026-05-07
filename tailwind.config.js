/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        cyanGlow: "#00FFFF",
        violetGlow: "#8B5CF6"
      }
    }
  },
  plugins: []
}
