import { BaseElement, html, css } from "./BaseElement.js"
import { didNavigate } from "./utils.js"

export class ShopCategoryView extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: grid;
                margin: 1rem 0 3rem;
                gap: 1rem;
            }
            .filters {
                grid-row: 2;
            }
            @media (min-width: 767px) {
                :host {
                    grid-template-columns: 1fr 4fr;
                }
                .filters {
                    grid-row: 1;
                }
            }
        `
    }

    static get properties() {
        return {
            url: { type: Object },
            min: { type: Number },
            max: { type: Number },
            page: { type: Number },
            limit: { type: Number },
            count: { type: Number },
            filters: { type: Array },
            products: { type: Array }
        }
    }

    constructor() {
        super()
        this.products = []
        this.filters = []
    }

    get endpoint() {
        return window.siteConfig.collectionEndpoint
    }

    get categories() {
        return window.siteConfig.categoryIndex.slice(0)
    }

    async fetch(url) {
        const slug = url.pathname.replace(/^\/|\/$/g, "")
        const category = this.categories.find(c => c.url == slug)
        if (!category) throw `Could not find category ${category}`
        Object.assign(this, { url, products: [] })
        const endpoint = new URL(`${this.endpoint}`, window.origin)
        endpoint.searchParams.set("category", category.id)
        const res = await fetch(endpoint)
        const data = await res.json()

        const filters = (data.filters || []).map(f => {
            f.selection = data.filter[f.id] || []
            return f
        })

        Object.assign(this, {
            min: data.min,
            max: data.max,
            page: data.page,
            limit: data.limit,
            count: data.count,
            filters: filters,
            products: data.products
        })
    }

    navigate() {
        const url = new URL(window.location)
        if (url != this.url) this.fetch(url)
    }

    firstUpdated() {
        document.addEventListener("didNavigate", () => this.navigate())
        this.navigate()
    }

    render() {
        return html`
            <div class="filters">
                ${this.filters.map(
                    f => html`
                        <shop-category-filter
                            .id=${f._id}
                            .display_name=${f.display_name}
                            .type=${f.type}
                            .values=${f.values}
                            .selection=${f.selection}
                        ></shop-category-filter>
                    `
                )}
            </div>
            <div class="results">
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
            </div>
        `
    }
}
