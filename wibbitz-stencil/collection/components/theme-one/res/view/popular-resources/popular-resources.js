import { Component, Event, h, Prop } from '@stencil/core';
export class PopularResources {
    render() {
        return (h("section", { class: "container mt-5" },
            h("div", { class: "row pt-5" },
                h("div", { class: "col-12" },
                    h("div", { class: "resources_title", onClick: () => this.clickOnPopular.emit(this.popularAsideTitle) }, this.popularAsideTitle)),
                h("div", { class: "col-lg-7 col-12" },
                    h("div", { class: "row" },
                        h("div", { class: "col-12 mb-2" },
                            h(PopularAside, { arr: this.popularAside })))),
                h("div", { class: "col-lg-5 d-none d-lg-block", onClick: () => this.clickOnPopular.emit(this.popularBanner) },
                    h("div", { class: "right_section" },
                        h("div", { class: "row h-100" },
                            h("div", { class: "col-12 align-self-center" },
                                h(PopularBanner, { arr: this.popularBanner }))))))));
    }
    static get is() { return "popular-resources"; }
    static get originalStyleUrls() { return {
        "$": ["popular-resources.css"]
    }; }
    static get styleUrls() { return {
        "$": ["popular-resources.css"]
    }; }
    static get properties() { return {
        "popularAside": {
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u043E\u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 popular-resources-aside"
            }
        },
        "popularBanner": {
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u043E\u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 popular-resources-banner"
            }
        },
        "popularAsideTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u043E\u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 popular-resources-aside"
            },
            "attribute": "popular-aside-title",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickOnPopular",
            "name": "clickOnPopular",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 popular-resources"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
/*
* компонентная функция для вывода элементов news-main-block
 */
const PopularAside = (props) => {
    return props.arr.map((item) => {
        return (h("div", { class: "col-12 mb-2" },
            h("popular-resources-aside", { arr: item })));
    });
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const PopularBanner = (props) => {
    return props.arr.map((item) => {
        return (h("div", { class: "col-12 mb-2" },
            h("popular-resources-banner", { arr: item })));
    });
};
