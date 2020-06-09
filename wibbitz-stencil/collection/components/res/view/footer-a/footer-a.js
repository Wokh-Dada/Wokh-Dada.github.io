import { Component, Event, h, Prop } from '@stencil/core';
export class FooterA {
    render() {
        return (h("footer", { class: "container-fluid footer" },
            h("div", { class: "container" },
                h("div", { class: "row footer_margin" },
                    h(FooterIconBlock, { arr: this.footer }),
                    h(FooterItemBlocks, { arr: this.footer })),
                h("div", { class: "copyright" },
                    h("div", { class: "row copyright_content" },
                        h("div", { class: "col-12" },
                            h("div", { class: "copyright_content_languages" },
                                h("span", { class: "language_icon pr-2" },
                                    h("i", { class: "fas fa-globe-americas" })),
                                "Choose language"),
                            h("div", { class: "content_language" },
                                h("span", { class: "pr-4" },
                                    h("a", null, "English(United States)")),
                                h("span", null,
                                    h("a", null, "French")))))))));
    }
    static get is() { return "footer-a"; }
    static get originalStyleUrls() { return {
        "$": ["footer-a.css"]
    }; }
    static get styleUrls() { return {
        "$": ["footer-a.css"]
    }; }
    static get properties() { return {
        "footer": {
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
            "attribute": "footer",
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
const FooterItemBlocks = (props) => {
    return props.arr.slice(1, 5).map((item) => {
        return (h("div", { class: "col-lg-2 col-sm-4" },
            h("s-abdullakh-footer-menu", { arr: item })));
    });
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterIconBlock = (props) => {
    return props.arr.slice(0, 1).map((item) => {
        return (h("div", { class: "col-lg-3 col-sm-4" },
            h("s-abdullakh-footer-icon-block", { arr: item })));
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
