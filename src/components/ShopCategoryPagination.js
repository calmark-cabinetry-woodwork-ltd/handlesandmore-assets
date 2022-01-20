import { BaseElement, html, css } from "./BaseElement.js"

export class ShopCategoryPagination extends BaseElement {
    static get styles() {
        return css`
            :host {
                display: block;
                text-align: right;
                padding: 1rem 0;
                margin: 1rem 0;
            }
            b-btn {
                --theme: transparent;
                --color: transparent;
                --textColor: #456;
                padding: 4px 0.25rem;
            }
            b-btn.active {
                --theme: #ff4438;
                --color: #ff4438;
                --textColor: #fff;
            }
            b-btn-group {
                border: 1px solid #9e9e9e;
                border-radius: 5px;
            }
            b-btn:before {
                font-family: hfont !important;
                position: absolute;
                top: 9px;
                left: 9px;
            }
            b-btn.next:before {
                content: var(--icon-content-caret-right);
            }
            b-btn.prev:before {
                content: var(--icon-content-caret-left);
            }
        `
    }

    static get properties() {
        return {
            page: { type: Number },
            limit: { type: Number },
            count: { type: Number }
        }
    }

    get pageCount() {
        return Math.ceil(this.count / this.limit)
    }

    get pages() {
        const output = {}
        const pages = [...new Array(this.pageCount)].map((_, index) => {
            const number = index + 1
            return {
                number,
                index,
                current: number == this.page,
                next: this.page + 1 == number,
                prev: this.page - 1 == number,
                showInPagination: [-2, -1, 0, 1, 2].includes(this.page - number)
            }
        })

        if (this.pageCount > 8) {
            output.limitStart = this.page > 3
            output.limitEnd = this.pageCount - this.page > 2
            output.limitPages = true
            output.entries = pages.filter(p => p.showInPagination)
        } else {
            output.limitPages = false
            output.entries = pages
        }

        return output
    }

    render() {
        if (!(this.page && this.limit)) return html``
        const pages = this.pages
        if (pages.length == 1) return html``
        const prev = pages.entries.find(p => p.prev)
        const next = pages.entries.find(p => p.next)
        const nav = page => ev => {
            this.trigger("page", page)
        }
        return html`
            <b-btn-group>
                ${prev
                    ? html`
                          <b-btn class="prev" @click=${nav(prev.number)}
                              >&nbsp;</b-btn
                          >
                          <a href="?page=${prev.number}" style="display: none">Previous Page</a>
                      `
                    : html``}
                ${pages.limitPages && pages.limitStart
                    ? html` <b-btn>&hellip;</b-btn> `
                    : html``}
                ${pages.entries.map(
                    p =>
                        html`
                            <b-btn
                                class=${p.current ? "active" : ""}
                                @click=${nav(p.number)}
                            >
                                ${p.number}
                            </b-btn>
                        `
                )}
                ${pages.limitPages && pages.limitEnd
                    ? html` <b-btn>&hellip;</b-btn> `
                    : html``}
                ${next
                    ? html`
                          <b-btn class="next" @click=${nav(next.number)}
                              >&nbsp;</b-btn
                          >
                          <a href="?page=${next.number}" style="display: none">Next Page</a>
                      `
                    : html``}
            </b-btn-group>
        `
    }
}
