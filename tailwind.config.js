/** @type {import('tailwindcss').Config} */
export const content = ['./dist/**/*.{html, js}']
export const theme = {
  extend: {
    backgroundImage: {
      'bg-image': "url('/dist/background.jpg')"
    },
    fontFamily: {
      poppins: ['Poppins', 'Cascadia Mono PL', 'Cascadia Mono']
    }
  }
}
export const plugins = [
  require('tailwindcss-animated')
]
