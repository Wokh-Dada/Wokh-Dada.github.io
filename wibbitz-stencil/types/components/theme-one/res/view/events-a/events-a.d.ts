import { ComponentInterface, EventEmitter } from '../../../../../stencil-public-runtime';
export declare class EventsA implements ComponentInterface {
    /**
     * массив компоненту Events
     * */
    events: any[];
    /**
     * заголовок компонента Events
     * */
    eventsTitle: string;
    /**
     * клик по кнопке Read Report в компоненте newSinglePost
     * */
    clickOnEvents: EventEmitter;
    /**
     * клик по в компоненте NewSinglePost
     * */
    clickOnNewSinglePost: EventEmitter;
    render(): any;
}
