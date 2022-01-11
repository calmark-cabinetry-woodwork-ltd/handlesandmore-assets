;(() => {
    const url = new URL(window.location)
    const tid = url.searchParams.get("tid")
    if (tid) {
        const event_category = "tagview"
        const event_label = tid
        if (window && window.gtag) {
            window.gtag("event", "tagview", { event_category, event_label })
        }
        if (window && window.ga) {
            const eventAction = "tagview"
            const [eventCategory, eventLabel] = [event_category, eventLabel]
            window.ga("send", "event", {
                eventAction,
                eventCategory,
                eventLabel
            })
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
    if (window && window.ga) {
        const eventAction = "page_view"
        window.ga("send", "event", {
            eventAction,
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        })
    }
}

export const clickTrack = (eventCategory, eventLabel) => {
    if (window && window.ga) {
        const eventAction = "click"
        window.ga("send", "event", { eventAction, eventCategory, eventLabel })
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

export const sizeImage = (url, size) => {
    try {
        if (!url) return ""
        const u = new URL(url)
        const components = u.pathname.split("/")
        const filename = components.pop()
        const sz = `${size}x${size}x1`
        components.push(sz)
        components.push(filename)
        u.pathname = components.join("/")
        return u.toString()
    } catch (error) {
        console.log({ error })
        return ""
    }
}
