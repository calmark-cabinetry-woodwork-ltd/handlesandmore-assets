;(() => {
    const url = new URL(window.location)
    const tid = url.searchParams.get("tid")
    if (tid) {
        const event_category = "tagview"
        const event_label = tid
        if (window && window.gtag) {
            window.gtag("event", "tagview", { event_category, event_label })
        }
        url.searchParams.delete("tid")
        history.pushState({}, document.title, `${url}`)
    }
})()

export const didNavigate = () => {
    const e = new CustomEvent("didNavigate", { bubbles: true, composed: true })
    document.dispatchEvent(e)
    if (window && window.gtag) {
        window.gtag("event", "page_view", {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        })
    }
}

export const clickTrack = (category, label) => {
    if (window && window.dataLayer) {
        dataLayer.push({ event: "click", category, label })
    }
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
