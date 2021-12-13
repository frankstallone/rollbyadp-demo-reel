module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        marketing: {
          bg: '#f7f6f4',
          text: '#121c4e',
          button: {
            bg: '#fce3df',
            'bg-hover': '#fbd7d1',
            text: '#de0a65',
          },
        },
      },
      fontFamily: {
        display: ['Specter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        current: '30px',
      },
      fontSize: {
        '5xl': '2.125rem',
      },
      borderWidth: {
        10: '10px',
      },
      keyframes: {
        fadeIn: {
          '0%:': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
  presets: [require('@adplabs/roll-design-tokens/dist/tailwind.config')],
};
