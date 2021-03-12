import { BaseElement, html, css } from "./BaseElement.js"
import { didNavigate, categories } from "./utils.js"

export class ShopCategoryView extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: grid;
                margin: 1rem 0 3rem;
                gap: 1rem;
                align-items: start;
            }
            .filters {
                grid-row: 1 / auto;
            }
            .results {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                grid-row: 2 / auto;
            }
            shop-category-pagination {
                grid-column: span 2;
            }

            shop-category-filter {
                display: none;
                padding: 0.55rem;
                margin: 0 0 5px;
            }

            .showfilter shop-category-filter {
                display: block;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 3px;
            }

            .mobile-filter-toggle a {
                display: block;
                border: 2px solid #ff4438;
                color: #ff4438;
                letter-spacing: 0.0625em;
                text-transform: none;
                text-decoration: none;
                line-height: 2em;
                font-weight: 400;
                cursor: pointer;
                padding: 0.5em 0em;
                text-align: center;
                margin: 0 0 1rem;
                border-radius: 50px;
            }
            .showfilter .mobile-filter-toggle a {
                color: white;
                background-color: #ff4438;
            }

            @media (min-width: 767px) {
                .mobile-filter-toggle {
                    display: none;
                }
                :host {
                    grid-template-columns: repeat(5, 1fr);
                }
                .filters {
                    grid-row: 2 / auto;
                }
                .results {
                    grid-row: 1 / auto;
                    grid-template-columns: repeat(4, 1fr);
                    grid-column: span 4;
                }
                shop-category-pagination {
                    grid-column: span 4;
                }
                shop-category-filter {
                    display: block;
                    padding: 0;
                    margin: 0 0 2rem;
                }
            }
        `
    }

    static get properties() {
        return {
            url: { type: Object },
            page: { type: Number },
            title: { type: String },
            limit: { type: Number },
            count: { type: Number },
            filters: { type: Array },
            products: { type: Array },
            type: { type: String },
            search: { type: String, reflect: true },
            showfilter: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.products = []
        this.filters = []
        this.url = new URL("http://example.com")
        this.type = ""
        this.title = ""
        this.showfilter = window.innerWidth > 767
        this.on("selection", ev => {
            const { key, selection } = ev.detail
            const url = new URL(window.location)
            url.searchParams.set(key, selection.join("|"))
            url.searchParams.set("page", "1")
            for (const [k, v] of url.searchParams.entries()) {
                if (!v) url.searchParams.delete(k)
            }
            history.pushState({}, null, url.toString())
            didNavigate()
        })
        this.on("page", ev => {
            const url = new URL(window.location)
            url.searchParams.set("page", ev.detail)
            history.pushState({}, null, url.toString())
            didNavigate()
        })
    }

    get endpoint() {
        return window.siteConfig.collectionEndpoint
    }

    async fetch(url) {
        const slug = url.pathname.replace(/^\/|\/$/g, "")
        const category = (await categories).find(c => c.url == slug) || {
            type: "index",
            title: "Collection"
        }

        // Clear screen
        Object.assign(this, {
            url,
            products: null,
            page: 1,
            limit: 16,
            count: 0,
            title: category.title,
            type: category.type
        })

        if (category.type !== "category") {
            return
        }

        // Fetch results
        const endpoint = new URL(`${this.endpoint}`, window.origin)
        // mirror window search params
        for (const [k, v] of url.searchParams.entries()) {
            endpoint.searchParams.set(k, v)
        }
        // add category search param
        endpoint.searchParams.set("category", category.id)
        endpoint.searchParams.set("limit", url.searchParams.get("limit") || 16)
        endpoint.searchParams.set("page", url.searchParams.get("page") || 1)

        const res = await fetch(endpoint)
        const data = await res.json()

        const currentUrl = new URL(window.location)

        const filters = (data.filters || []).map(f => {
            f.key = `filter[${f._id}]`
            f.unit = f.unit || ""
            const param = currentUrl.searchParams.get(f.key) || ""
            f.selection = param.split("|").filter(f => f)
            return f
        })

        Object.assign(this, {
            page: data.page,
            limit: data.limit,
            count: data.count,
            filters: filters,
            products: data.products || []
        })
    }

    async fetchSearch(url, searchString) {
        // Clear screen
        Object.assign(this, {
            url,
            products: null,
            page: 1,
            limit: 16,
            count: 0,
            title: "Search",
            type: "category"
        })
        // Fetch results
        const endpoint = new URL(`${this.endpoint}`, window.origin)
        // mirror window search params
        for (const [k, v] of url.searchParams.entries()) {
            endpoint.searchParams.set(k, v)
        }
        endpoint.searchParams.set("q", searchString)
        endpoint.searchParams.set("category", "")
        endpoint.searchParams.set("limit", url.searchParams.get("limit") || 16)
        endpoint.searchParams.set("page", url.searchParams.get("page") || 1)
        const res = await fetch(endpoint)
        const data = await res.json()

        const currentUrl = new URL(window.location)

        const filters = (data.filters || []).map(f => {
            f.key = `filter[${f._id}]`
            f.unit = f.unit || ""
            const param = currentUrl.searchParams.get(f.key) || ""
            f.selection = param.split("|").filter(f => f)
            return f
        })

        Object.assign(this, {
            page: data.page,
            limit: data.limit,
            count: data.count,
            filters: filters,
            products: data.products || []
        })
    }

    async navigate(scroll = true) {
        const url = new URL(window.location)
        const scrollOptions = {
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        }
        const rect = this.getBoundingClientRect()
        const shouldScroll =
            scroll && this.scrollIntoView && rect && rect.y && rect.y < 0
        const searchString = this.search

        if (url.toString() != this.url.toString()) {
            if (searchString) {
                await this.fetchSearch(url, searchString)
            } else {
                await this.fetch(url)
            }
            if (shouldScroll) {
                this.scrollIntoView(scrollOptions)
            }
        }
    }

    firstUpdated() {
        document.addEventListener("didNavigate", () => this.navigate())
        this.navigate(false)
    }

    get h1() {
        return document.querySelector(".page-title h1")
    }

    set h1(value) {
        const h = this.h1
        if (h) h.innerText = value
    }

    render() {
        this.h1 = this.title

        if (this.type !== "category") {
            return html``
        }

        const toggleFilters = ev => {
            ev.preventDefault()
            this.showfilter = !this.showfilter
            return false
        }

        return html`
            <div class="filters ${this.showfilter ? "showfilter" : ""}">
                <div class="mobile-filter-toggle">
                    <a href="#" @click=${toggleFilters}>
                        Filter Results
                        <span class="icon-ellipsis-v"></span>
                    </a>
                </div>
                ${this.filters.map(
                    f => html`
                        <shop-category-filter
                            .key=${f.key}
                            .display_name=${f.display_name}
                            .type=${f.type}
                            .values=${f.values}
                            .selection=${f.selection}
                            .unit=${f.unit}
                            .presets=${f.presets}
                        ></shop-category-filter>
                    `
                )}
            </div>
            <div class="results">
                ${this.products === null
                    ? html` <p>Loading</p> `
                    : html`
                          ${this.products.length
                              ? html`
                                    ${this.products.map(
                                        p => html`
                                            <shop-category-product
                                                .priceExcl=${p.priceExcl}
                                                .url=${p.url}
                                                .title=${p.title}
                                                .fulltitle=${p.fulltitle}
                                                .image_url=${p.image_url}
                                                .product_set=${p.product_set}
                                                .variants=${p.variants}
                                            ></shop-category-product>
                                        `
                                    )}
                                `
                              : html` <p>No results</p> `}
                      `}
                <shop-category-pagination
                    .page=${this.page}
                    .limit=${this.limit}
                    .count=${this.count}
                ></shop-category-pagination>
            </div>
        `
    }
}
