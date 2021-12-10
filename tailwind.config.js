module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.css',
    './src/**/*.ts',
  ],
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
  plugins: [],
  presets: [
    require('@adplabs/roll-design-tokens/dist/tailwind.config')
  ],
}
