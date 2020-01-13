/*
 * @Description: 基于最大二叉堆的优先队列
 * @Author: 
 * @Date: 2020-01-16 09:04:46
 */
import MinHeap from './MinHeap';

interface Queue<E> {
    getSize(): number;
    isEmpty(): boolean;
    enqueue(e: E): void;
    dequeue(): E;
    getFront(): E;
}


/**
 * @description: 由于最大二叉堆保证了根节点大于左右子节点所以能保证出队的元素始终是最大的，也就是优先级最高的
 */
export default class PriorityQueue<E> implements Queue<E> {

    private minHeap: MinHeap<E>;

    constructor() {
        this.minHeap = new MinHeap<E>();
    }

    getSize(): number {
        return this.minHeap.size();
    }

    isEmpty(): boolean {
        return this.minHeap.isEmpty();
    }

    enqueue(e: E) {
        this.minHeap.add(e);
    }

    dequeue(): E {
        return this.minHeap.extractMin();
    }

    getFront(): E {
        return this.minHeap.findMin();
    }

}

