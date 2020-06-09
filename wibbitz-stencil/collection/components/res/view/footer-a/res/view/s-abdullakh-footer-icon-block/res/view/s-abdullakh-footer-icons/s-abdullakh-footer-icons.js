import { Component, Event, h, Prop } from '@stencil/core';
export class FooterA {
    render() {
        return (h(FooterIcon, { arr: this.arr.icons }));
    }
    static get is() { return "s-abdullakh-footer-icons"; }
    static get originalStyleUrls() { return {
        "$": ["s-abdullakh-footer-icons.css"]
    }; }
    static get styleUrls() { return {
        "$": ["s-abdullakh-footer-icons.css"]
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
                "text": ""
            },
            "attribute": "arr",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickOnFooter",
            "name": "clickOnFooter",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
/*
* компонентная функция для вывода элементов footer2
 */
const FooterIcon = (props) => {
    return props.arr.map((item) => {
        return (h("div", { class: "social_link mr-3" },
            h("a", { href: "" },
                h("i", { class: iconClass(item.name), "aria-hidden": "true" }))));
    });
};
/**
 * функция для присваивания классов блокам footer-menu
 * */
function iconClass(x) {
    switch (x) {
        case 'facebook':
            return 'fa fa-facebook-official';
        case 'twitter':
            return 'fa fa-twitter-square';
        case 'invision':
            return 'fab fa-invision';
        case 'instagram':
            return 'fa fa-instagram';
    }
}
