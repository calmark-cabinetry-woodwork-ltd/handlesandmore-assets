import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"
import filesize from "rollup-plugin-filesize"

const babelConfig = {
    babelrc: false,
    babelHelpers: "bundled",
    sourceMaps: true,
    ...{
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        ie: "11"
                    }
                }
            ]
        ]
    }
}

const filesizeConfig = {
    showGzippedSize: true,
    showBrotliSize: false,
    showMinifiedSize: false
}

export default [
    // The main JavaScript bundle for older browsers that don't support
    // JavaScript modules or ES2015+.
    {
        input: ["src/index.js"],
        output: {
            file: "build/index.nomodule.js",
            format: "iife",
            sourcemap: true
        },
        plugins: [
            babel(babelConfig),
            resolve(),
            terser(),
            filesize(filesizeConfig)
        ]
    },
    // Babel polyfills for older browsers that don't support ES2015+.
    {
        input: "src/babel-polyfills-nomodule.js",
        output: {
            file: "build/babel-polyfills-nomodule.js",
            format: "iife",
            sourcemap: true
        },
        plugins: [
            commonjs({ include: ["node_modules/**"] }),
            resolve(),
            terser(),
            filesize(filesizeConfig)
        ]
    },
    {
        input: "src/loader.js",
        output: {
            file: "build/loader.js",
            format: "iife",
            sourcemap: true
        },
        plugins: [babel(babelConfig), terser(), filesize(filesizeConfig)]
    },
    {
        input: "src/snippet.js",
        output: {
            file: "build/snippet.js",
            format: "iife",
            strict: false
        },
        plugins: [babel(babelConfig), terser(), filesize(filesizeConfig)]
    }
]
