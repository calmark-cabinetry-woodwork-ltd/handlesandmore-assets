;((doc, origin) => {
    const append = e => doc.head.appendChild(e)

    const createElement = (t, p) => {
        var e = doc.createElement(t)
        for (var prop in p) e[prop] = p[prop]
        return e
    }

    const loadScript = (src, b, c) => {
        var sc = src
            ? createElement("script", { src: origin + src })
            : createElement("script", { innerHTML: b })
        sc.onload = src ? b : c
        append(sc)
        return loadScript
    }

    const loadModule = src => {
        var sc = createElement("script", { src: origin + src, type: "module" })
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
        loadScript("/babel-polyfills-nomodule.js", () => {
            loadScript(
                "/@webcomponents/webcomponentsjs/webcomponents-loader.js",
                () => {
                    loadScript("/index.nomodule.js")
                }
            )
        })
    }
})(document, "https://assets.handlesandmore.ca")
