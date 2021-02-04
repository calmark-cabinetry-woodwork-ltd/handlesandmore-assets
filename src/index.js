import { LitElement, html, css } from "lit-element"

class BaseElement extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                font-family: Helvetica Neue, Helvetica, sans-serif;
            }
        `
    }

    get root() {
        return this.shadowRoot
    }

    render() {
        return html`<p>Element</p>`
    }
}

const didNavigate = () => {
    const e = new CustomEvent("didNavigate", { bubbles: true, composed: true })
    document.dispatchEvent(e)
    console.log("didNavigate")
}

window.addEventListener("popstate", () => didNavigate())

customElements.define("base-element", BaseElement)

class ShopSubcategoryList extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
            .subs {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                padding: 2rem 0 0;
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

    static get attributes() {
        return {
            current: { type: Object },
            subs: { type: Array },
            id: { type: String }
        }
    }

    get categories() {
        return window.categoryIndex.slice(0)
    }

    get breadcrumbs() {
        return this.current.path
            .slice(0)
            .reverse()
            .map(id => {
                return this.categories.find(c => c.id == id)
            })
    }

    navigate() {
        const stub = document.location.pathname.replace(/^\/|\/$/g, "")
        this.current = this.categories.find(c => c.url == stub)
        this.id = this.current.id
        this.subs = this.categories.filter(
            c =>
                c.id != this.current.id &&
                c.path.slice(0).pop() == this.current.id
        )

        this.requestUpdate()
    }

    async firstUpdated() {
        this.navigate()
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
                            image=${sub.image}
                            path=${sub.path}
                        ></shop-subcategory-tile>
                    `
                )}
            </div>
        `
    }
}

customElements.define("shop-subcategory-list", ShopSubcategoryList)

class ShopSubcategoryTile extends BaseElement {
    static get properties() {
        return {
            id: { type: String },
            title: { type: String },
            url: { type: String },
            description: { type: String },
            image: { type: String },
            path: { type: Array }
        }
    }

    static get styles() {
        return css`
            :host {
                font-family: "Nunito Sans", sans-serif;
            }
            a {
                cursor: pointer;
            }
            .tile {
                display: block;
            }
            img {
                width: 100%;
            }
            header {
                font-size: 20px;
                font-weight: 700;
            }
        `
    }

    get headerPosition() {
        const h = this.root.querySelector("header")
        return {
            top: h.offsetTop,
            height: h.offsetHeight
        }
    }

    get headerHeight() {
        return this.root.querySelector("header").offsetHeight
    }

    set headerHeight(value) {
        const px = value ? `${value}px` : "auto"
        this.root.querySelector("header").style.height = px
    }

    render() {
        const nav = () => {
            history.pushState({}, this.title, `/${this.url}/`)
            didNavigate()
        }

        return html`
            <a @click=${nav} class="tile">
                <header>${this.title}</header>
                <main><img src=${this.image} /></main>
                <footer></footer>
            </a>
        `
    }
}
customElements.define("shop-subcategory-tile", ShopSubcategoryTile)
