const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-public_sans)", ...fontFamily.sans]
      },
      colors: {
        blue: {
          900: "#00213D",
          700: "#0B3B60",
          500: "#339CFF",
          200: "#85C4FF",
        },
        neutral: {
          900: "#161717",
          500: "#6B6E71",
          400: "#90989F",
          200: "#E7EBEF",
        },
        red: {
          error: "#893131",
        },
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
