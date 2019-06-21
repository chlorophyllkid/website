
const fs = require('fs');
const path = require('path');

const precss = require('precss');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssColorMix = require('postcss-color-mix');
const cssnano = require('cssnano');

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = 'stylesheet.css';

module.exports = class stylesheet {
  async data() {
    const rawFilepath = path.join(__dirname, `../_includes/${fileName}`);

    return {
      permalink: `assets/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  render({ rawCss, rawFilepath }) {
    return postcss([postcssImport, precss, postcssMixins, postcssColorMix, cssnano])
      .process(rawCss, { from: rawFilepath })
      .then(result => result.css);
  }
};
