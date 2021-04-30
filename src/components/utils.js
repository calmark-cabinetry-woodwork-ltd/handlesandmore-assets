export const didNavigate = () => {
    const e = new CustomEvent("didNavigate", { bubbles: true, composed: true })
    document.dispatchEvent(e)
}

export const categories = (async () => {
    return (await (await fetch(window.siteConfig.categoryEndpoint)).json())
        .categories
})()

export const aFetch = (request, opts = {}) => {
    const controller = new AbortController()
    const { signal } = controller

    return {
        abort: () => controller.abort(),
        ready: fetch(request, { ...opts, signal })
    }
}
