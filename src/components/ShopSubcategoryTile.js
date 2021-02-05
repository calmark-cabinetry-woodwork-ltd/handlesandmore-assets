import { BaseElement, html, css } from "./BaseElement.js"
import { didNavigate } from "./utils.js"

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
