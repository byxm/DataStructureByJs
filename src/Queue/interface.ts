/*
 * @Date: 2019-11-30 21:25:02
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 21:52:29
 */
export interface IQueue<T> {
    enqueue: (queue: T) => void;
    dequeue: () => T;
    isEmpty: () => boolean;
    getSize: () => number;
    getFront: () => T;
}