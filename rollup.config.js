/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import babel from "@rollup/plugin-babel" // change to @rollup/plugin-babel
import commonjs from "@rollup/plugin-commonjs" // change to @rollup/plugin-commonjs
import resolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"
import filesize from "rollup-plugin-filesize"
import copy from "rollup-plugin-copy"

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

const copyConfig = {
    targets: [
        {
            src: "node_modules/@webcomponents",
            dest: "build"
        },
        {
            src: "static/*",
            dest: "build"
        },
        {
            src: "index.html",
            dest: "build",
            rename: "index.html"
        }
    ]
}

export default [
    // Modern JS Bundle
    {
        input: ["src/index.js"],
        output: {
            file: "build/index.js",
            format: "iife",
            sourcemap: true
        },
        plugins: [
            resolve(),
            copy(copyConfig),
            terser(),
            filesize(filesizeConfig)
        ]
    },

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
    }
]
