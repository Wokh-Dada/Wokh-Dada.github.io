import { ComponentInterface, EventEmitter } from '../../../../../../../../stencil-public-runtime';
export declare class PopularResourcesAside implements ComponentInterface {
    /**
     * массив для блоков компонента popular-resources-aside
     * */
    arr: any;
    /**
     * клик по компоненту  popular-resources-aside в popular-resources
     * */
    clickOnPopular: EventEmitter;
    render(): any;
    categoryClass(x: any): "category_blog" | "category_report" | "category_webinar";
}
