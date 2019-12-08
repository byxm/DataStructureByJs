export interface ILinkListStack<T> {
    getSize: () => number;
    pop: () => T;
    peek: () => T;
    push: (element: T) => void;
    isEmpty: () => boolean;
}

export interface ILinkedListQueue<T> {
    getSize: () => number;
    enqueue: (element: T) => void;
    dequeue: () => T;
    getFront: () => T;
    isEmpty: () => boolean; 
}