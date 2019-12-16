/*
 * @Describtion: 用递归来实现链表的基本增删改查
 * @Date: 2019-12-07 16:53:49
 * @LastEditTime: 2019-12-15 23:57:42
 */

/**
 * @description: 节点类，包含节点元素和next指向下一个节点的指针
 */
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

// 链表类
class LinkedList<T> {
    // 虚拟头结点，用于虚拟放置在头结点的首部方便对头结点操作的时候可以找到头部元素对应的prev节点
    private head: LinkedNode<T>;
    private size: number;

    constructor(element?: T , next?: LinkedNode<T>  ) {
        this.size = 0;
        this.head = null;
    }

    // 获取链表长度
    getSize(): number {
        return this.size;
    }

    // 链表是否为空
    isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * @description: 链表任意位置添加元素，为了不破坏原函数的结构，把递归操作放到另外一个函数里面去，添加完成后将头节点指向第一个元素
     */    
    add(index: number, element: T): void {
        if(index < 0 || index > this.size) {
            throw new Error("invalid index");
        }
        this.head = this.addAll(this.head, element, index);
        this.size++;

    }

    /**
     * @description: 递归添加元素的基本情况就是到达索引指向的节点，可以使用index来进行计算
     * 即index值每次减一，index == 0的时候到达基本情况的终点，这个时候就创建本次要插入的节点元素
     * 在调用栈出栈的时候依次往前拼接这些元素
     */    
    addAll(head: LinkedNode<T>, element: T, index: number): LinkedNode<T> {
        if(index === 0) {
            return new LinkedNode(element, head);
        }
        head.next = this.addAll(head.next, element, index - 1);
        return head;
    }

    /**
     * @description: 在链表头部添加元素
     */    
    addFirst(element: T): void {
        this.add(0, element);
    }

    /**
     * @description: 链表尾部添加元素
     */    
    addLast(element: T): void {
        this.add(this.size, element);
    }

    /**
     * @description: 获取链表中指定位置元素
     */    
    get(index: number): T {
        if(index < 0 || index >= this.size) {
            throw new Error("invalid index");
        }
        return this.getRcursion(this.head, index);
    }

    getRcursion(head: LinkedNode<T>, index: number): T {
        if(index === 0) {
            return head.element;
        }
        return this.getRcursion(head.next, index - 1);
    }

    /**
     * @description: 获取第一个元素
     */    
    getFirst(): T { return this.get(0); }

    /**
     * @description: 获取最后一个元素
     */    
    getLast(): T { return this.get(this.size - 1); }

    /**
     * @description: 修改链表中的某个元素
     */    
    set(index: number, element: T) {
        if (index < 0 || index >= this.size) {
            throw new Error("invalid index");
        }
        const cur = this.setRecursion(this.head, index);
        cur.element = element;
    }

    setRecursion(head: LinkedNode<T>,index: number) {
        if(index === 0) {
            return head;
        }
        return this.setRecursion(head.next, index - 1);
    }

    /**
     * @description: 确定链表中是否有这个元素,递归实现
     */    
    contains(element: T): boolean {
       return this.containsRecursion(this.head,element);
    }

    containsRecursion(head: LinkedNode<T>, element: T) {
        if(head == null) {
            return false;
        }
        if(head.element === element) {
            return true;
        }
        return this.containsRecursion(head.next, element);
    }

    /**
     * @description: 移除链表中的某个元素,思路就是找到当前节点然后将当前节点的前一个节点的next指向后一个节点即可
     */    
    remove(index: number): T {
        if(index < 0 || index >= this.size) {
            throw new Error("invalid index");
        }
        const res = this.removeRecursion(this.head, index);
        this.size--;
        this.head = res;
        return res.element;
    }

    removeRecursion(cur: LinkedNode<T>, index: number): LinkedNode<T> {
        if(index === 0) {
            return cur.next;
        }
        cur.next = this.removeRecursion(cur.next, index - 1);
        return cur;
    }

    /**
     * @description: 移除链表第一个元素
     */    
    // removeFirst(): T { return this.remove(0); }

    /**
     * @description: 移除链表最后一个元素
     */    
    // removeLast(): T { return this.remove(this.size - 1); }

    toString(): string {
        let retStr = ''; 
        for(let node: LinkedNode<T> = this.head; node != null; node = node.next) { 
            const ele = `${node.element}-->`;
            retStr = `${retStr}${ele}`;
         }
         retStr = `${retStr}NULL`;
         return retStr;
     }
}

const linkedList: LinkedList<number> = new LinkedList();

for(let i: number = 0; i < 10; i++) {
    linkedList.addFirst(i);
}

linkedList.add(2, 555);
linkedList.add(3,666);
linkedList.addLast(999);

console.log('recursionLinkList', linkedList.toString());

console.log('getElement', linkedList.get(6));
linkedList.set(9, 9527)
console.log('change', linkedList.toString());
console.log('contains', linkedList.contains(5556));
linkedList.remove(1)
// console.log('remove====', linkedList.remove(0));
console.log('remove====', linkedList.toString());

export { LinkedList }
