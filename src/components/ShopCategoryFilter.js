import { BaseElement, html, css } from "./BaseElement.js"

export class ShopCategoryFilter extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
                margin: 0 0 2rem;
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
                padding: 1rem 0;
            }
            header.selected {
                color: #ff4438;
            }
            main {
                display: none;
            }
            main.open {
                display: block;
                margin: 0;
                padding: 0 0 2rem;
            }
            .toggle {
                position: absolute;
                top: 1rem;
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
            @media (min-width: 767px) {
                header {
                    padding: 0;
                }
                main.open,
                main {
                    margin: 0;
                    padding: 0;
                }
                .toggle {
                    top: 0;
                }
            }
        `
    }

    static get properties() {
        return {
            open: { type: Boolean },
            key: { type: String },
            display_name: { type: String },
            type: { type: String },
            values: { type: Array },
            selection: { type: Array },
            unit: { type: String },
            presets: { type: Array }
        }
    }

    constructor() {
        super()
        this.open = window.innerWidth > 767
    }

    render() {
        const mainClass = this.open ? "open" : ""
        const toggleClass = this.open ? "toggle open" : "toggle"

        const toggleOpen = () => (this.open = !this.open)
        const selectionClass = this.selection.length ? "selected" : ""

        return html`
            <header class=${selectionClass} @click=${toggleOpen}>
                ${this.display_name}
                <span class=${toggleClass}></span>
            </header>
            <main class=${mainClass}>
                ${this.type == "Text"
                    ? html`
                          <shop-category-toggles
                              .key=${this.key}
                              .values=${this.values}
                              .selection=${this.selection}
                          ></shop-category-toggles>
                      `
                    : html``}
                ${this.type == "MinMax"
                    ? html`
                          <shop-category-minmax
                              .key=${this.key}
                              .values=${this.values}
                              .selection=${this.selection}
                              .label=${this.unit}
                          ></shop-category-minmax>
                      `
                    : html``}
                ${this.presets && this.presets.length
                    ? html`
                          <shop-category-presets
                              .key=${this.key}
                              .selection=${this.selection}
                              .presets=${this.presets}
                          ></shop-category-presets>
                      `
                    : html``}
            </main>
        `
    }
}

class ShopControl extends BaseElement {
    static get properties() {
        return {
            key: { type: String },
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
            .wrapper.tall {
                max-height: 300px;
                overflow-y: scroll;
            }
        `
    }
    constructor() {
        super()
        this.values = []
        this.selection = []
    }

    get $wrapper() {
        return this.root.querySelector(".wrapper")
    }

    render() {
        const update = v => ev => {
            const value = ev.detail.value
            const selection = value
                ? this.selection.concat(v)
                : this.selection.filter(s => s !== v)
            this.trigger("selection", { key: this.key, selection })
        }

        const wrapperClass =
            this.values.length > 20 ? "wrapper tall" : "wrapper"

        return html`
            <div class=${wrapperClass}>
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
            </div>
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
                label: { type: String },
                unit: { type: String }
            },
            ShopControl.properties
        )
    }

    render() {
        const vals = this.values.map(v => parseInt(v))
        const min = vals.reduce(
            (curr, acc) => (curr < acc ? curr : acc),
            Infinity
        )
        const max = vals.reduce((curr, acc) => (curr > acc ? curr : acc), 0)
        if (this.min != min) this.min = min
        if (this.max != max) this.max = max

        const selection = (
            (this.selection.length && this.selection) || [this.min, this.max]
        ).map(s => parseInt(s))

        const updateSelection = selection => {
            const full = selection[0] == this.min && selection[1] == this.max
            const s = full ? [] : selection
            this.trigger("selection", { key: this.key, selection: s })
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

class ShopCategoryPresets extends BaseElement {
    static get properties() {
        return {
            key: { type: String },
            selection: { type: Array },
            presets: { type: Array }
        }
    }
    static get styles() {
        return css`
            :host {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 0.5rem;
                margin: 1rem 0 1rem;
            }
            button {
                background-color: #dcdad6;
                color: #555;
                box-shadow: none;
                outline: none;
                border: 1px solid #b7b6b5;
                font-size: 0.8rem;
                padding: 0.35em 0em;
                box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
                transition: filter 200ms ease;
                transition-timing-function: ease-in-out;
                font-family: "Nunito Sans", sans-serif;
                border-radius: 50px;
                letter-spacing: 0.0625em;
                text-transform: none;
                text-decoration: none;
                line-height: 2em;
                font-weight: 400;
                cursor: pointer;
            }
            button.active {
                background-color: #ff4438;
                border: 1px solid #ff4438;
                color: white;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            }
        `
    }
    render() {
        const isActive = preset => {
            const nomatch = preset.values.find((v, i) => {
                return v !== this.selection[i]
            })
            return nomatch ? "" : "active"
        }
        const update = preset => ev => {
            // if active unset, else set
            const selection = isActive(preset) == "active" ? [] : preset.values
            this.trigger("selection", { key: this.key, selection })
        }
        return html`
            ${this.presets.map(
                p => html`
                    <button @click=${update(p)} class="${isActive(p)}">
                        ${p.name}
                    </button>
                `
            )}
        `
    }
}
customElements.define("shop-category-presets", ShopCategoryPresets)
