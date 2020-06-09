import { Component, Event, h, Prop } from '@stencil/core';
export class NewListiner {
    render() {
        return (h("section", { class: "container-fluid" },
            h(Listiner, { arr: this.newlistner })));
    }
    static get is() { return "new-listiner"; }
    static get originalStyleUrls() { return {
        "$": ["new-listiner.css"]
    }; }
    static get styleUrls() { return {
        "$": ["new-listiner.css"]
    }; }
    static get properties() { return {
        "newlistner": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "any[]",
                "resolved": "any[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
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
                "text": "\u043A\u043B\u0438\u043A \u0432 Listiner"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
/*
* компонентная функция для вывода элементов listiner
 */
const Listiner = (props) => {
    return props.arr.map((item) => {
        return (h("s-abdullakh-listiner", { arr: item }));
    });
};
