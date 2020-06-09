import { ComponentInterface, EventEmitter } from '../../../../../../../../stencil-public-runtime';
export declare class SidebarA implements ComponentInterface {
    /**
     * массив элементов Sidebar
     * */
    arr: any;
    /**
     * клик по кнопке в компоненте news
     * */
    clickOnNews: EventEmitter;
    render(): any;
    /***/
    categoryClass(x: any): "category_blog" | "category_report" | "category_webinar";
}
