/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      'soft-blue': 'hsl(215, 51%, 70%)',
      cyan: 'hsl(178, 100%, 50%)',
      'main-bg-blue': 'hsl(217, 54%, 11%)',
      'card-bg-blue': 'hsl(216, 50%, 16%)',
      'line-blue': 'hsl(215, 32%, 27%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
};
