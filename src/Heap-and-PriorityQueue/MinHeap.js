/*
 * @Description: 
 * @Author: 
 * @Date: 2020-01-17 09:56:55
 */
/*
 * @Describtion: 最小二叉堆实现,只需要将最大二叉堆的比较条件换一下即可
 * @Date: 2020-01-12 22:05:13
 * @LastEditTime : 2020-01-19 23:15:45
 */
var MinHeap = (function () {
    function MinHeap(arr) {
        this.data = new Array();
        if (arr) {
            this.data = arr;
            for (var i = this.parent(arr.length - 1); i >= 0; i--) {
                this.siftDown(i);
            }
        }
    }
    MinHeap.prototype.size = function () {
        return this.data.length;
    };
    MinHeap.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    MinHeap.prototype.showAll = function() {
        return this.data;
    }
    /**
     * 二叉堆的规律：
     * 由于二叉堆是一颗完全二叉树，通过数学归纳法就可以证明出一个根节点的索引和左右子树之间的等式关系：
     * parent = i (i = 0)，在我这里实现的i位置索引是从0开始，如果从1开始相应的左右子树减1即可
     * leftChild = 2 * i + 1, rightChild = 2 * i + 2
     */
    MinHeap.prototype.parent = function (index) {
        if (index === 0) {
            throw new Error('index-0 is not existed parent index');
        }
        return Math.floor((index - 1) / 2);
    };
    MinHeap.prototype.leftChild = function (index) {
        return index * 2 + 1;
    };
    MinHeap.prototype.rightChild = function (index) {
        return index * 2 + 2;
    };
    /**
     * @description: 向堆中添加元素，思路是每次将要添加的元素放到数组末尾，然后进行元素上浮操作
     * 元素上浮：每次将该元素和它父节点的元素进行比较，如果它比父元素要大，那么就和父元素交换位置，依次向上比较
     *
     */
    MinHeap.prototype.add = function (e) {
        this.data.push(e);
        this.siftUp(this.data.length - 1);
    };
    MinHeap.prototype.siftUp = function (index) {
        while (index > 0 && this.data[this.parent(index)].freq > this.data[index].freq) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    };
    // 将符合条件的根节点和该元素交换位置
    MinHeap.prototype.swap = function (parent, index) {
        _a = [this.data[index], this.data[parent]], this.data[parent] = _a[0], this.data[index] = _a[1];
        var _a;
    };
    /**
     * @description: 获取最大的元素，对于二叉堆来说最大元素就是数组的第一个元素
     */
    MinHeap.prototype.findMin = function () {
        if (this.data.length === 0) {
            throw new Error('array is empty');
        }
        return this.data[0];
    };
    /**
     * @description: 提取二叉堆中的最大值
     * 从二叉堆中提取出最大值，思路是：先将第一个元素和最后一个元素交换位置，对第一个元素执行一次下沉操作，然后删除最后一个元素
     */
    MinHeap.prototype.extractMin = function () {
        var ret = this.findMin();
        this.swap(0, this.data.length - 1);
        this.data.pop();
        this.siftDown(0);
        return ret;
    };
    /**
     * @description: 元素下沉：思路和上浮一样，不断用根节点和叶子节点上下比较，大的元素往上交换，小的元素往下交换
     */
    MinHeap.prototype.siftDown = function (index) {
        // 循环遍历，终止条件是当左子树的节点索引越界以后停止，因为左子树索引如果越界那么右子树肯定也越界
        while (this.leftChild(index) < this.data.length) {
            var leftIndex = this.leftChild(index);
            var rightChild = this.rightChild(index);
            if (leftIndex + 1 < this.data.length && this.data[leftIndex] > this.data[rightChild]) {
                leftIndex++;
            }
            if (this.data[leftIndex] >= this.data[index]) {
                break;
            }
            this.swap(index, leftIndex);
            index = leftIndex;
        }
    };
    /**
     * @description: 取出堆中的最小元素并替换成元素e
     * 思路是：先取出最大的元素，然后用元素e替换最大值的位置，然后在执行一次下沉操作
     */
    MinHeap.prototype.replace = function (e) {
        var ret = this.findMin();
        this.data[0] = e;
        this.siftDown(0);
        return ret;
    };
    MinHeap.prototype.toString = function () {
        console.log(this.data);
    };
    return MinHeap;
})();
exports["default"] = MinHeap;
var minHeap = new MinHeap();
var n = [5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3];
for (var i = 0; i < n.length; i++) {
    minHeap.add(n[i]);
}


var arrs = [];
for (var i = 0; i < n; i++) {
    arrs[i] = minHeap.extractMin();
}
for (var i = 1; i < n; i++) {
    if (arrs[i - 1] > arrs[i]) {
        throw new Error('Error');
    }
}
console.log("Test MaxHEap completed");
