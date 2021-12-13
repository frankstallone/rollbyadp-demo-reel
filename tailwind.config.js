module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.css',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        'marketing': {
          bg: '#f7f6f4',
          text: '#121c4e'
        },
      },
      fontFamily: {
        display: ['Specter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        current: '30px'
      },
      fontSize: {
        '5xl': '2.125rem'
      },
      keyframes: {
        fadeIn: {
          '0%:': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards"
      }
    },
  },
  plugins: [],
  presets: [
    require('@adplabs/roll-design-tokens/dist/tailwind.config')
  ],
}
