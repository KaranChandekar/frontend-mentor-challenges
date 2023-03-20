/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "very-dark-blue": "hsl(233, 47%, 7%)",
      "dark-desaturated-blue": "hsl(244, 38%, 16%)",
      "soft-violet": "hsl(277, 64%, 61%)",
      white: "hsl(0, 0%, 100%)",
      "slightly-transparent-white": "hsla(0, 0%, 100%, 0.75)",
      "slightly-transparent-white": "hsla(0, 0%, 100%, 0.6)",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      Lexend: ["Lexend Deca", "sans-serif"],
    },
  },
  plugins: [],
};
