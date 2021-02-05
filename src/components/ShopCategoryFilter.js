import { BaseElement, html, css } from "./BaseElement.js"
import "blackstone-ui/presenters/form/controls/range-slider.js"

export class ShopCategoryFilter extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
            header {
                position: relative;
                font-family: "Nunito Sans", Helvetica, sans-serif;
                color: #313333;
                font-size: 0.9rem;
                line-height: 1.5rem;
                font-weight: 700;
                letter-spacing: 0.05em;
                text-transform: none;
                cursor: pointer;
            }
            main {
                display: none;
            }
            main.open {
                display: block;
            }
            .toggle {
                position: absolute;
                top: 0;
                right: 0;
                line-height: 1.5rem;
            }
            .toggle:before {
                font-family: icomoon;
                content: "\\e922";
                font-size: 10px;
            }
            .toggle.open:before {
                content: "\\e920";
            }
        `
    }

    static get properties() {
        return {
            open: { type: Boolean },
            id: { type: String },
            display_name: { type: String },
            type: { type: String },
            values: { type: Array },
            selection: { type: Array }
        }
    }

    constructor() {
        super()
        this.open = true
    }

    render() {
        const mainClass = this.open ? "open" : ""
        const toggleClass = this.open ? "toggle open" : "toggle"

        const toggleOpen = () => (this.open = !this.open)

        return html`
            <header @click=${toggleOpen}>
                ${this.display_name}
                <span class=${toggleClass}></span>
            </header>
            <main class=${mainClass}>
                <p>Filter values</p>
                <range-slider
                    range
                    min="300"
                    max="1000"
                    .value=${[400, 800]}
                    style="width: 100%"
                ></range-slider>
            </main>
        `
    }
}
