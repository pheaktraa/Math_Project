/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", // or preline
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // or preline/plugin if you're using Preline
    require('preline/plugin'),
  ],
}
