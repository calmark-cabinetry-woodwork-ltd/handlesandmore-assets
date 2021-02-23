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

    sized(url, size) {
        if (!url) return ""
        const u = new URL(url)
        const components = u.pathname.split("/")
        const filename = components.pop()
        const sz = `${size}x${size}x1`
        components.push(sz)
        components.push(filename)
        u.pathname = components.join("/")
        return u.toString()
    }

    render() {
        const img = this.sized(this.image_url, 400)

        return html`
            <a href="/${this.url}.html">
                <div
                    class="product-image"
                    style="background-image: url(${img})"
                ></div>
            </a>
            ${this.variants.length
                ? html`
                      <div class="variants">
                          ${this.variants.slice(0, 5).map(v => {
                              const img = this.sized(v.image_url, 80)

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
                  `
                : html``}
            <a href="/${this.url}.html">
                <div>${this.fulltitle}</div>
                <div class="price">${this.price}</div>
            </a>
        `
    }
}
