import { BaseElement, html, css } from "./BaseElement.js"

export class ShopWishlist extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: none;
            }
        `
    }

    async updateWishlist() {
        try {
            const wishlist = await (
                await fetch("/account/wishlist/?format=json")
            ).json()
            console.log({ wishlist })
        } catch (err) {
            console.log({ err })
        }
    }

    render() {
        return html``
    }
}
