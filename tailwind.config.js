/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'terra-o-white': '#F8F8F8',
        'terra-o-black': '#090909',
        'terra-o-blue': {
          50: '#3597B2',
          100: '#3688C9',
          200: '#3774E6',
          300: '#3860FF'
        },
        'terra-o-green': {
          50: '#35A69B',
          100: '#34B881',
          200: '#33C46E',
          300: '#32CA66'
        },
        'terra-o-terra': '#282424',
        'terra-o-gray': {
          200: '#AFAFAF',
          300: '#858585',
          400: '#5B5B5B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'terra-o': ['Sora', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
