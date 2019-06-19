const pug = require('pug');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = (config) => {

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.pug');

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);


  // minify the html output
  config.addTransform('htmlmin', require('./config/minify-html.js'));


  config.setLibrary('pug', pug);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['md', '11ty.js'],
    htmlTemplateEngine: 'pug',
    passthroughFileCopy: true,
  };
};
