/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        white: 'white',
        none: 'none',
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        archivo: ['Archivo, sans-serif'],
        grotesk: ['Bricolage Grotesque, sans-serif'],
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat8, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

