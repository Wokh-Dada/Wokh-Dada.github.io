import { ComponentInterface, EventEmitter } from '../../../../../stencil-public-runtime';
export declare class PopularResources implements ComponentInterface {
    /**
     * массив для блоков компонента popular-resources-aside
     * */
    popularAside: any[];
    /**
     * массив для блоков компонента popular-resources-banner
     * */
    popularBanner: any[];
    /**
     * массив для блоков компонента popular-resources-aside
     * */
    popularAsideTitle: string;
    /**
     * клик по компоненту popular-resources
     * */
    clickOnPopular: EventEmitter;
    render(): any;
}
