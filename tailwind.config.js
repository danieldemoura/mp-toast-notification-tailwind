/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter, sans-serif'
      },
      animation: {
        'fadeInLeft': 'fadeInLeft .6s ease forwards',
        'fadeInRight': 'fadeInRight .6s ease forwards',
        'fadeOutLeft': 'fadeOutLeft .6s ease forwards',
        'fadeOutRight': 'fadeOutRight .6s ease forwards',
      },
      keyframes: {
        fadeOutLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-140%)' },
        },
        fadeOutRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(140%)' },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' } 
        },
        fadeInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}

