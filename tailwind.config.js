/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        extrabgreen: {
          100: '#e0f2e9',
          200: '#c2e5d3',
          500: '#4caf50',
          600: '#45a049',
          700: '#3d9142',
        },
      },
    },
  },
  plugins: [],
}

