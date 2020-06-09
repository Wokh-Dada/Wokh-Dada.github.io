import { Component, Event, h, Prop } from '@stencil/core';
export class MyHeader {
    render() {
        return (h("span", { onClick: () => this.clickOnHeader.emit(this.arr) },
            h("a", null, this.arr.linkName)));
    }
    static get is() { return "menu-item"; }
    static get originalStyleUrls() { return {
        "$": ["menu-item.css"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-item.css"]
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u043C\u0435\u043D\u044E"
            },
            "attribute": "arr",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickOnHeader",
            "name": "clickOnHeader",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C\u0443 \u043C\u0435\u043D\u044E"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
