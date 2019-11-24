export interface IStack<T> {
    push: (stack: T) => void;
    pop: () => T;
    peek: () => T;
    isEmpty: () => boolean;
    getSize: () => number;
    clear: () => void;
}