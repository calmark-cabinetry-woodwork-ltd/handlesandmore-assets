import resolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"
import filesize from "rollup-plugin-filesize"
import copy from "rollup-plugin-copy"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"

const production = !process.env.ROLLUP_WATCH

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
        },
        {
            src: "CNAME",
            dest: "build"
        }
    ]
}

export default [
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
            filesize(filesizeConfig),
            !production && serve("build"),
            !production && livereload("build")
        ]
    }
]
