/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "productListing": "90%"
      },
      width: {
        "productListing": "516px"
      }
    },
  },
  plugins: [],
}
