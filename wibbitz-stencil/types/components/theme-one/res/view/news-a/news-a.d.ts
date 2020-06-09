import { ComponentInterface, EventEmitter } from '../../../../../stencil-public-runtime';
export declare class NewsA implements ComponentInterface {
    /**
     * ссылка на изображение логотипа
     * */
    newsImg: string;
    /**
     * массив news-main-block
     * */
    news: any[];
    /**
     * массив Sidebar
     * */
    sidebar: any[];
    /**
     * клик по кнопке в компоненте news
     * */
    clickOnNews: EventEmitter;
    render(): any;
}
