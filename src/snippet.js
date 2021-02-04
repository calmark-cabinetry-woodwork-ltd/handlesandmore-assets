;(doc => {
    const script = p => {
        var e = doc.createElement("script")
        for (var prop in p) e[prop] = p[prop]
        doc.head.appendChild(e)
    }

    try {
        new Function('import("")')
        script({
            src: "https://assets.handlesandmore.ca/index.js",
            type: "module"
        })
    } catch (err) {
        script({
            src: "https://assets.handlesandmore.ca/loader.js"
        })
    }
})(document)
