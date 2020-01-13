var MinHeap = (function() {
    function MinHeap(arr) {
        this.data = new Array();
        if (arr) {
            this.data = arr;
            for (var i = this.parent(arr.length - 1); i >= 0; i--) {
                this.siftDown(i);
            }
        }
    }
    MinHeap.prototype.size = function() {
        return this.data.length;
    };
    MinHeap.prototype.isEmpty = function() {
        return this.data.length === 0;
    };

    MinHeap.prototype.parent = function(index) {
        if (index === 0) {
            throw new Error('index-0 is not existed parent index');
        }
        return Math.floor((index - 1) / 2);
    };
    MinHeap.prototype.leftChild = function(index) {
        return index * 2 + 1;
    };
    MinHeap.prototype.rightChild = function(index) {
        return index * 2 + 2;
    };

    MinHeap.prototype.add = function(e) {
        this.data.push(e);
        this.siftUp(this.data.length - 1);
    };
    MinHeap.prototype.siftUp = function(index) {
        while (index > 0 && this.data[this.parent(index)].freq > this.data[index].freq) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    };
    // 将符合条件的根节点和该元素交换位置
    MinHeap.prototype.swap = function(parent, index) {
        (_a = [this.data[index], this.data[parent]]), (this.data[parent] = _a[0]), (this.data[index] = _a[1]);
        var _a;
    };

    MinHeap.prototype.findMin = function() {
        if (this.data.length === 0) {
            throw new Error('array is empty');
        }
        return this.data[0];
    };

    MinHeap.prototype.extractMin = function() {
        var ret = this.findMin();
        this.swap(0, this.data.length - 1);
        this.data.pop();
        this.siftDown(0);
        return ret;
    };

    MinHeap.prototype.siftDown = function(index) {
        // 循环遍历，终止条件是当左子树的节点索引越界以后停止，因为左子树索引如果越界那么右子树肯定也越界
        while (this.leftChild(index) < this.data.length) {
            var leftIndex = this.leftChild(index);
            var rightChild = this.rightChild(index);
            if (leftIndex + 1 < this.data.length && this.data[leftIndex].freq > this.data[rightChild].freq) {
                leftIndex++;
            }
            if (this.data[leftIndex].freq >= this.data[index].freq) {
                break;
            }
            this.swap(index, leftIndex);
            index = leftIndex;
        }
    };

    MinHeap.prototype.replace = function(e) {
        var ret = this.findMin();
        this.data[0] = e;
        this.siftDown(0);
        return ret;
    };
    MinHeap.prototype.toString = function() {
        console.log(this.data);
    };
    return MinHeap;
})();

var PriorityQueue = (function() {
    function PriorityQueue() {
        this.minHeap = new MinHeap();
    }
    PriorityQueue.prototype.getSize = function() {
        return this.minHeap.size();
    };
    PriorityQueue.prototype.isEmpty = function() {
        return this.minHeap.isEmpty();
    };
    PriorityQueue.prototype.enqueue = function(e) {
        this.minHeap.add(e);
    };
    PriorityQueue.prototype.dequeue = function() {
        return this.minHeap.extractMin();
    };
    PriorityQueue.prototype.getFront = function() {
        return this.minHeap.findMin();
    };
    PriorityQueue.prototype.showAll = function() {
        return this.minHeap.data;
    }

    return PriorityQueue;
})();

var topKFrequent = function(nums, k) {
    var numsMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        const key = nums[i];
        if (numsMap.has(key)) {
            numsMap.set(key, numsMap.get(key) + 1);
        } else {
            numsMap.set(key, 1);
        }
    }

    var Freq = (function() {
        function Freq(e, freq) {
            this.e = e;
            this.freq = freq;
        }
        return Freq;
    })();
    var pq = new PriorityQueue();
    for (let key of numsMap.keys()) {
        if (pq.getSize() < k) {
            pq.enqueue(new Freq(key, numsMap.get(key)));
        } else if (numsMap.get(key) > pq.getFront().freq) {
            pq.dequeue();
            pq.enqueue(new Freq(key, numsMap.get(key)));
        }
    }
    var arr = [];
    while (!pq.isEmpty()) {
        arr.push(pq.dequeue().e);
    }
    return arr;
};
