/* https://github.com/tailwindcss/tailwindcss/blob/master/src/corePlugins.js */

const defaultVarsModules = {
  colors: 'color',
  screens: '',
  fontFamily: 'font',
  fontSize: 'text',
  fontWeight: 'font',
  lineHeight: 'leading',
  letterSpacing: 'tracking',
  backgroundSize: 'bg',
  borderWidth: 'border',
  borderRadius: 'rounded',
  width: 'w',
  height: 'h',
  minWidth: 'min-w',
  minHeight: 'min-h',
  maxWidth: 'max-w',
  maxHeight: 'max-h',
  padding: 'p',
  margin: 'm',
  boxShadow: 'shadows',
  zIndex: 'z',
  opacity: 'opacity'
}

const disabledVarsModules = Object.keys(defaultVarsModules)
  .reduce((o, item) => ({...o, [item]: false }), {});

// console.log(disabledVarsModules);

module.exports = {
  corePlugins: [
    'textColor'
  ],
  theme: {
    screens: [],
    colors: {
      red: 'red'
    },
    extend: {},
  },
  variants: {
    textColor: []
  },
  plugins: [
    require('tailwind-css-variables')(
      {
        ...disabledVarsModules,
        colors: 'color'
      },
      {postcssEachVariables:true}
    )
  ],
}
