import { IQueue } from './interface';



class Queue<T> implements IQueue<T> {

    private Queue: Array<T>;

    constructor() {
        this.Queue = [];
    }

    getSize() {
        return this.Queue.length;
    }

    enqueue(queue: T) {
        this.Queue.push(queue);
    }

    dequeue() {
        return this.Queue.shift();
    }

    getFront() {
        return this.Queue[0];
    }

    isEmpty() {
        return this.Queue.length === 0;
    }

    toString() {
        return this.Queue;
    }

}

const queue: Queue<number> = new Queue();


export default Queue;


