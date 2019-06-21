
const path = require('path');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const { minify } = require('uglify-es');

const fileName = 'script.js';

module.exports = class script {
  async data() {
    const rawFilepath = path.join(__dirname, `../_includes/${fileName}`);

    return {
      permalink: `assets/${fileName}`,
      rawFilepath,
    };
  }

  async render({ rawFilepath }) {
    const bundle = await rollup.rollup({
      input: rawFilepath,
      plugins: [
        babel({
          babelrc: false,
          exclude: 'node_modules/**',
          presets: [['@babel/preset-env', { modules: false }]],
        }),
        resolve(),
        commonjs(),
        uglify({}, minify),
      ],
    });

    const { output } = await bundle.generate({
      name: 'bundle',
      format: 'iife',
      sourcemap: true,
      intro: "document.addEventListener('DOMContentLoaded', function() { bundle(); });",
    });

    return output[0].code;
  }
};
