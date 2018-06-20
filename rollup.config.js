import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/ScrollMemory.js',
  output: {
    format: 'cjs',
    file: 'dist/ScrollMemory.min.js',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    uglify(),
  ],
  external: ['react', 'react-router-dom'],
};
