import { LitElement, html, css } from "lit-element"

class BaseElement extends LitElement {
    get root() {
        return this.shadowRoot
    }

    static getOption(key) {
        const val = window.localStorage.getItem(key) || null
        return val ? JSON.parse(val) : null
    }

    static setOption(key, value) {
        const val = value ? JSON.stringify(value) : null
        window.localStorage.setItem(key, val)
    }

    render() {
        return html`<p>Element</p>`
    }

    trigger(type, detail = {}, bubbles = true, composed = true) {
        const ev = new CustomEvent(type, { detail, bubbles, composed })
        this.dispatchEvent(ev)
    }

    on(type, callback) {
        this.addEventListener(type, callback)
    }

    off(type, callback) {
        this.removeEventListener(type, callback)
    }
}

export { BaseElement, html, css }
