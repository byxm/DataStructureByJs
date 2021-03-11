"use strict";
/*
 * @Describtion:
 * @Date: 2019-12-07 16:53:49
 * @LastEditTime : 2020-01-05 15:16:02
 */
exports.__esModule = true;
/**
 * @description: 节点类，包含节点元素和next指向下一个节点的指针
 */
var LinkedNode = /** @class */ (function () {
    function LinkedNode(element, next) {
        if (element === void 0) { element = null; }
        if (next === void 0) { next = null; }
        this.element = element;
        this.next = next;
    }
    LinkedNode.prototype.toString = function () {
        return this.element.toString();
    };
    return LinkedNode;
}());
// 链表类
var LinkedList = /** @class */ (function () {
    function LinkedList(element, next) {
        this.size = 0;
        this.dummyHead = new LinkedNode(element, next);
    }
    // 获取链表长度
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    // 链表是否为空
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    /**
     * @description: 链表任意位置添加元素
     */
    LinkedList.prototype.add = function (index, element) {
        if (index < 0 || index > this.size) {
            throw new Error('invalid index');
        }
        var prev = this.dummyHead;
        for (var i = 0; i < index; i++) {
            prev = prev.next;
        }
        prev.next = new LinkedNode(element, prev.next);
        this.size++;
    };
    /**
     * @description: 在链表头部添加元素
     */
    LinkedList.prototype.addFirst = function (element) {
        this.add(0, element);
    };
    /**
     * @description: 链表尾部添加元素
     */
    LinkedList.prototype.addLast = function (element) {
        this.add(this.size, element);
    };
    /**
     * @description: 获取链表中指定位置元素
     */
    LinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error("invalid index");
        }
        var cur = this.dummyHead.next;
        for (var i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.element;
    };
    /**
     * @description: 获取第一个元素
     */
    LinkedList.prototype.getFirst = function () { return this.get(0); };
    /**
     * @description: 获取最后一个元素
     */
    LinkedList.prototype.getLast = function () { return this.get(this.size - 1); };
    /**
     * @description: 修改链表中的某个元素
     */
    LinkedList.prototype.set = function (index, element) {
        if (index < 0 || index >= this.size) {
            throw new Error("invalid index");
        }
        var cur = this.dummyHead.next;
        for (var i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.element = element;
    };
    /**
     * @description: 确定链表中是否有这个元素
     */
    LinkedList.prototype.contains = function (element) {
        for (var cur = this.dummyHead.next; cur != null; cur = cur.next) {
            if (cur.element === element) {
                return true;
            }
        }
        return false;
    };
    /**
     * @description: 移除链表中的某个元素,思路就是找到当前节点然后将当前节点的前一个节点的next指向后一个节点即可
     */
    LinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error("invalid index");
        }
        var prev = this.dummyHead;
        for (var i = 0; i < index; i++) {
            prev = prev.next;
        }
        var cur = prev.next;
        prev.next = cur.next;
        this.size--;
        return cur.element;
    };
    /**
     * @description: 根据具体元素移除链表中的元素
     */
    LinkedList.prototype.removeElement = function (e) {
        var prev = this.dummyHead;
        while (prev.next != null) {
            if (prev.next.element === e) {
                break;
            }
            prev = prev.next;
        }
        var cur = prev.next;
        prev.next = cur.next;
        cur.next = null;
        this.size--;
        return cur.element;
    };
    /**
     * @description: 移除链表第一个元素
     */
    LinkedList.prototype.removeFirst = function () { return this.remove(0); };
    /**
     * @description: 移除链表最后一个元素
     */
    LinkedList.prototype.removeLast = function () { return this.remove(this.size - 1); };
    LinkedList.prototype.toString = function () {
        var retStr = '';
        for (var node = this.dummyHead.next; node != null; node = node.next) {
            var ele = node.element + "-->";
            retStr = "" + retStr + ele;
        }
        retStr = retStr + "NULL";
        return retStr;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var linkedList = new LinkedList();
for (var i = 0; i < 10; i++) {
    linkedList.addFirst(i);
}
console.log('====', linkedList);
linkedList.add(2, 666);
linkedList.add(8, 888);
console.log(linkedList.toString());
console.log(linkedList.get(3));
console.log('get last', linkedList.getLast());
console.log('get first', linkedList.getFirst());
linkedList.set(1, 9827);
console.log(linkedList.toString());
console.log("is contains", linkedList.contains(9827));
linkedList.remove(1);
linkedList.removeFirst();
linkedList.removeLast();
console.log("after removing", linkedList.toString());
