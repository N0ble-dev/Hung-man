/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        'bor': '10px solid black',
      },
    },
  },
  plugins: [],
}

