import { ComponentInterface, EventEmitter } from '../../../../../../../stencil-public-runtime';
export declare class NewListiner implements ComponentInterface {
    /**
     * массив Listener
     * */
    arr: any;
    /**
     * клик по кнопке button в Listiner
     * */
    clickOnListiner: EventEmitter;
    render(): any;
}
