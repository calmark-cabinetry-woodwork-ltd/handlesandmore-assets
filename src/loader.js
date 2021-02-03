const append = e => document.head.appendChild(e)

const createElement = (t, p) => {
    var e = document.createElement(t)
    for (var prop in p) e[prop] = p[prop]
    return e
}

const loadScript = (src, b, c) => {
    var sc = src
        ? createElement("script", { src })
        : createElement("script", { innerHTML: b })
    sc.onload = src ? b : c
    append(sc)
    return loadScript
}

const loadModule = src => {
    var sc = createElement("script", { src, type: "module" })
    append(sc)
}

const preloadScript = u => {
    var l = createElement("link", {
        rel: "preload",
        as: "script",
        href: u
    })
    append(l)
    return preloadScript
}

try {
    new Function('import("")')
    loadModule("/index.js")
} catch (err) {
    // Preload
    preloadScript("/babel-polyfills-nomodule.js")
    preloadScript("/@webcomponents/webcomponentsjs/webcomponents-loader.js")
    preloadScript("/index.nomodule.js")

    // Add scripts in order
    loadScript("/babel-polyfills-nomodule.js", function () {
        loadScript(
            "/@webcomponents/webcomponentsjs/webcomponents-loader.js",
            function () {
                loadScript("/index.nomodule.js")
            }
        )
    })
}
