import { Component, Event, h, Prop } from '@stencil/core';
export class PopularResourcesBanner {
    render() {
        return (h("div", { class: "right_section_child" },
            h("div", { class: "right_section_title", onClick: () => this.clickOnPopular.emit(this.arr.title) }, this.arr.title),
            h("div", { class: "widget_read_toggle", onClick: () => this.clickOnPopular.emit(this.arr.btnText) },
                h("a", null, this.arr.btnText))));
    }
    static get is() { return "popular-resources-banner"; }
    static get originalStyleUrls() { return {
        "$": ["popular-resources-banner.css"]
    }; }
    static get styleUrls() { return {
        "$": ["popular-resources-banner.css"]
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u043E\u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 popular-resources-banner"
            },
            "attribute": "arr",
            "reflect": false
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
            "method": "clickOnAside",
            "name": "clickOnAside",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435 Read Report \u0432 Sidebar"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "clickOnPopular",
            "name": "clickOnPopular",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443  popular-resources-aside \u0432 popular-banner"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
