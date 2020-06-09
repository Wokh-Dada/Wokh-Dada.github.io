import { Component, Event, h, Prop } from '@stencil/core';
export class FooterA {
    render() {
        return (h(FooterTitle, { arr: this.arr }));
    }
    static get is() { return "s-abdullakh-footer-icon-block"; }
    static get originalStyleUrls() { return {
        "$": ["s-abdullakh-footer-icon-block.css"]
    }; }
    static get styleUrls() { return {
        "$": ["s-abdullakh-footer-icon-block.css"]
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
const FooterTitle = (props) => {
    return props.arr.slice(0, 1).map((item) => {
        return (h("div", null,
            h("div", { class: "corp_info", onClick: () => this.clickOnFooter.emit(event) }, item.firstBlockTitle),
            h("div", { class: "social_links mt-4" },
                h("s-abdullakh-footer-icons", { arr: item }))));
    });
};
// /**
//  * функция для присваивания классов блокам footer-menu
//  * */
// function categoryClass(x) {
//   switch (x) {
//     case 'facebook':
//       return 'fa fa-facebook-official';
//
//     case 'twitter':
//       return 'fa fa-twitter-square';
//
//     case 'invision':
//       return 'fab fa-invision';
//
//     case 'instagram':
//       return 'fa fa-instagram';
//   }
// }
