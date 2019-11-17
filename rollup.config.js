import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import builtins from 'rollup-plugin-node-builtins';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: "dist/index.min.js",
            format: "iife"
        },
        plugins: [
            // plugin order matters
            builtins(),
            resolve({
                browser: true
            }),
            commonjs(),
            typescript({target: 'es5'}),
            terser(),
        ]
    }
];
