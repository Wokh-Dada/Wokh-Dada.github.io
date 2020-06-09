import { Component, h, Prop } from '@stencil/core';
export class SAbdullakhFooterLinks {
    render() {
        return (h(FootLink, { arr: this.arr.items }));
    }
    static get is() { return "s-abdullakh-footer-links"; }
    static get originalStyleUrls() { return {
        "$": ["s-abdullakh-footer-links.css"]
    }; }
    static get styleUrls() { return {
        "$": ["s-abdullakh-footer-links.css"]
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 Sidebar"
            },
            "attribute": "arr",
            "reflect": false
        }
    }; }
}
/*
* компонентная функция для вывода элементов меню
 **/
const FootLink = (props) => {
    return props.arr.map((item) => {
        return (h("span", { class: "footer_link" },
            h("a", { href: "" }, item.linkName)));
    });
};
