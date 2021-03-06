import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import svg from 'rollup-plugin-svg';

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    plugins: [
        sass({ insert: true }),
        svg(),
        typescript({ objectHashIgnoreUnknownHack: true })
    ],
    external: ['react', 'react-dom']
}
