;((doc, origin) => {
    const script = p => {
        var e = doc.createElement("script")
        for (var prop in p) e[prop] = p[prop]
        doc.head.appendChild(e)
    }

    try {
        new Function('import("")')
        script({
            src: origin + "/index.js",
            type: "module"
        })
    } catch (err) {
        script({
            src: origin + "/loader.js"
        })
    }
})(document, "https://assets.handlesandmore.ca")
