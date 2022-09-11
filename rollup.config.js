import { copy } from '@web/rollup-plugin-copy'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import summary from 'rollup-plugin-summary'

export default {
  input: ['src/js/theme-switch/theme-switch.js'],
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['images/**/*'],
    }),
  ],
  output: {
    dir: 'dist/js',
  },
  preserveEntrySignatures: 'strict',
}
