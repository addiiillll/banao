/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'white': '#ffffff',
        'off-white': '#F7F5F9',
        'continue': '#F7F5F9',
        'purple': '#8064A2',
        'line': '#CED4DA',
        'blue': '#0997cc',
        'blue-light': '#F7FDFF',
        'testimonial': '#6D747A',
        'purple-light': '#CCC1DA',
        'green': '#77933C',
        'footer-text': '#08090A',
        'gray': '#EBEDF0',
        'pink-light': '#F7F5F9'
      },
      lineHeight: {
        '7': '30px'
      },
      letterSpacing: {
        'wide': '0.02em'
      }
    },
  },
  plugins: [],
};
