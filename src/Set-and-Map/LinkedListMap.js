"use strict";
/*
 * @Describtion: Map的链表实现
 * @Date: 2020-01-05 17:56:14
 * @LastEditTime : 2020-01-05 23:25:42
 */
exports.__esModule = true;
var fs = require("fs");
var splitWords_1 = require("./splitWords");
var LinkedNode = /** @class */ (function () {
    function LinkedNode(key, value, next) {
        if (key === void 0) { key = null; }
        if (value === void 0) { value = null; }
        if (next === void 0) { next = null; }
        this.key = key;
        this.value = value;
        this.next = next;
    }
    return LinkedNode;
}());
var LinkedListMap = /** @class */ (function () {
    function LinkedListMap() {
        this.dummyHead = new LinkedNode();
        this.size = 0;
    }
    LinkedListMap.prototype.getSize = function () { return this.size; };
    LinkedListMap.prototype.isEmpty = function () { return this.size == 0; };
    LinkedListMap.prototype.getNode = function (key) {
        var cur = this.dummyHead;
        while (cur != null) {
            if (cur.key === key) {
                return cur;
            }
            cur = cur.next;
        }
        return null;
    };
    LinkedListMap.prototype.contains = function (key) {
        var node = this.getNode(key);
        return node != null;
    };
    LinkedListMap.prototype.get = function (key) {
        var node = this.getNode(key);
        return node == null ? null : node.value;
    };
    LinkedListMap.prototype.add = function (key, value) {
        var node = this.getNode(key);
        if (node == null) {
            this.dummyHead.next = new LinkedNode(key, value, this.dummyHead.next);
            this.size++;
        }
        else {
            node.value = value;
        }
    };
    LinkedListMap.prototype.set = function (key, value) {
        var node = this.getNode(key);
        if (node == null) {
            throw new Error(key + " doesn't exist!");
        }
        node.value = value;
    };
    LinkedListMap.prototype.remove = function (key) {
        var prev = this.dummyHead.next;
        while (prev != null) {
            if (prev.key === key) {
                var cur = prev.next;
                prev.next = cur.next;
                this.size--;
                prev.next = null;
            }
            prev = prev.next;
            return prev.value;
        }
        return null;
    };
    return LinkedListMap;
}());
console.log("pride and prejuice");
var words = fs.readFileSync('./pride-and-prejudice.txt').toString();
var words1 = splitWords_1.splitWords(words);
console.log("Total Words: " + words1.length);
// const map: LinkedListMap<string, number> = new LinkedListMap();
var map = new Map();
console.time('linkedListMap time');
for (var _i = 0, words1_1 = words1; _i < words1_1.length; _i++) {
    var word = words1_1[_i];
    if (map.has(word)) {
        map.set(word, map.get(word) + 1);
    }
    else {
        map.set(word, 1);
    }
}
console.timeEnd('linkedListMap time');
console.log("Total different words: " + map.size);
console.log("Frequency of PRIDE: " + map.get("pride"));
console.log("Frenquency of PREJUDICE: " + map.get("prejudice"));
