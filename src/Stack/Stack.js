"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.Array = [];
    }
    Stack.prototype.getSize = function () {
        return this.Array.length;
    };
    Stack.prototype.push = function (stack) {
        this.Array.push(stack);
    };
    Stack.prototype.pop = function () {
        return this.Array.pop();
    };
    Stack.prototype.peek = function () {
        return this.Array[this.Array.length - 1];
    };
    Stack.prototype.clear = function () {
        this.Array.length = 0;
    };
    Stack.prototype.isEmpty = function () {
        return this.Array.length === 0;
    };
    Stack.prototype.toString = function () {
        return this.Array;
    };
    return Stack;
}());
exports["default"] = Stack;
