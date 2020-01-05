"use strict";
exports.__esModule = true;
/*
 * @Describtion:
 * @Date: 2020-01-05 16:38:38
 * @LastEditTime : 2020-01-05 17:01:57
 */
var fs = require("fs");
var BST_1 = require("../BST/BST");
var splitWords_1 = require("./splitWords");
var BSTSet = /** @class */ (function () {
    function BSTSet() {
        this.BST = new BST_1["default"]();
    }
    BSTSet.prototype.getSize = function () {
        return this.BST.getSize();
    };
    BSTSet.prototype.isEmpty = function () {
        return this.BST.isEmpty();
    };
    BSTSet.prototype.add = function (e) {
        this.BST.add(e);
    };
    BSTSet.prototype.contains = function (e) {
        return this.BST.contains(e);
    };
    BSTSet.prototype.remove = function (e) {
        this.BST.remove(e);
    };
    return BSTSet;
}());
console.log("pride and prejuice");
var words = fs.readFileSync('./pride-and-prejudice.txt').toString();
var words1 = splitWords_1.splitWords(words);
console.log("Total Words: " + words1.length);
var set = new BSTSet();
for (var i = 0; i < words1.length; i++) {
    set.add(words1[i]);
}
console.log("The different words of pride and prejuice are " + set.getSize());
console.log('******************************************');
console.log('a table of two cities');
var wordsCity = fs.readFileSync('./a-tale-of-two-cities.txt').toString();
var wordsCity1 = splitWords_1.splitWords(wordsCity);
console.log("Total Words: " + wordsCity1.length);
var set1 = new BSTSet();
for (var i = 0; i < wordsCity1.length; i++) {
    set1.add(wordsCity1[i]);
}
console.log("The different words of two table cities are " + set1.getSize());
