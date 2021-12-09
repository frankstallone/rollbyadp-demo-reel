module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Specter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        current: '30px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('@adplabs/roll-design-tokens/dist/tailwind.config')
  ],
}
