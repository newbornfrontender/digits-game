import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import * as preprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const ctx = {
  production,
};

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'esm',
    file: 'public/build/bundle.js',
    preferConst: true,
  },
  plugins: [
    del({
      targets: 'public/build',
    }),
    svelte({
      dev: !production,
      css: (css) => css.write('public/build/bundle.css'),
      preprocess: [preprocess.postcss(ctx)],
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs({
      extensions: ['.js', '.svelte'],
      sourceMap: !production,
    }),
    postcss({
      extract: 'public/build/global.css',
      minimize: production,
      sourceMap: !production,
      config: { ctx },
    }),
    production &&
      terser({
        mangle: {
          module: true,
        },
        module: true,
      }),
  ],
  treeshake: production,
  watch: {
    clearScreen: false,
  },
};
