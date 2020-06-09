import { Component, h } from '@stencil/core';
import { blog, firstPage, footer, header } from "../../utils/mock";
export class MyComponent {
    constructor() {
        this.theme = true;
    }
    render() {
        return (h("div", null,
            h("my-header", { menu: header.menu, logoUrl: header.logoUrl, subscribeText: header.subscribeText, theme: this.theme, onClickOnTheme: () => this.clickOnTheme(), onClickOnHeader: (event) => this.clickOnHeader(event), onClickOnSwitchTheme: (event) => this.clickOnSwitchTheme(event) }),
            h("news-a", { newsImg: firstPage.newsImg, news: firstPage.news, sidebar: firstPage.sidebar, onClickOnNews: (event) => this.clickOnNews(event) }),
            h("new-post", { newPostTitle: firstPage.newPostTitle, newPost: firstPage.newPost, onClickNewPost: (event) => this.clickOnNewPost(event), onClickOnNewSinglePost: (event) => this.clickOnNewSinglePost(event) }),
            h("popular-resources", { popularAsideTitle: firstPage.popularAsideTitle, popularAside: firstPage.popularAside, popularBanner: firstPage.popularBanner, onClickOnPopular: (event) => this.clickOnPopular(event) }),
            h("events-a", { eventsTitle: firstPage.eventsTitle, events: firstPage.events, onClickOnEvents: (event) => this.clickOnEvents(event), onClickOnNewSinglePost: (event) => this.clickOnNewSinglePost(event) }),
            h("new-listiner", { newlistner: firstPage.newlistner, onClickOnListiner: (event) => this.clickOnListiner(event) }),
            h("app-blog", { p: blog.p }),
            h("footer-a", { footer: footer, onClickOnFooter: (event) => this.clickOnFooter(event) })));
    }
    clickOnTheme() {
        this.theme = !this.theme;
    }
    /**
     * клик по элементам Header
     */
    clickOnHeader({ detail }) {
        return console.log('clickOnHeader:', detail);
    }
    /**
     * клик по элементам Toggle theme
     */
    clickOnSwitchTheme({ detail }) {
        return console.log('clickOnSwitchTheme:', detail);
    }
    /**
     * клик по элементам clickOnNews
     */
    clickOnNews({ detail }) {
        return console.log("clickOnNews:", detail);
    }
    /**
     * клик по button в компоненете news
     */
    clickOnNewsButton({ detail }) {
        return console.log("clickOnNewsButton:", detail);
    }
    /**
     * клик по ссылке read report в компоненте newpost
     */
    clickOnNewPost({ detail }) {
        return console.log("clickOnNewPost:", detail);
    }
    /**
     * клик по ссылке read report в компоненте newpost
     */
    clickOnNewSinglePost({ detail }) {
        return console.log("clickOnNewSinglePost:", detail);
    }
    /**
     * клик по элементам aside sidebar в компоненте popular resources
     */
    clickOnPopular({ detail }) {
        return console.log("clickOnPopular:", detail);
    }
    /**
     * клик по ссылке read report в компоненте newpost
     */
    clickOnEvents({ detail }) {
        return console.log("clickOnEvents:", detail);
    }
    /**
     * клик по button в компоненете Listiner
     */
    clickOnListiner({ detail }) {
        return console.log("clickOnListiner:", detail);
    }
    /**
     * клик по button в компоненете Listiner
     */
    clickOnFooter({ detail }) {
        return console.log("clickOnFooter:", detail);
    }
    static get is() { return "my-component"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
}
