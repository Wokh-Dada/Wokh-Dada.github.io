import { Component, Event, h, Prop } from '@stencil/core';
export class EventsA {
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "row" },
                h("div", { class: "col-12" },
                    h("div", { class: "titles", onClick: () => this.clickOnEvents.emit(this.eventsTitle) }, this.eventsTitle)),
                h("div", { class: "row" },
                    h(NewSinglePost, { arr: this.events })))));
    }
    static get is() { return "events-a"; }
    static get originalStyleUrls() { return {
        "$": ["events-a.css"]
    }; }
    static get styleUrls() { return {
        "$": ["events-a.css"]
    }; }
    static get properties() { return {
        "events": {
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
                "text": "\u043C\u0430\u0441\u0441\u0438\u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 Events"
            }
        },
        "eventsTitle": {
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
                "text": "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 Events"
            },
            "attribute": "events-title",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickOnEvents",
            "name": "clickOnEvents",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "\u043A\u043B\u0438\u043A \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435 Read Report \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 newSinglePost"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
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
/*
* компонентная функция для вывода элементов news-main-block
 */
const NewSinglePost = (props) => {
    return props.arr.map((item) => {
        return (h("div", { class: bootstrapClass(item.block) },
            h("new-single-post", { arr: item })));
    });
};
/*
* функция для присваивания класса бутстрап
 */
function bootstrapClass(x) {
    switch (x) {
        case 'new-post':
            return 'col-lg-4 col-12';
        case 'events':
            return 'col-lg';
    }
}
