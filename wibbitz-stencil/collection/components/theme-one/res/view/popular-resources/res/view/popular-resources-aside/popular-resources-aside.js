import { Component, Event, h, Prop } from '@stencil/core';
export class PopularResourcesAside {
    render() {
        return (h("div", { class: "row" },
            h("div", { class: "col-md-4 col-12" },
                h("div", { class: "widget_img_popular_aside", style: { backgroundImage: "url(" + this.arr.asidetImg + ")" }, onClick: () => this.clickOnPopular.emit(this.arr.asidetImg) })),
            h("div", { class: "col" },
                h("div", { class: "row h-100" },
                    h("div", { class: "col-12" },
                        h("div", { class: "widget_start" },
                            h("div", { class: "widget_content" },
                                h("div", { class: this.categoryClass(this.arr.category), onClick: () => this.clickOnPopular.emit(this.arr.category) }, this.arr.category)))),
                    h("div", { class: "col-12" },
                        h("div", { class: "widget_center" },
                            h("div", { class: "widget_content_title", onClick: () => this.clickOnPopular.emit(this.arr.title) }, this.arr.title))),
                    h("div", { class: "col-12 align-self-end" },
                        h("div", { class: "widget_end" },
                            h("div", { class: "widget_read_toggle" },
                                h("a", { onClick: () => { this.clickOnPopular.emit(this.arr.btnText); } }, this.arr.btnText))))))));
    }
    categoryClass(x) {
        switch (x) {
            case 'Report':
                return 'category_report';
            case 'Blog Post':
                return 'category_blog';
            case 'Webinar':
                return 'category_webinar';
        }
    }
    static get is() { return "popular-resources-aside"; }
    static get originalStyleUrls() { return {
        "$": ["popular-resources-aside.css"]
    }; }
    static get styleUrls() { return {
        "$": ["popular-resources-aside.css"]
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u043E\u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 popular-resources-aside"
            },
            "attribute": "arr",
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
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443  popular-resources-aside \u0432 popular-resources"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
