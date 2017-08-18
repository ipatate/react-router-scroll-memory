import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/ScrollMemory.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    uglify(),
  ],
  external: ['react', 'react-router-dom'],
  dest: 'dist/ScrollMemory.min.js',
};
