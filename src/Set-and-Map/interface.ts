/*
 * @Describtion: 
 * @Date: 2020-01-05 11:54:15
 * @LastEditTime : 2020-01-05 17:56:02
 */



export interface Set<E> {
    add: (e: E) => void
    contains: (e: E) => boolean;
    remove: (e: E) => void;
    getSize: () => number;
    isEmpty: () => boolean;
}

export interface Map<K, V> {
    add: (key: K, value: V) => void;
    remove: (key: K) => V;
    contains: (key: K) => boolean;
    get: (key: K) => V;
    set: (key: K, value: V) => void;
    getSize: () => number;
    isEmpty: () => boolean;
}