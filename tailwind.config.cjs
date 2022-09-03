/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
          wiggle: {
              '0%, 100%': {
                  transform: 'rotate(-1deg)'
              },
              '50%': {
                  transform: 'rotate(1deg)'
              },
          }
      },
      animation: {
          wiggle: 'wiggle 5s ease-in-out infinite',
      }
  },
  },
  daisyui: {
    themes: ['fantasy','lofi'],
  },
  plugins: [require("daisyui")],
}
