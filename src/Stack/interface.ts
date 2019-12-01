/*
 * @Date: 2019-11-24 21:54:08
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 21:51:00
 */
export interface IStack<T> {
    push: (stack: T) => void;
    pop: () => T;
    peek: () => T;
    isEmpty: () => boolean;
    getSize: () => number;
    clear: () => void;
}