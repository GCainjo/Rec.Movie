/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    'hero': "url('../public//img/fond_ecran.jpg')",
  },
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
}
