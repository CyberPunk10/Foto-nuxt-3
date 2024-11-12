module.exports = {
  darkMode: 'class',
  content: [],
  extend: {
    colors: {
      dim: {
        50: "#5f99f7",
        100: "#5f99f7",
        200: "#38444d",
        300: "#202e3a",
        400: "#253341",
        500: "#5f99f7",
        600: "#5f99f7",
        700: "#192734",
        800: "#162d40",
        900: "#15202b",
      }
    }
  },
  theme: {
    plugins: []
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
