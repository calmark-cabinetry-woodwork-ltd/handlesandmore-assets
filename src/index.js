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
    render() {
        return html`<p>Element</p>`
    }
}

customElements.define("base-element", BaseElement)

class ShopSubcategoryList extends BaseElement {
    static get attributes() {
        return {
            ids: { type: Array }
        }
    }

    constructor() {
        super()
        this.ids = [...this.querySelectorAll("shop-subcategory-tile")].map(
            r => r.id
        )
    }

    render() {
        return html`
            ${this.ids.map(
                id => html`
                    <shop-subcategory-tile .id=${id}></shop-subcategory-tile>
                `
            )}
        `
    }
}

customElements.define("shop-subcategory-list", ShopSubcategoryList)

class ShopSubcategoryTile extends BaseElement {
    render() {
        return html`<p>Row ${this.id}</p>`
    }
}
customElements.define("shop-subcategory-tile", ShopSubcategoryTile)
