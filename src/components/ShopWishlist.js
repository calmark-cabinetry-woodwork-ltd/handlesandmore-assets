import { BaseElement, html, css } from "./BaseElement.js"

export class ShopWishlist extends BaseElement {
    static get properties() {
        return {
            accountid: { type: String },
            wishlist: { type: Object }
        }
    }
    static get styles() {
        return css`
            :host {
                display: none;
            }
        `
    }

    updateEvent() {
        const ev = new CustomEvent("wishlist", {
            detail: this,
            bubbles: true,
            composed: true
        })
        document.querySelector("body").dispatchEvent(ev)
    }

    async firstUpdated() {
        try {
            if (this.accountid) {
                this.wishlist = await (
                    await fetch("/account/wishlist/?format=json")
                ).json()
            } else {
                this.wishlist = {}
            }
            this.updateEvent()
        } catch (err) {
            console.log({ err })
        }
    }
    render() {
        return html``
    }
}
