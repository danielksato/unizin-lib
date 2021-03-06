const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

export default {
    input: './src/index.js',
    external: ['react', 'react-dom', 'redux', 'react-redux', 'prop-types', 'styled-components'],
    output: {
        dir: `./dist`,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        babel({
            exclude: ['node_modules/**'],
        }),
        commonjs({
            namedExports: {
                'node_modules/react-is/index.js': ['isValidElementType'],
                'node_modules/zingtouch/index.js': ['Tap', 'Swipe', 'Region'],
            },
        }),
        terser(),
    ],
};
