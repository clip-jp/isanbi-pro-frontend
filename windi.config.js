export default {
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },
  plugins: [
    require('daisyui'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    // ...
  ],
}