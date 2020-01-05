"use strict";
exports.__esModule = true;
/*
 * @Describtion: Set集合链表实现
 * @Date: 2020-01-05 11:53:58
 * @LastEditTime : 2020-01-05 18:04:45
 */
var fs = require("fs");
var LinkedListBasics_1 = require("../LinkedList/LinkedListBasics");
var splitWords_1 = require("./splitWords");
var LinkedListSet = /** @class */ (function () {
    function LinkedListSet() {
        this.list = new LinkedListBasics_1.LinkedList();
    }
    LinkedListSet.prototype.getSize = function () { return this.list.getSize(); };
    LinkedListSet.prototype.isEmpty = function () { return this.list.isEmpty(); };
    LinkedListSet.prototype.add = function (e) {
        if (!this.list.contains(e)) {
            this.list.addFirst(e);
        }
    };
    LinkedListSet.prototype.contains = function (e) { return this.list.contains(e); };
    LinkedListSet.prototype.remove = function (e) { this.list.removeElement(e); };
    return LinkedListSet;
}());
console.log("pride and prejuice");
var words = fs.readFileSync('./pride-and-prejudice.txt').toString();
var words1 = splitWords_1.splitWords(words);
console.log("Total Words: " + words1.length);
var set = new LinkedListSet();
for (var i = 0; i < words1.length; i++) {
    set.add(words1[i]);
}
console.log("The different words of pride and prejuice are " + set.getSize());
console.log('******************************************');
console.log('a table of two cities');
var wordsCity = fs.readFileSync('./a-tale-of-two-cities.txt').toString();
var wordsCity1 = splitWords_1.splitWords(wordsCity);
console.log("Total Words: " + wordsCity1.length);
var set1 = new LinkedListSet();
for (var i = 0; i < wordsCity1.length; i++) {
    set1.add(wordsCity1[i]);
}
console.log("The different words of two table cities are " + set1.getSize());
