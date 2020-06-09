import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
export declare class NewPost implements ComponentInterface {
    /**
     * массив newsPost
     * */
    newPost: any[];
    /**
     * текст заголовка
     * */
    newPostTitle: string;
    /**
     * клик по в компоненте NewPost
     * */
    clickNewPost: EventEmitter;
    /**
     * клик по в компоненте NewSinglePost
     * */
    clickOnNewSinglePost: EventEmitter;
    render(): any;
}
