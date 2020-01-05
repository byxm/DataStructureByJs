"use strict";
/*
 * @Describtion: 二分搜索树typescripts实现
 * @Date: 2019-12-16 22:01:57
 * @LastEditTime : 2020-01-05 16:38:08
 */
exports.__esModule = true;
var LinkedListQueue_1 = require("./LinkedListQueue");
var BrNode = /** @class */ (function () {
    function BrNode(e) {
        this.e = e;
        this.left = null;
        this.right = null;
    }
    return BrNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
        this.size = 0;
    }
    BST.prototype.getSize = function () {
        return this.size;
    };
    BST.prototype.isEmpty = function () {
        return this.size === 0;
    };
    BST.prototype.add = function (e) {
        this.root = this.addElement(this.root, e);
    };
    /**
     * @description: 为二分搜索树添加节点元素，根节点都大于左子树，小于右子树。递归算法
     * 每次遍历的时候需要将小于根节点的值放到左子树，大于的放大右子树，暂不支持存放相同的元素
     */
    BST.prototype.addElement = function (node, e) {
        if (node == null) {
            // 递归结束条件就是递归到空节点，此时说明添加的元素到了可以插入的节点，那么这个时候就要生成一个节点
            this.size++;
            return new BrNode(e);
        }
        if (node.e > e) {
            node.left = this.addElement(node.left, e);
        }
        if (node.e < e) {
            node.right = this.addElement(node.right, e);
        }
        return node;
    };
    // 二分搜索树是否包含元素
    BST.prototype.contains = function (e) {
        var isContain = this.isContains(this.root, e);
        return isContain;
    };
    /**
     * 和添加的思路一样，不过对于他的
     */
    BST.prototype.isContains = function (node, e) {
        if (node == null) {
            return false;
        }
        if (node.e === e) {
            return true;
        }
        else if (node.e > e) {
            return this.isContains(node.left, e);
        }
        else {
            return this.isContains(node.right, e);
        }
    };
    //二分搜索树前序遍历
    BST.prototype.preOrder = function () {
        this.preOrderTree(this.root);
    };
    BST.prototype.preOrderTree = function (node) {
        if (node == null) {
            return null;
        }
        console.log(node.e);
        this.preOrderTree(node.left);
        this.preOrderTree(node.right);
    };
    // 二分搜索树中序遍历
    BST.prototype.inOrder = function () {
        this.inOrderTree(this.root);
    };
    BST.prototype.inOrderTree = function (node) {
        if (node == null) {
            return null;
        }
        this.inOrderTree(node.left);
        console.log(node.e);
        this.inOrderTree(node.right);
    };
    // 二分搜索树后序遍历
    BST.prototype.postOrder = function () {
        this.postOrderTree(this.root);
    };
    BST.prototype.postOrderTree = function (node) {
        if (node == null) {
            return null;
        }
        this.postOrderTree(node.left);
        this.postOrderTree(node.right);
        console.log(node.e);
    };
    /**
     * 二分搜索树的广度优先遍历
     * 这种遍历方式就是以树的层级作为优先级一层一层的遍历，实现思路是使用队列。先将根节点存入队首，出队操作之后再依次存入左右子树
     */
    BST.prototype.levelOrder = function () {
        if (this.root == null) {
            return null;
        }
        var q = new LinkedListQueue_1["default"]();
        q.enqueue(this.root);
        while (!q.isEmpty()) {
            var cur = q.dequeue();
            console.log(cur.e);
            if (cur.left != null) {
                q.enqueue(cur.left);
            }
            if (cur.right != null) {
                q.enqueue(cur.right);
            }
        }
    };
    // 寻找二分搜索树中最小的值，思路是一直向左子树遍历找到最左深处的那个节点
    BST.prototype.minimum = function () {
        if (this.size === 0) {
            throw new Error('The tree is empty');
        }
        var ret = this.getMinMum(this.root);
        return ret.e;
    };
    BST.prototype.getMinMum = function (node) {
        if (node.left == null) {
            return node;
        }
        return this.getMinMum(node.left);
    };
    // 最大节点的寻找同理
    BST.prototype.maximum = function () {
        if (this.size === 0) {
            throw new Error('The tree is empty');
        }
        var ret = this.getMaxMum(this.root);
        return ret.e;
    };
    BST.prototype.getMaxMum = function (node) {
        if (node.right == null) {
            return node;
        }
        return this.getMaxMum(node.right);
    };
    /**
     * 删除二分搜索树最小节点，思路是：如果最小节点左右子树均为空，那么直接将该节点设置为空就可以
     * 但是如果该节点有右子树，那么需要把右子树移到上面来。所以现在的做法就是在左子树为空的时候做判断
     * 每次都将右子树的值替换到当前节点上面，如果本来就为空就直接替换也可以
     */
    BST.prototype.removeMin = function () {
        var ret = this.minimum();
        this.root = this.removeMinReal(this.root);
        return ret;
    };
    BST.prototype.removeMinReal = function (node) {
        if (node.left == null) {
            var rightNode = node.right;
            this.size--;
            node.right = null;
            return rightNode;
        }
        node.left = this.removeMinReal(node.left);
        return node;
    };
    /**
     * 删除最大值道理同上
     */
    BST.prototype.removeMax = function () {
        var ret = this.maximum();
        this.root = this.removeMaxReal(this.root);
        return ret;
    };
    BST.prototype.removeMaxReal = function (node) {
        if (node.right == null) {
            var leftNode = node.left;
            node.left = null;
            this.size--;
            return leftNode;
        }
        node.right = this.removeMaxReal(node.right);
        return node;
    };
    /**
     * 删除二分搜索树上的任意节点
     * 这里的思路和删除最大最小值很像，不同的是在任意节点上会有左右子树均不为空的情况，此时需要找到一个当前节点的后继节点来替换这个节点
     * 后继节点也就是距离当前节点最近的那个最小值节点
     */
    BST.prototype.remove = function (e) {
        if (!this.contains(e)) {
            throw new Error('can not find this element!');
        }
        this.root = this.removeElement(this.root, e);
        console.log('this.root', this.root);
    };
    BST.prototype.removeElement = function (node, e) {
        if (node == null) {
            return;
        }
        if (e < node.e) {
            // 节点位于左子树
            node.left = this.removeElement(node.left, e);
            return node;
        }
        else if (e > node.e) {
            node.right = this.removeElement(node.right, e);
            return node;
        }
        else {
            if (node.left == null) {
                var rightNode = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }
            if (node.right == null) {
                var leftNode = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }
            var successor = this.getMinMum(node);
            successor.right = this.removeMinReal(node.right);
            successor.left = node.left;
            node.left = null;
            node.right = null;
            return successor;
        }
    };
    return BST;
}());
exports["default"] = BST;
