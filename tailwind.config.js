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
      },
      fontSize: {
        '5xl': '2.125rem'
      }
    },
  },
  plugins: [],
  presets: [
    require('@adplabs/roll-design-tokens/dist/tailwind.config')
  ],
}
