/*
 * @Describtion: 最大二叉堆实现
 * @Date: 2020-01-12 22:05:13
 * @LastEditTime : 2020-01-13 23:28:46
 */

/**
 * @description: 最大二叉堆为堆的一种，基于二叉树实现，实现方式是一棵满二叉树，即所有节点从左往右依次按照层级排列
 * 直到排完为止。所以根节点和左右子节点之间有索引规律，这个索引是以完全二叉树的形式排列而成的数组，使用数组的方式来描述它
 */
class MaxHeap<E> {
    private data: Array<E>;

    constructor() {
        this.data = new Array<E>();
    }

    size(): number {
        return this.data.length;
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }

    /**
     * 二叉堆的规律：
     * 由于二叉堆是一颗完全二叉树，通过数学归纳法就可以证明出一个根节点的索引和左右子树之间的等式关系：
     * parent = i (i = 0)，在我这里实现的i位置索引是从0开始，如果从1开始相应的左右子树减1即可
     * leftChild = 2 * i + 1, rightChild = 2 * i + 2
     */

    parent(index: number): number {
        if (index === 0) {
            throw new Error('index-0 is not existed parent index');
        }
        return Math.floor((index - 1) / 2);
    }

    leftChild(index: number): number {
        return index * 2 + 1;
    }

    rightChild(index: number): number {
        return index * 2 + 2;
    }

    /**
     * @description: 向堆中添加元素，思路是每次将要添加的元素放到数组末尾，然后进行元素上浮操作
     * 元素上浮：每次将该元素和它父节点的元素进行比较，如果它比父元素要大，那么就和父元素交换位置，依次向上比较
     *
     */

    add(e: E): void {
        this.data.push(e);
        this.siftUp(this.data.length - 1);
    }

    siftUp(index: number): void {
        while (index > 0 && this.data[this.parent(index)] < this.data[index]) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }

    // 将符合条件的根节点和该元素交换位置
    swap(parent: number, index: number): void {
        [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
    }

    toString() {
        console.log(this.data);
    }
}


const maxHeap: MaxHeap<number> = new MaxHeap<number>();

for(let i = 0; i < 1000; i++) {
    maxHeap.add(i);
}

maxHeap.toString()


