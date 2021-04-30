import { BaseElement, html, css } from "./BaseElement.js"
import { didNavigate, categories } from "./utils.js"

export class ShopSubcategoryList extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
            .subs {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                margin: 1rem 0 0;
            }
            @media (min-width: 767px) {
                .subs {
                    grid-template-columns: repeat(5, 1fr);
                }
            }
            .breadcrumbs {
                margin: 0 0 1rem;
            }
            .breadcrumbs a {
                color: #313333;
                font-size: 0.85rem;
                text-decoration: none;
            }

            .breadcrumbs a + a:before {
                font-family: icomoon;
                content: "\\e92a";
                font-size: 0.6em;
                margin: 0 0.25em;
                position: relative;
                top: -1px;
            }
        `
    }

    static get properties() {
        return {
            current: { type: Object },
            subs: { type: Array },
            id: { type: String },
            search: { type: String, reflect: true }
        }
    }

    get breadcrumbs() {
        return this.current.path
            .slice(0)
            .reverse()
            .map(id => {
                return this.categories.find(c => c.id == id)
            })
    }

    navigate(init = false) {
        const stub = document.location.pathname.replace(/^\/|\/$/g, "")
        const current = this.categories.find(c => c.url == stub)
        if (current) {
            Object.assign(this, {
                current,
                id: current.id,
                subs: this.categories
                    .filter(c => c.path.slice(1).shift() == current.id)
                    .sort((a, b) => {
                        const asort = parseInt(a.sortOrder)
                        const bsort = parseInt(b.sortOrder)
                        return asort == bsort ? 0 : asort > bsort ? 1 : -1
                    })
            })
        } else {
            // Home / Search
            Object.assign(this, {
                current: { url: "", path: [] },
                id: null,
                subs: this.categories
                    .filter(c => c.path.length == 1)
                    .sort((a, b) => {
                        const asort = parseInt(a.sortOrder)
                        const bsort = parseInt(b.sortOrder)
                        return asort == bsort ? 0 : asort > bsort ? 1 : -1
                    })
            })
        }
    }

    async firstUpdated() {
        this.categories = await categories
        this.navigate(true)
        document.addEventListener("didNavigate", () => this.navigate())
    }

    fixHeaderHeights() {
        const tiles = [...this.root.querySelectorAll("shop-subcategory-tile")]
        tiles.map(t => (t.headerHeight = 0))
        const tops = {}
        tiles
            .map(t => {
                const pos = t.headerPosition
                tops[pos.top] = tops[pos.top] || []
                tops[pos.top].push(pos.height)
                return t
            })
            .map(t => {
                const pos = t.headerPosition
                const max = tops[pos.top].reduce(
                    (acc, t) => (t > acc ? t : acc),
                    0
                )
                t.headerHeight = max
            })
    }

    render() {
        const nav = (ev, url) => {
            ev.preventDefault()
            history.pushState({}, this.title, url)
            didNavigate()
            return false
        }

        if (!this.current) return
        if (this.search) return

        setTimeout(() => this.fixHeaderHeights(), 80)
        setTimeout(() => this.fixHeaderHeights(), 500)

        return html`
            <div class="breadcrumbs">
                <a href="/">Home</a>
                ${this.breadcrumbs.map(page => {
                    const url = `/${page.url}/`
                    return html`
                        <a @click=${ev => nav(ev, url)} href=${url}>
                            ${page.title}
                        </a>
                    `
                })}
            </div>
            <div class="subs">
                ${this.subs.map(
                    sub => html`
                        <shop-subcategory-tile
                            id=${sub.id}
                            title=${sub.title}
                            url=${sub.url}
                            description=${sub.description}
                            image=${sub.image_url}
                            path=${sub.path}
                        ></shop-subcategory-tile>
                    `
                )}
            </div>
        `
    }
}
