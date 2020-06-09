import { Component, Event, h, Prop } from '@stencil/core';
export class SidebarA {
    render() {
        return (h("div", { class: "col-12" },
            h("div", { class: "row news_saidbar" },
                h("div", { class: "col-6" },
                    h("div", { class: "widget_photo", style: { backgroundImage: "url(" + this.arr.widgetImg + ")" }, onClick: () => this.clickOnNews.emit(this.arr.widgetImg) })),
                h("div", { class: "col" },
                    h("div", { class: "row h-100" },
                        h("div", { class: "col-12" },
                            h("div", { class: "d-flex align-items-start" },
                                h("div", { class: "widget_content" },
                                    h("div", { class: this.categoryClass(this.arr.category), onClick: () => this.clickOnNews.emit(this.arr.category) }, this.arr.category)))),
                        h("div", { class: "col-12" },
                            h("div", { class: "d-flex align-items-center" },
                                h("div", { class: "widget_content_title", onClick: () => this.clickOnNews.emit(this.arr.title) }, this.arr.title))),
                        h("div", { class: "col-12 align-self-end" },
                            h("div", { class: "widget_read_toggle" },
                                h("a", { onClick: () => this.clickOnNews.emit(this.arr.btnText) }, this.arr.btnText))))))));
    }
    /***/
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
    static get is() { return "sidebar-a"; }
    static get originalStyleUrls() { return {
        "$": ["sidebar-a.css"]
    }; }
    static get styleUrls() { return {
        "$": ["sidebar-a.css"]
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
    static get events() { return [{
            "method": "clickOnNews",
            "name": "clickOnNews",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 news"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
