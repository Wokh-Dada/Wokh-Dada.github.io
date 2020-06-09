import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
import { AbdullakhMyHeader } from "./interface/common.interface";
export declare class MyHeader implements ComponentInterface {
    /**
     * массив меню
     * */
    menu: AbdullakhMyHeader[];
    /**
     * массив меню
     * */
    theme: boolean;
    /**
     * ссылка на изображение логотипа
     * */
    logoUrl: string;
    /**
     * ссылка на изображение логотипа
     * */
    subscribeText: string;
    /**
     * клик по логотипу
     * */
    clickOnTheme: EventEmitter;
    /**
     * клик по логотипу
     * */
    clickOnHeader: EventEmitter;
    /**
     * клик по Switch Theme
     * */
    clickOnSwitchTheme: EventEmitter;
    /**
     * ref-ы для мобильного меню
     * */
    navOpenTag: HTMLElement;
    navMenuTag: HTMLElement;
    render(): any;
    /**
     * меню для мобильного меню
     * */
    toggleMobileMenu(): void;
}
