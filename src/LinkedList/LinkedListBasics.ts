/*
 * @Describtion:
 * @Date: 2019-12-07 16:53:49
 * @LastEditTime: 2019-12-14 21:44:55
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
    private dummyHead: LinkedNode<T>;
    private size: number;

    constructor(element?: T , next?: LinkedNode<T>  ) {
        this.size = 0;
        this.dummyHead = new LinkedNode(element, next);
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
     * @description: 链表任意位置添加元素
     */    
    add(index: number, element: T): void {
        if (index < 0 || index > this.size) {
            throw new Error('invalid index');
        }
        let prev: LinkedNode<T> = this.dummyHead;
        for (let i: number = 0; i < index; i++) {
           prev = prev.next;  
        }
        prev.next = new LinkedNode(element, prev.next);
        this.size++;
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
        let cur = this.dummyHead.next;
        for(let i: number = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.element;
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
        let cur = this.dummyHead.next;
        for(let i: number = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.element = element;
    }

    /**
     * @description: 确定链表中是否有这个元素
     */    
    contains(element: T): boolean {
        for(let cur: LinkedNode<T> = this.dummyHead.next; cur != null; cur = cur.next) {
            if(cur.element === element) {
                return true;
            }
        }
        return false;
    }

    /**
     * @description: 移除链表中的某个元素,思路就是找到当前节点然后将当前节点的前一个节点的next指向后一个节点即可
     */    
    remove(index: number): T {
        if(index < 0 || index >= this.size) {
            throw new Error("invalid index");
        }
        let prev: LinkedNode<T> = this.dummyHead;
        for(let i: number = 0; i < index; i++) {
            prev = prev.next;
        }
        const cur: LinkedNode<T> = prev.next;
        prev.next = cur.next;
        this.size--;
        return cur.element;
    }

    /**
     * @description: 移除链表第一个元素
     */    
    removeFirst(): T { return this.remove(0); }

    /**
     * @description: 移除链表最后一个元素
     */    
    removeLast(): T { return this.remove(this.size - 1); }

    toString(): string {
        let retStr = ''; 
        for(let node: LinkedNode<T> = this.dummyHead.next; node != null; node = node.next) { 
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

console.log(linkedList.toString())

linkedList.add(2, 666);
linkedList.add(8, 888);

console.log(linkedList.toString());

console.log(linkedList.get(3));

console.log('get last', linkedList.getLast());
console.log('get first', linkedList.getFirst());

linkedList.set(1, 9827);
console.log(linkedList.toString());

console.log("is contains",linkedList.contains(9827));

linkedList.remove(1);
linkedList.removeFirst();
linkedList.removeLast();
console.log("after removing", linkedList.toString());


export { LinkedList }
