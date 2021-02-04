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
