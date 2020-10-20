import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';

export default {
  input: `src/index.ts`,
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external: ['lit-element', 'lit-html'],
  plugins: [
    postcss({
      inject: false,
    }),
    postcssLit(),
    typescript(),
    resolve(),
    commonjs({ include: ['node_modules/dropzone/**/*'] }),
  ],
};
