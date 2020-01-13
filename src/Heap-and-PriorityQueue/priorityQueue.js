/*
 * @Description: 基于最大二叉堆的优先队列
 * @Author:
 * @Date: 2020-01-16 09:04:46
 */
var MinHeap_1 = require('./MinHeap');
/**
 * @description: 由于最大二叉堆保证了根节点大于左右子节点所以能保证出队的元素始终是最大的，也就是优先级最高的
 */
var PriorityQueue = (function () {
    function PriorityQueue() {
        this.minHeap = new MinHeap_1["default"]();
    }
    PriorityQueue.prototype.getSize = function () {
        return this.minHeap.size();
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.minHeap.isEmpty();
    };
    PriorityQueue.prototype.enqueue = function (e) {
        this.minHeap.add(e);
    };
    PriorityQueue.prototype.dequeue = function () {
        return this.minHeap.extractMin();
    };
    PriorityQueue.prototype.getFront = function () {
        return this.minHeap.findMin();
    };
    return PriorityQueue;
})();
exports["default"] = PriorityQueue;
