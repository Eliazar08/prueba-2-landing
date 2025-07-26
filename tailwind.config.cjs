/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e5f4f2',
          DEFAULT: '#c2e3e0',
          dark: '#a1d5d0'
        }
      }
    }
  },
  plugins: []
};
