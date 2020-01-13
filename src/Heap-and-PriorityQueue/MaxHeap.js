/*
 * @Describtion: 最大二叉堆实现
 * @Date: 2020-01-12 22:05:13
 * @LastEditTime : 2020-01-14 22:10:29
 */
/**
 * @description: 最大二叉堆为堆的一种，基于二叉树实现，实现方式是一棵满二叉树，即所有节点从左往右依次按照层级排列
 * 直到排完为止。所以根节点和左右子节点之间有索引规律，这个索引是以完全二叉树的形式排列而成的数组，使用数组的方式来描述它
 */
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.data = new Array();
    }
    MaxHeap.prototype.size = function () {
        return this.data.length;
    };
    MaxHeap.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    /**
     * 二叉堆的规律：
     * 由于二叉堆是一颗完全二叉树，通过数学归纳法就可以证明出一个根节点的索引和左右子树之间的等式关系：
     * parent = i (i = 0)，在我这里实现的i位置索引是从0开始，如果从1开始相应的左右子树减1即可
     * leftChild = 2 * i + 1, rightChild = 2 * i + 2
     */
    MaxHeap.prototype.parent = function (index) {
        if (index === 0) {
            throw new Error('index-0 is not existed parent index');
        }
        return Math.floor((index - 1) / 2);
    };
    MaxHeap.prototype.leftChild = function (index) {
        return index * 2 + 1;
    };
    MaxHeap.prototype.rightChild = function (index) {
        return index * 2 + 2;
    };
    /**
     * @description: 向堆中添加元素，思路是每次将要添加的元素放到数组末尾，然后进行元素上浮操作
     * 元素上浮：每次将该元素和它父节点的元素进行比较，如果它比父元素要大，那么就和父元素交换位置，依次向上比较
     *
     */
    MaxHeap.prototype.add = function (e) {
        this.data.push(e);
        this.siftUp(this.data.length - 1);
    };
    MaxHeap.prototype.siftUp = function (index) {
        while (index > 0 && this.data[this.parent(index)] < this.data[index]) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    };
    // 将符合条件的根节点和该元素交换位置
    MaxHeap.prototype.swap = function (parent, index) {
        var _a;
        _a = [this.data[index], this.data[parent]], this.data[parent] = _a[0], this.data[index] = _a[1];
    };
    /**
     * @description: 获取最大的元素，对于二叉堆来说最大元素就是数组的第一个元素
     */
    MaxHeap.prototype.findMax = function () {
        if (this.data.length === 0) {
            throw new Error('array is empty');
        }
        return this.data[0];
    };
    /**
     * @description: 提取二叉堆中的最大值
     * 从二叉堆中提取出最大值，思路是：先将第一个元素和最后一个元素交换位置，对第一个元素执行一次下沉操作，然后删除最后一个元素
     */
    MaxHeap.prototype.extractMax = function () {
        var ret = this.findMax();
        this.swap(0, this.data.length - 1);
        this.data.pop();
        this.siftDown(0);
        return ret;
    };
    /**
     * @description: 元素下沉：思路和上浮一样，不断用根节点和叶子节点上下比较，大的元素往上交换，小的元素往下交换
     */
    MaxHeap.prototype.siftDown = function (index) {
        // 循环遍历，终止条件是当左子树的节点索引越界以后停止，因为左子树索引如果越界那么右子树肯定也越界
        while (this.leftChild(index) < this.data.length) {
            var leftIndex = this.leftChild(index);
            var rightChild = this.rightChild(index);
            if (leftIndex + 1 < this.data.length && this.data[leftIndex] < this.data[rightChild]) {
                leftIndex++;
            }
            if (this.data[leftIndex] <= this.data[index]) {
                break;
            }
            this.swap(index, leftIndex);
            index = leftIndex;
        }
    };
    MaxHeap.prototype.toString = function () {
        console.log(this.data);
    };
    return MaxHeap;
}());
var maxHeap = new MaxHeap();
// for (let i = 0; i < 1000; i++) {
//     maxHeap.add(i);
// }
// maxHeap.toString();
// int n = 1000000;
// MaxHeap<Integer> maxHeap = new MaxHeap<>();
// Random random = new Random();
// for(int i = 0 ; i < n ; i ++)
//     maxHeap.add(random.nextInt(Integer.MAX_VALUE));
// int[] arr = new int[n];
// for(int i = 0 ; i < n ; i ++)
//     arr[i] = maxHeap.extractMax();
// for(int i = 1 ; i < n ; i ++)
//     if(arr[i-1] < arr[i])
//         throw new IllegalArgumentException("Error");
// System.out.println("Test MaxHeap completed.");
/**
 * 这里第一个使用js完成的二叉堆测试用例，整个元素添加加上上浮操作时间复杂度为O(nlogn),在这里一共用时5s，我不知道这个是不是js编程语言的原因
 * 使用java只需几毫秒
 */
console.time('testtime');
var n = 1000000;
for (var i = 0; i < n; i++) {
    maxHeap.add(i);
}
var arrs = [];
for (var i = 0; i < n; i++) {
    arrs[i] = maxHeap.extractMax();
}
for (var i = 1; i < n; i++) {
    if (arrs[i - 1] < arrs[i]) {
        throw new Error('Error');
    }
}
console.timeEnd('testtime');
console.log("Test MaxHEap completed");
