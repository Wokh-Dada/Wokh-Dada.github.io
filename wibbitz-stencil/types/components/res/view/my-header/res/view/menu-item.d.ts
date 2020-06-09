import { ComponentInterface, EventEmitter } from '../../../../../../stencil-public-runtime';
export declare class MyHeader implements ComponentInterface {
    /**
     * массив меню
     * */
    arr: any;
    /**
     * клик по конкретному меню
     * */
    clickOnHeader: EventEmitter;
    render(): any;
}
