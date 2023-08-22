/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/dist/background.jpg')",
      },
      fontFamily: {
        'poppins': ["Poppins", "Cascadia Mono PL", "Cascadia Mono"],
      }
    },
  },
  plugins: [],
}