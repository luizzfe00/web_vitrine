/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inline-bottom-thead': 'inset 0 -2px 0 0 #ABABAB',
      }
    },
  },
  plugins: [],
}
