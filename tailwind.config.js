module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        glass: 'inset 2px -2px 10px rgba(255, 255, 255, 0.4)'
      },
      backgroundOpacity: {
        20: '0.2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
