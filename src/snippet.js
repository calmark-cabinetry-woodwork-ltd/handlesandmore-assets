const append = e => document.head.appendChild(e)

const createElement = (t, p) => {
    var e = document.createElement(t)
    for (var prop in p) e[prop] = p[prop]
    return e
}

const domain = "https://assets.handlesandmore.ca"

try {
    new Function('import("")')
    append(
        createElement("script", {
            src: `${domain}/index.js`,
            type: "module"
        })
    )
} catch (err) {
    append(
        createElement("script", {
            src: `${domain}/loader.js`
        })
    )
}
