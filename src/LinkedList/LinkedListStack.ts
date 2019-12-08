/*
 * @Describtion:
 * @Date: 2019-12-08 13:50:37
 * @LastEditTime: 2019-12-08 15:32:54
 */
import { ILinkListStack } from './interface';
import { LinkedList } from './LinkedListBasics';    

class LinkedListStack<T> implements ILinkListStack<T> {
    private readonly list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList();
    }

    /**
     * @description: 获取栈长度
     */

    getSize(): number {
        return this.list.getSize();
    }

    /**
     * @description: 判断栈是否为空
     */

    isEmpty(): boolean {
        return this.list.getSize() === 0;
    }

    /**
     * @description: 向栈中添加一个元素这里要注意的是，在链表栈中由于访问尾部元素的复杂度为O(n),而对链表头部的操作是O(1)的复杂度
     * 所以我们把链表头部用作栈顶
     */

    push(element: T): void {
        this.list.addFirst(element);
    }

    /**
     * @description: 栈顶元素出栈
     */

    pop(): T {
        return this.list.removeFirst();
    }

    /**
     * @description: 查看栈顶元素
     */

    peek(): T {
        return this.list.getFirst();
    }

    toString(): string {
        return `top ${this.list.toString()}`;
    }
}

const linkedListStack: LinkedListStack<number> = new LinkedListStack();

for (let i: number = 0; i < 10; i++) {
    linkedListStack.push(i);
    console.log(linkedListStack.toString());
    if (i % 3 === 2) {
        linkedListStack.pop();
        console.log(linkedListStack.toString());
    }
}
