import { BaseElement, html, css } from "./BaseElement.js"

const toImp = val => {
    if (Array.isArray(val)) {
        return val.map(v => toImp(v))
    }
    return Math.round((parseFloat(val) / 25.4) * 16) / 16
}

const toMM = val => {
    if (Array.isArray(val)) {
        return val.map(v => toMM(v))
    }
    return Math.round(parseFloat(val) * 25.5 * 10) / 10
}

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
            .preset-display-unit {
                display: grid;
                grid-template-columns: 1fr 1fr;
                border: 1px solid rgb(183, 182, 181);
                border-radius: 50px;
                box-shadow: rgb(0 0 0 / 5%) 0px 3px 5px;
                line-height: 1.65em;
                margin-top: 0.5rem;
            }
            .preset-display-unit > div {
                display: block;
                text-align: center;
                padding: 0.35em 0em;
                border: 1px solid rgb(183, 182, 181);
                font-size: 0.8rem;
                cursor: pointer;
                border-width: 0 1px 0 0;
                background-color: rgb(220, 218, 214);
            }
            .preset-display-unit > div:first-child {
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
            }
            .preset-display-unit > div:last-child {
                border-top-right-radius: 50px;
                border-bottom-right-radius: 50px;
                border-width: 0;
            }
            .preset-display-unit.unit-mm .mm,
            .preset-display-unit.unit-in .in {
                background-color: var(--fc-theme);
                color: white;
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

    get filterid() {
        return this.key.replace(/.*\[(.*)\].*/, "$1")
    }

    constructor() {
        super()
        this.open = window.innerWidth > 767
    }

    render() {
        const { filterid } = this
        const settingid = `${filterid}-unit`
        const displayUnit = BaseElement.getOption(settingid) || this.unit
        const displayDefault = displayUnit == this.unit

        const mainClass = this.open ? "open" : ""
        const toggleClass = this.open ? "toggle open" : "toggle"

        const toggleOpen = () => (this.open = !this.open)
        const selectionClass = this.selection.length ? "selected" : ""

        const imperialPresets = (this.presets || []).filter(p =>
            /\d+\s*in$/i.exec(p.name)
        )
        const metricPresets = (this.presets || []).filter(p =>
            /\d+\s*mm$/i.exec(p.name)
        )
        const showUnitPresets =
            imperialPresets.length + metricPresets.length > 0

        const presetDisplayUnit = displayDefault ? "unit-mm" : "unit-in"

        const setUnit = unit => ev => {
            BaseElement.setOption(settingid, unit)
            this.unit = unit == "alt" ? "in" : "mm"
            this.requestUpdate()
        }

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
                          ${showUnitPresets
                              ? html`
                                    <div
                                        class="preset-display-unit ${presetDisplayUnit}"
                                    >
                                        <div @click=${setUnit("")} class="mm">
                                            Metric
                                        </div>
                                        <div
                                            @click=${setUnit("alt")}
                                            class="in"
                                        >
                                            Imperial
                                        </div>
                                    </div>
                                    <shop-category-presets
                                        .key=${this.key}
                                        .selection=${this.selection}
                                        .presets=${displayDefault
                                            ? metricPresets
                                            : imperialPresets}
                                    ></shop-category-presets>
                                `
                              : html`
                                    <shop-category-minmax
                                        .key=${this.key}
                                        .values=${this.values}
                                        .selection=${this.selection}
                                        .label=${this.unit}
                                        .unit=${this.unit}
                                    ></shop-category-minmax>
                                    <shop-category-presets
                                        .key=${this.key}
                                        .selection=${this.selection}
                                        .presets=${this.presets}
                                    ></shop-category-presets>
                                `}
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
    get filterid() {
        return this.key.replace(/.*\[(.*)\].*/, "$1")
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
            this.selection = selection // cannot wait for async fetch to update this.selection
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
            .display-unit {
                display: none;
            }
            .display-unit.active {
                display: block;
            }
        `
    }

    get autoconvert() {
        return `${this.label}`.toLowerCase() == "mm"
    }

    static get properties() {
        return Object.assign(
            {
                min: { type: Number },
                max: { type: Number },
                label: { type: String },
                unit: { type: String },
                displayUnit: { type: String }
            },
            ShopControl.properties
        )
    }

    render() {
        const vals = this.values.map(v => parseFloat(v))
        const min = vals.reduce(
            (curr, acc) => (curr < acc ? curr : acc),
            Infinity
        )
        const max = vals.reduce((curr, acc) => (curr > acc ? curr : acc), 0)
        if (this.min != min) this.min = min
        if (this.max != max) this.max = max

        const selection = (
            (this.selection.length && this.selection) || [this.min, this.max]
        ).map(s => parseFloat(s))

        const updateSelection = selection => {
            const full = selection[0] == this.min && selection[1] == this.max
            const s = full ? [] : selection
            this.trigger("selection", { key: this.key, selection: s })
        }

        const sliderChange = ev => {
            const selection = ev.detail.value
            updateSelection(selection)
        }
        const impSliderChange = ev => {
            const selection = ev.detail.value
            updateSelection(toMM(selection))
        }

        const inputChange = i => ev => {
            let val = parseFloat(ev.target.value)
            val = val > this.max ? this.max : val < this.min ? this.min : val
            selection[i] = val
            updateSelection(selection)
        }

        const impInputChange = i => ev => {
            let val = toMM(ev.target.value)
            val = val > this.max ? this.max : val < this.min ? this.min : val
            selection[i] = val
            updateSelection(selection)
        }

        const { key, autoconvert, filterid } = this

        const settingid = `${filterid}-unit`
        const displayUnit = BaseElement.getOption(settingid) || this.unit
        const displayDefault = displayUnit == this.unit

        const setUnit = ev => {
            const { value } = ev.detail
            const unit = value ? this.unit : "alt"
            BaseElement.setOption(settingid, unit)
            this.displayUnit = unit
        }

        return html`
            <div class="display-unit ${displayDefault ? "active" : ""}">
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
            </div>

            ${autoconvert
                ? html`
                      <div
                          class="display-unit ${displayDefault ? "" : "active"}"
                      >
                          <range-slider
                              range
                              step="0.0625"
                              min=${toImp(this.min)}
                              max=${toImp(this.max)}
                              .value=${toImp(selection)}
                              style="width: 100%"
                              @change=${impSliderChange}
                          ></range-slider>
                          <div class="input-min-max">
                              <div>
                                  <input
                                      @change=${impInputChange(0)}
                                      type="number"
                                      min=${toImp(this.min)}
                                      max=${toImp(selection[1])}
                                      step="0.0625"
                                      .value=${toImp(selection[0])}
                                  />
                                  in
                              </div>
                              <span></span>
                              <div>
                                  <input
                                      @change=${impInputChange(1)}
                                      type="number"
                                      min=${toImp(selection[0])}
                                      max=${toImp(this.max)}
                                      step="0.0625"
                                      .value=${toImp(selection[1])}
                                  />
                                  in
                              </div>
                          </div>
                      </div>
                      <check-box
                          @change=${setUnit}
                          type="switch"
                          label="Metric"
                          .value=${displayDefault}
                      >
                          <span class="label" slot="label">Metric</span>
                      </check-box>
                  `
                : html``}
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
