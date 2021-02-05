import { BaseElement, html, css } from "./BaseElement.js"

export class ShopCategoryProduct extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
            a {
                display: block;
                text-decoration: none;
                color: #313333;
            }
            .product-image {
                padding: 50%;
                background-size: cover;
                background-position: center;
            }
            .variants {
                margin: 0.5rem 0;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 0.5rem;
            }
            .price {
                color: #ff4438;
                font-weight: 600;
            }
        `
    }

    static get properties() {
        return {
            priceExcl: { type: String },
            url: { type: String },
            title: { type: String },
            fulltitle: { type: String },
            image_url: { type: String },
            product_set: { type: Object },
            variants: { type: Array }
        }
    }

    get price() {
        const x = parseFloat(this.priceExcl).toFixed(2)
        return `$${x}`
    }

    render() {
        return html`
            <a href="/${this.url}.html">
                <div
                    class="product-image"
                    style="background-image: url(${this.image_url})"
                ></div>
            </a>
            ${this.variants.length
                ? html`
                      <div class="variants">
                          ${this.variants.slice(0, 5).map(
                              v => html`
                                  <a href="/${v.url}.html" title=${v.title}>
                                      <div
                                          class="product-image"
                                          style="background-image: url(${v.image_url})"
                                      ></div>
                                  </a>
                              `
                          )}
                      </div>
                  `
                : html``}
            <a href="/${this.url}.html">
                <div>${this.title}</div>
                <div class="price">${this.price}</div>
            </a>
        `
    }
}
