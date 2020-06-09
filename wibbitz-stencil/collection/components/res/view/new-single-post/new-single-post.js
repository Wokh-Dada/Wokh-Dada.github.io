import { Component, Event, h, Prop } from '@stencil/core';
export class NewSinglePost {
    render() {
        return (h("div", { class: "col-12" },
            h("div", { class: "row" },
                h("div", { class: "col-12" },
                    h("div", { class: "widget_photo_single_page widget_margin", style: { backgroundImage: "url(" + this.arr.newPostImg + this.arr.eventsImg + ")" }, onClick: () => this.clickOnNewSinglePost.emit(this.arr.newPostImg || this.arr.eventsImg) })),
                h("div", { class: "col" },
                    h("div", { class: "row" },
                        h("div", { class: "col-12" },
                            h("div", { class: "" },
                                h("div", { class: "widget_content" },
                                    h("div", { class: "category_blog", onClick: () => this.clickOnNewSinglePost.emit(this.arr.category) }, this.arr.category)))),
                        h("div", { class: "col-12" },
                            h("div", { class: "" },
                                h("div", { class: "widget_content_title new_single_post_widget_title", onClick: () => this.clickOnNewSinglePost.emit(this.arr.title) }, this.arr.title))),
                        h("div", { class: "col-12 align-self-end" },
                            h("div", { class: "widget_read_toggle" },
                                h("a", { onClick: () => this.clickOnNewSinglePost.emit(this.arr.btnText) }, this.arr.btnText))))))));
    }
    static get is() { return "new-single-post"; }
    static get originalStyleUrls() { return {
        "$": ["new-single-post.css"]
    }; }
    static get styleUrls() { return {
        "$": ["new-single-post.css"]
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u0431\u043B\u043E\u043A\u043E\u0432 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 newSinglePost"
            },
            "attribute": "arr",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickOnNewSinglePost",
            "name": "clickOnNewSinglePost",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 NewSinglePost"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
