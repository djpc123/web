/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono], // Default body font
        mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono], // Monospace utility
        heading: ['Inter', ...defaultTheme.fontFamily.sans]     // Heading font
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 