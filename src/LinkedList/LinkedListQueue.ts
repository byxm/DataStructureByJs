/*
 * @Describtion: 链表循环队列
 * @Date: 2019-12-08 14:33:50
 * @LastEditTime: 2019-12-08 17:24:50
 */
import { ILinkedListQueue } from './interface';


class LinkedNode<T> {
    element: T;
    next: LinkedNode<T>;

    constructor(element: T = null, next: LinkedNode<T> = null) {
        this.element = element;
        this.next = next;
    }

    toString(): string {
        return this.element.toString();
    }
}

class LinkedListQueue<T> implements ILinkedListQueue<T> {
    
    private head: LinkedNode<T>;
    private tail: LinkedNode<T>;
    private size: number;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * @description: 获取队列长度
     */    
    getSize(): number { return this.size; }

    /**
     * @description: 判断队列是否为空
     */    
    isEmpty(): boolean { return this.size == 0; }

    /**
     * @description: 入队操作，在循环队列头结点和尾结点操作。如果尾结点为空说明整个队列都为空
     */    
    enqueue(element: T): void {
        if(this.tail == null) {
            this.tail = new LinkedNode(element);
            this.head = this.tail;
        }else {
            this.tail.next = new LinkedNode(element);
            this.tail = this.tail.next;
        }
        this.size++;
    }

    /**
     * @description: 出队操作，因为在队列里面没有在头部入队的要求，所以队首的操作我们不必要使用虚拟头结点
     */    
    dequeue(): T {
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const front: LinkedNode<T> = this.head;
        // 取出第一元素，就将head赋值为head指向的next元素,再把原先的head的next指针指向null，以便垃圾回收机制会回收这个元素
        this.head = this.head.next;
        front.next = null;
        this.size--;
        return front.element;
    }

    /**
     * @description: 获取队首元素
     */    
    getFront(): T {
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.head.element;
    }

    toString(): string { 
        let retStr = '';
        for(let cur: LinkedNode<T> = this.head; cur != null; cur = cur.next) {
            retStr = `${retStr}${cur.element}-->`;
        }
        retStr = `${retStr}NULL`
        return retStr;
     }

}

const linkedListQueue: LinkedListQueue<number> = new LinkedListQueue();

for(let i:number = 0; i < 10; i++) {
    linkedListQueue.enqueue(i);
    console.log('front',linkedListQueue.toString());
    if (i % 3 === 2) {
        linkedListQueue.dequeue();
        console.log('front',linkedListQueue.toString())
    }

}

export default LinkedListQueue