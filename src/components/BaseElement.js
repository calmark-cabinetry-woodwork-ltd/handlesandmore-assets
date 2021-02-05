import { LitElement, html, css } from "lit-element"

class BaseElement extends LitElement {
    get root() {
        return this.shadowRoot
    }

    render() {
        return html`<p>Element</p>`
    }
}

export { BaseElement, html, css }
