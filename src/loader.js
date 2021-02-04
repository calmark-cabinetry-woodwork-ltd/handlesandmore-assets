;((doc, origin) => {
    const append = e => doc.head.appendChild(e)

    const createElement = (t, p) => {
        var e = doc.createElement(t)
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
        loadModule(origin + "/index.js")
    } catch (err) {
        // Preload
        preloadScript(origin + "/babel-polyfills-nomodule.js")
        preloadScript(
            origin + "/@webcomponents/webcomponentsjs/webcomponents-loader.js"
        )
        preloadScript(origin + "/index.nomodule.js")

        // Add scripts in order
        loadScript(origin + "/babel-polyfills-nomodule.js", function () {
            loadScript(
                origin +
                    "/@webcomponents/webcomponentsjs/webcomponents-loader.js",
                function () {
                    loadScript("/index.nomodule.js")
                }
            )
        })
    }
})(document, "https://assets.handlesandmore.ca")
