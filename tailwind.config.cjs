/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  plugins: [
    require("@tailwindcss/line-clamp")
  ]
}
