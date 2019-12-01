/*
 * @Date: 2019-11-24 21:54:08
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 22:06:30
 */
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


