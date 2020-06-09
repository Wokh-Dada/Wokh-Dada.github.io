import { Component, Event, h, Prop } from '@stencil/core';
export class NewListiner {
    render() {
        return (h("div", { class: "container_update  newlistiner_section" },
            h("div", { class: "row subscribe p-5" },
                h("div", { class: "col-lg-6 d-none d-lg-block" },
                    h("div", { class: "newlistener_title", onClick: () => this.clickOnListiner.emit(this.arr.title) }, this.arr.title),
                    h("div", { class: "newlistiner_subtitle", onClick: () => this.clickOnListiner.emit(this.arr.subtitle) },
                        this.arr.subtitle,
                        h("a", { onClick: () => this.clickOnListiner.emit(this.arr.linkText) }, this.arr.linkText))),
                h("div", { class: "col-lg-6 col-12 px-5" },
                    h("div", { class: "newlistiner_form_email" },
                        h("form", { class: "form" },
                            h("div", { class: "input-group" },
                                h("input", { type: "text", placeholder: "Enter work email", class: "form-control rounded ", onClick: () => this.clickOnListiner.emit(event) }),
                                h("div", { class: "input-group-append" },
                                    h("button", { type: "submit", class: "my_btn btn_newlistener", onClick: () => this.clickOnListiner.emit(this.arr.btnText) }, this.arr.btnText)))),
                        h("div", { class: "d-none", onClick: () => this.clickOnListiner.emit(event) },
                            h("span", null,
                                h("i", { class: "fas fa-bolt" }),
                                " 6145 people"),
                            " are reading this newsletter every week"))))));
    }
    static get is() { return "s-abdullakh-listiner"; }
    static get originalStyleUrls() { return {
        "$": ["s-abdullakh-listiner.css"]
    }; }
    static get styleUrls() { return {
        "$": ["s-abdullakh-listiner.css"]
    }; }
    static get properties() { return {
        "arr": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 Listener"
            },
            "attribute": "arr",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickOnListiner",
            "name": "clickOnListiner",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435 button \u0432 Listiner"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
