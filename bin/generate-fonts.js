import SVGIcons2SVGFontStream from "svgicons2svgfont"
import fs from "fs"
import path from "path"

const svgDir = "./icons"
const targetDir = "./static/hfont"
const encoding = "utf-8"
const fontOptions = { fontName: "hfont", fontHeight: 1000 }
const fontStream = new SVGIcons2SVGFontStream(fontOptions)

const cssTemplatePath = path.join(svgDir, "template.css")
const htmlTemplatePath = path.join(svgDir, "template.html")

const cssTemplate = fs.readFileSync(cssTemplatePath, { encoding })
const htmlTemplate = fs.readFileSync(htmlTemplatePath, { encoding })

const main = () => {
    const fontWS = fs.createWriteStream(path.join(targetDir, "hfont.svg"))
    const fsPipe = fontStream.pipe(fontWS)
    fsPipe.on("error", err => console.log(err))

    fs.promises.readdir(svgDir).then(files => {
        let icons = addIconFiles(files)
        writeCss(icons)
        writeHtml(icons)
    })
}

main()

function addIconFiles(files) {
    let codepoint = parseInt(`E001`, 16)
    const icons = []
    files.map(f => {
        const name = path.basename(f, ".svg")
        if (`${name}.svg` == f) {
            const g = fs.createReadStream(path.join(svgDir, f))
            const uChar = String.fromCharCode(codepoint)
            g.metadata = { name, unicode: [uChar] }
            icons.push({ name, codepoint })
            fontStream.write(g)
            codepoint++
        }
    })
    fontStream.end()
    return icons
}

function writeHtml(icons) {
    const htmlData = icons
        .map(i => `<div class="box"><span class="icon-${i.name}"></span></div>`)
        .join("\n")

    const htmlOut = htmlTemplate.replace("<!-- ICONS -->", htmlData)

    fs.writeFileSync(path.join(targetDir, "index.html"), htmlOut, {
        encoding
    })
}

function writeCss(icons) {
    const cssCodepoint = i => "\\" + i.codepoint.toString(16)
    const cssVars = icons
        .map(i => `--icon-content-${i.name}: "${cssCodepoint(i)}";`)
        .join("\n    ")
    const cssData = icons
        .map(i => `.icon-${i.name}:before { content: "${cssCodepoint(i)}"}`)
        .join("\n")

    const cssOut = cssTemplate
        .replace("/* ICON_VARS */", cssVars)
        .replace("/* ICONS */", cssData)

    fs.writeFileSync(path.join(targetDir, "hfont.css"), cssOut, {
        encoding
    })
}
