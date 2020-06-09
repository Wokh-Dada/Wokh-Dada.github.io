import { Component, Event, h, Prop } from '@stencil/core';
export class SAbdullakhNewsMainBlock {
    render() {
        return (h("div", null,
            h("div", { class: "category_blog", onClick: () => this.clickOnNews.emit() }, this.arr.category),
            h("div", { class: "news_section_title_block", onClick: () => this.clickOnNews.emit() }, this.arr.title),
            h("div", { class: "news_section_subtitle_block", onClick: () => this.clickOnNews.emit(event) },
                this.arr.subtitle,
                "."),
            h("div", { class: "text-center text-lg-left" },
                h("button", { class: "my_btn new_section_btn", onClick: () => this.clickOnNews.emit() }, this.arr.btnText))));
    }
    static get is() { return "s-abdullakh-news-main-block"; }
    static get originalStyleUrls() { return {
        "$": ["s-abdullakh-news-main-block.css"]
    }; }
    static get styleUrls() { return {
        "$": ["s-abdullakh-news-main-block.css"]
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 Sidebar"
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
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 News"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
