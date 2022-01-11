import { BaseElement, html, css } from "./BaseElement.js"
import { didNavigate, sizeImage } from "./utils.js"

export class ShopSubcategoryTile extends BaseElement {
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
                display: block;
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
                padding: 0.5rem 0;
                box-sizing: border-box;
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

    get defaultImage() {
        return `<svg viewBox="0 0 550 550" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="550" height="550" fill="#c9c6c3"/>
            <rect x="210" y="235" width="110" height="81" rx="4" fill="transparent" stroke="rgba(255,255,255,0.4)" stroke-width="10" />
            <circle cx="244" cy="266" r="12" fill="rgba(255,255,255,0.4)"/>
            <path d="M220 304Q226 282 248 292Q260 297 268 286C277 270,312 270,310 304Z" fill="rgba(255,255,255,0.4)"/>
        </svg>`.replace(/\n\s+/gm, "")
    }

    get defaultImageBase64() {
        const b64 = btoa(this.defaultImage)
        return `data:image/svg+xml;base64,${b64}`
    }

    render() {
        const nav = () => {
            history.pushState({}, this.title, `/${this.url}/`)
            didNavigate()
        }

        const image = sizeImage(this.image, 400)

        return html`
            <a @click=${nav} class="tile">
                <header>${this.title}</header>
                <main>
                    <img src=${image || this.defaultImageBase64} />
                </main>
                <footer></footer>
            </a>
        `
    }
}
