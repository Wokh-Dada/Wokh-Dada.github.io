import { Component, Event, h, Prop } from '@stencil/core';
export class MyHeader {
    constructor() {
        /**
         * массив меню
         * */
        this.menu = [];
    }
    render() {
        return (h("header", { class: "container-fluid" },
            h("div", { class: "container_update" },
                h("div", { class: "row main__menu" },
                    h("div", { class: "col-auto" },
                        h("div", { class: "logo", style: { backgroundImage: "url(" + this.logoUrl + ")" }, onClick: () => this.clickOnHeader.emit(this.logoUrl) },
                            h("a", { class: "navbar-brand" }))),
                    h("div", { class: "col" },
                        h("nav", null,
                            h("a", { class: "icon", ref: (el) => this.navOpenTag = el, onClick: () => this.toggleMobileMenu() }, "\u2630"),
                            h("div", { class: "topnav", id: "none", ref: (el) => this.navMenuTag = el },
                                h(ItemLink, { arr: this.menu }),
                                this.theme ?
                                    h("a", { id: "theme_1", onClick: () => {
                                            this.clickOnTheme.emit();
                                            this.clickOnSwitchTheme.emit(event);
                                        } },
                                        h("i", { class: "fas fa-toggle-off pl-1" }),
                                        "theme_1") :
                                    h("a", { id: "theme_2", onClick: () => {
                                            this.clickOnTheme.emit();
                                            this.clickOnSwitchTheme.emit(event);
                                        } },
                                        h("i", { class: "fas fa-toggle-on pl-1" }),
                                        "theme_2")))),
                    h("div", { class: "col-auto d-none d-xl-block" },
                        h("div", { class: "header_search_block", onClick: () => this.clickOnHeader.emit(event) },
                            h("a", { href: "#", class: "nav-link" },
                                h("span", { class: "material-icons" }, "search"))),
                        h("div", { class: "header_subscribe_block" },
                            h("div", { class: "input-group" },
                                h("input", { type: "email", placeholder: "Enter work email", class: "header_subscribe_input", onClick: () => this.clickOnHeader.emit(event) }),
                                h("div", { class: "input-group-append" },
                                    h("button", { class: "header_btn", onClick: () => {
                                            this.clickOnHeader.emit(this.subscribeText);
                                        } },
                                        h("span", null, this.subscribeText))))))))));
    }
    /**
     * меню для мобильного меню
     * */
    toggleMobileMenu() {
        if (this.navMenuTag.id === "none") {
            this.navMenuTag.id = 'block';
        }
        else {
            this.navMenuTag.id = 'none';
        }
    }
    static get is() { return "my-header"; }
    static get originalStyleUrls() { return {
        "$": ["my-header.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-header.css"]
    }; }
    static get properties() { return {
        "menu": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AbdullakhMyHeader[]",
                "resolved": "AbdullakhMyHeader[]",
                "references": {
                    "AbdullakhMyHeader": {
                        "location": "import",
                        "path": "./interface/common.interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u043C\u0435\u043D\u044E"
            },
            "defaultValue": "[]"
        },
        "theme": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u043C\u0435\u043D\u044E"
            },
            "attribute": "theme",
            "reflect": false
        },
        "logoUrl": {
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
            "attribute": "logo-url",
            "reflect": false
        },
        "subscribeText": {
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
            "attribute": "subscribe-text",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickOnTheme",
            "name": "clickOnTheme",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "clickOnHeader",
            "name": "clickOnHeader",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "clickOnSwitchTheme",
            "name": "clickOnSwitchTheme",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E Switch Theme"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
/*
* компонентная функция для вывода элементов меню
 */
const ItemLink = (props) => {
    return props.arr.map((item) => {
        return (h("menu-item", { arr: item }));
    });
};
