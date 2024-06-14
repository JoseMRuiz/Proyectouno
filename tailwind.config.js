/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        personalizada: ['MiFuentePersonalizada', 'sans-serif'],
        personalizada2: ['MifuentePersonalizada2', 'sans-serif'],
      },
      backgroundImage: {
        'fondo1': "url('/my-project/src/images/fondo1.jpg')",
      },
    },
  },
  plugins: [],
}