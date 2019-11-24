import { IStack } from './interface';

class Stack<T> implements IStack<T> {
    private Array: Array<T> = [];

    getSize() {
        return this.Array.length;
    }

    push(stack) {
        this.Array.push(stack);
    }

    pop() {
        return this.Array.pop();
    }

    peek() {
        return this.Array[this.Array.length - 1];
    }

    clear() {
        this.Array.length = 0;
    }

    isEmpty() {
        return this.Array.length === 0;
    }

    toString() {
        return this.Array;
    }

}

export default Stack;


