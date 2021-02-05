import { BaseElement, html, css } from "./BaseElement.js"

export class ShopCategoryFilter extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
                margin: 0 0 2rem;
                width: 100%;
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
                ${this.type == "Text"
                    ? html`
                          <shop-category-toggles
                              .id=${this.id}
                              .values=${this.values}
                              .selection=${this.selection}
                          ></shop-category-toggles>
                      `
                    : html``}
                ${this.type == "MinMax"
                    ? html`
                          <shop-category-minmax
                              .id=${this.id}
                              .values=${this.values}
                              .selection=${this.selection}
                              label="mm"
                          ></shop-category-minmax>
                      `
                    : html``}
            </main>
        `
    }
}

class ShopControl extends BaseElement {
    static get properties() {
        return {
            id: { type: String },
            values: { type: Array },
            selection: { type: Array }
        }
    }
}

class ShopCategoryToggles extends ShopControl {
    static get styles() {
        return css`
            .label {
                font-size: 0.75rem;
                color: #313333;
                line-height: 1.8;
            }
            check-box {
                position: relative;
                left: -5px;
                width: 100%;
            }
        `
    }
    constructor() {
        super()
        this.values = []
        this.selection = []
    }

    render() {
        const update = v => ev => {
            const value = ev.detail.value
            const selection = value
                ? this.selection.concat(v)
                : this.selection.filter(s => s !== v)
            this.trigger("selection", { id: this.id, selection })
        }
        return html`
            ${this.values.map(
                v => html`
                    <check-box
                        @change=${update(v)}
                        type="switch"
                        label=${v}
                        .value=${this.selection.includes(v)}
                    >
                        <span class="label" slot="label">${v}</span>
                    </check-box>
                `
            )}
        `
    }
}
customElements.define("shop-category-toggles", ShopCategoryToggles)

class ShopCategoryMinmax extends ShopControl {
    static get styles() {
        return css`
            :host {
                display: block;
                padding: 0 0.5rem;
            }
            .input-min-max {
                display: grid;
                grid-template-columns: 80px 1fr 80px;
                gap: 0;
            }
            .input-min-max div {
                display: grid;
                grid-template-columns: 1fr 24px;
                font-size: 0.85rem;
                align-items: baseline;
                opacity: 0.8;
                color: #313333;
            }
            input {
                width: 100%;
                box-sizing: border-box;
            }
        `
    }
    static get properties() {
        return Object.assign(
            {
                min: { type: Number },
                max: { type: Number },
                label: { type: String }
            },
            ShopControl.properties
        )
    }

    firstUpdated() {
        const vals = this.values.map(v => parseInt(v))
        this.min = vals.reduce(
            (curr, acc) => (curr < acc ? curr : acc),
            Infinity
        )
        this.max = vals.reduce((curr, acc) => (curr > acc ? curr : acc), 0)
    }

    render() {
        const selection = (
            (this.selection.length && this.selection) || [this.min, this.max]
        ).map(s => parseInt(s))

        const updateSelection = selection => {
            if (selection[0] == this.min && selection[1] == this.max) {
                this.trigger("selection", { id: this.id, selection: [] })
            } else {
                this.trigger("selection", { id: this.id, selection })
            }
        }

        const sliderChange = ev => {
            const selection = ev.detail.value
            updateSelection(selection)
        }

        const inputChange = i => ev => {
            let val = parseInt(ev.target.value)
            val = val > this.max ? this.max : val < this.min ? this.min : val
            selection[i] = val
            updateSelection(selection)
        }

        return html`
            <range-slider
                range
                step="1"
                min=${this.min}
                max=${this.max}
                .value=${selection}
                style="width: 100%"
                @change=${sliderChange}
            ></range-slider>
            <div class="input-min-max">
                <div>
                    <input
                        @change=${inputChange(0)}
                        type="number"
                        min=${this.min}
                        max=${selection[1]}
                        .value=${selection[0]}
                    />
                    ${this.label}
                </div>
                <span></span>
                <div>
                    <input
                        @change=${inputChange(1)}
                        type="number"
                        min=${selection[0]}
                        max=${this.max}
                        .value=${selection[1]}
                    />
                    ${this.label}
                </div>
            </div>
        `
    }
}
customElements.define("shop-category-minmax", ShopCategoryMinmax)
