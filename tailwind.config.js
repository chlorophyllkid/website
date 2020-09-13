const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      303030: '#303030',
      edefef: '#edefef',
      ffffff: '#ffffff',
    },

    spacing: {
      5: '0.3125rem',
      10: '0.625rem',
      20: '1.25rem',
    },

    fontFamily: {
      frutiger: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
    },

    fontWeight: {
      light: '300',
      roman: '400',
      bold: '700',
    },
  },
  variants: {},
  corePlugins: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before', 'after']
      )
    }),
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls((decl) => {
            decl.important = true
          })
        })
      })
    }),
  ],
}
