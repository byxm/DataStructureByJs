/*
 * @Date: 2019-11-30 22:08:53
 * @LastEditors:
 * @LastEditTime: 2019-12-01 15:18:37
 */
import { IQueue } from './interface';

/**
 * @description: 循环队列，不直接使用原生的shift出队列，因为shift操作时间复杂度为O(n)
 */
class LoopQueue<T> implements IQueue<T> {
    private Queue: Array<T> = [];
    private front = 0;
    private tail = 0;
    // private size = 0;

    constructor(capacity: number = 10) {
        this.Queue = new Array(capacity);
    }

    getSize() {
        /**
         * 这里不用size来记录队列的长度，通过front和tail的位置来进行运算。
         * 若果tail的位置在front前面直接相减就得到了，如果tail移动到front前面此时也就是计算总的队列容量中空了多少元素
         * 用总的队列容量减去空的也就是总共的元素的数量
         */        
        return this.tail >= this.front ? this.tail - this.front : this.Queue.length - (this.front - this.tail);
        // return this.size;
    }

    getCapacity(): number {
        return this.Queue.length - 1; // 循环队列会有意识的空出一个元素
    }

    enqueue(E: T) {
        // 如果tail还差一个就和front重合说明队列要了，需要触发扩容操作
        if ((this.tail + 1) % this.Queue.length === this.front) {
            this.resize(this.getCapacity() * 2);
        }
        this.Queue[this.tail] = E;
        this.tail = (this.tail + 1) % this.Queue.length;
        // this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Can't get empty queue");
        }
        const ret: T = this.Queue[this.front];
        this.Queue[this.front] = null;
        this.front = (this.front + 1) % this.Queue.length;
        // this.size--;
        const capacity: number = this.getCapacity();
        // 在元素长度减少到四分之一的时候我们再进行缩容，目的是为了防止扩容和缩容操作太频繁导致的复杂度震荡
        if (this.getSize() === capacity / 4 && capacity / 2 !== 0) {
            this.resize(capacity / 2);
        }
        return ret;
    }

    isEmpty() {
        return this.front === this.tail;
    }

    getFront() {
        if (this.isEmpty()) {
            throw new Error("Cant't get element in a empty queue");
        }
        return this.Queue[this.front];
    }

    private resize(capacity: number): void {
        const newQueue: Array<T> = new Array(capacity + 1); // 因为循环队列要有意识的浪费一个空间所以这里加一位
        for (let i = 0; i < this.getSize(); i++) {
            newQueue[i] = this.Queue[(i + this.front) % this.Queue.length]; // 将新的元素放入扩容后的空间, 注意tail是在front之后，所以用队列元素长度求余就能得到tail的位置
        }
        this.Queue = newQueue;
        this.front = 0;
        this.tail = this.getSize();
    }

    toString() {
        return this.Queue;
    }
}

const queue: LoopQueue<number> = new LoopQueue();

// 原来javascript的Array对象指定长度之后，如果超过指定长度，则会从第一个元素重复写入并覆盖掉之前的元素
// for (let i = 0; i < 20; i++) {
//     queue.enqueue(i);
//     console.log(queue.toString());
//     if (i % 3 === 2) {
//         queue.dequeue();
//         console.log(queue.toString());
//     }
// }
// console.log(queue.toString());

export default LoopQueue;
