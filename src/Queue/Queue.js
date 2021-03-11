"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.Queue = [];
    }
    Queue.prototype.getSize = function () {
        return this.Queue.length;
    };
    Queue.prototype.enqueue = function (queue) {
        this.Queue.push(queue);
    };
    Queue.prototype.dequeue = function () {
        return this.Queue.shift();
    };
    Queue.prototype.getFront = function () {
        return this.Queue[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.Queue.length === 0;
    };
    Queue.prototype.toString = function () {
        return this.Queue;
    };
    return Queue;
}());
var queue = new Queue();
exports["default"] = Queue;
