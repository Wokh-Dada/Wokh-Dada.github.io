import { Component, Event, h, Prop } from '@stencil/core';
export class NewsA {
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "row news" },
                h("div", { class: "col-lg-7 col-12" },
                    h("div", { class: "main_img", style: { backgroundImage: "url(" + this.newsImg + ")" }, onClick: () => this.clickOnNews.emit(this.newsImg) }),
                    h(NewsMainBlock, { arr: this.news })),
                h("div", { class: "col-lg-5 col-12 mt-lg-0 mt-5" },
                    h("aside", { class: "news_right_widget" },
                        h("div", { class: "row" },
                            h(Sidebar, { arr: this.sidebar })))))));
    }
    static get is() { return "news-a"; }
    static get originalStyleUrls() { return {
        "$": ["news-a.css"]
    }; }
    static get styleUrls() { return {
        "$": ["news-a.css"]
    }; }
    static get properties() { return {
        "newsImg": {
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
                "text": "\u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430"
            },
            "attribute": "news-img",
            "reflect": false
        },
        "news": {
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 news-main-block"
            }
        },
        "sidebar": {
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 Sidebar"
            }
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
/*
* компонентная функция для вывода элементов news-main-block
 */
const NewsMainBlock = (props) => {
    return props.arr.map((item) => {
        return (h("s-abdullakh-news-main-block", { arr: item }));
    });
};
/*
* компонентная функция для вывода элементов sidebar
 */
const Sidebar = (props) => {
    return props.arr.map((item) => {
        return (h("sidebar-a", { arr: item }));
    });
};
