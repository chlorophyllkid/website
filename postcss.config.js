const OpenProps = require('open-props')

module.exports = {
  plugins: [
    require('postcss-jit-props')(OpenProps),
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
