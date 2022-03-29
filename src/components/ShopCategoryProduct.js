import { BaseElement, html, css } from "./BaseElement.js"
import { sizeImage } from "./utils.js"

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
                background-color: rgba(255, 253, 240, 0.3);
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
            .call-for-pricing {}
            .price-single {}
            .price-from-number {}
            .price-from-label {
                font-weight: normal;
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

    get prices() {
        return [this.priceExcl, ...this.variants.map(v => v.priceExcl)].map(p => parseFloat(p))
    }

    get price() {
        const prices = this.prices
        const highest = (prev, current) => current > 0 && current > prev ? current: prev
        const lowest = (prev, current) => current > 0 && current < prev ? current: prev
        let minPrice = prices.reduce(lowest, this.priceExcl)
        let maxPrice = prices.reduce(highest, this.priceExcl)
        if (minPrice == 0) {
            return html`<span class="call-for-pricing">Call for pricing</span>`
        }
        if (minPrice == maxPrice) {
            return html`<span class="price-single">$${minPrice.toFixed(2)}</span>`
        }
        return html`<span class="price-from-label">From </span><span class="price-from-number">$${minPrice.toFixed(2)}</span>`
    }

    render() {
        const img = sizeImage(this.image_url, 400)

        const singular = this.variants.length == 0

        return html`
            <a href="/${this.url}.html" title=${this.title}>
                <div
                    class="product-image"
                    style="background-image: url(${img})"
                ></div>
            </a>
            ${singular
                ? html``
                : html`
                      <div class="variants">
                          ${this.variants.slice(0, 5).map(v => {
                              const img = sizeImage(v.image_url, 80)

                              return html`
                                  <a href="/${v.url}.html" title=${v.title}>
                                      <div
                                          class="product-image"
                                          style="background-image: url(${img})"
                                      ></div>
                                  </a>
                              `
                          })}
                      </div>
                  `}
            <a href="/${this.url}.html">
                <div>${this.fulltitle}</div>
                <div class="price">${this.price}</div>
            </a>
        `
    }
}
