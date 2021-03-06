/*
 * @Describtion: 最小二叉堆实现,只需要将最大二叉堆的比较条件换一下即可
 * @Date: 2020-01-12 22:05:13
 * @LastEditTime : 2020-01-17 09:03:18
 */


export default class MinHeap<E> {
    private data: Array<E>;
    constructor(arr?:Array<E>) {
        this.data = new Array<E>();
        if(arr) {
            this.data = arr;
            for(let i = this.parent(arr.length - 1); i >= 0; i--) {
                this.siftDown(i);
            }
        }
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
        while (index > 0 && this.data[this.parent(index)] > this.data[index]) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }

    // 将符合条件的根节点和该元素交换位置
    swap(parent: number, index: number): void {
        [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
    }

    /**
     * @description: 获取最大的元素，对于二叉堆来说最大元素就是数组的第一个元素
     */
    findMin(): E {
        if (this.data.length === 0) {
            throw new Error('array is empty');
        }
        return this.data[0];
    }

    /**
     * @description: 提取二叉堆中的最大值
     * 从二叉堆中提取出最大值，思路是：先将第一个元素和最后一个元素交换位置，对第一个元素执行一次下沉操作，然后删除最后一个元素
     */
    extractMin(): E {
        const ret: E = this.findMin();
        this.swap(0, this.data.length - 1);
        this.data.pop();
        this.siftDown(0);
        return ret;
    }

    /**
     * @description: 元素下沉：思路和上浮一样，不断用根节点和叶子节点上下比较，大的元素往上交换，小的元素往下交换
     */

    siftDown(index: number): void {
        // 循环遍历，终止条件是当左子树的节点索引越界以后停止，因为左子树索引如果越界那么右子树肯定也越界
        while (this.leftChild(index) < this.data.length) {
            let leftIndex = this.leftChild(index);
            const rightChild = this.rightChild(index);
            if (leftIndex + 1 < this.data.length && this.data[leftIndex] > this.data[rightChild]) {
                leftIndex++;
            }

            if (this.data[leftIndex] >= this.data[index]) {
                break;
            }

            this.swap(index, leftIndex);
            index = leftIndex;
        }
    }

    /**
     * @description: 取出堆中的最小元素并替换成元素e
     * 思路是：先取出最大的元素，然后用元素e替换最大值的位置，然后在执行一次下沉操作
     */
    replace(e: E): E {
        const ret: E = this.findMin();
        this.data[0] = e;
        this.siftDown(0);
        return ret;
    }

    toString() {
        console.log(this.data);
    }
}

const minHeap: MinHeap<number> = new MinHeap<number>();


const n = 1000000;

for(let i = 0; i < n; i++) {
    minHeap.add(i);
}

const arrs = [];
for(let i = 0; i < n; i++) {
    arrs[i] = minHeap.extractMin();
}

for(let i = 1; i < n; i++) {
    if(arrs[i - 1] > arrs[i]) {
        throw new Error('Error');
    }
}

console.log("Test MaxHEap completed");


