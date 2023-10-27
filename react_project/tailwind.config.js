/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans'], // Nombre personalizado 'lato' y la fuente 'Lato'
      },
    },
  },
  plugins: [],
}
