import { ComponentInterface, EventEmitter } from '../../../../../../../../stencil-public-runtime';
export declare class PopularResourcesBanner implements ComponentInterface {
    /**
     * массив для блоков компонента popular-resources-banner
     * */
    arr: any;
    /**
     * массив для блоков компонента popular-resources-aside
     * */
    popularAsideTitle: string;
    /**
     * клик по кнопке Read Report в Sidebar
     * */
    clickOnAside: EventEmitter;
    /**
     * клик по компоненту  popular-resources-aside в popular-banner
     * */
    clickOnPopular: EventEmitter;
    render(): any;
}
