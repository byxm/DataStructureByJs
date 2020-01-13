// /*
//  * @Describtion: 基于二分搜索树的Map实现
//  * @Date: 2020-01-05 22:49:23
//  * @LastEditTime : 2020-01-05 23:20:37
//  */

// import * as fs from 'fs';
// import { splitWords } from './splitWords';
// import { Map } from './interface';

// class BrNode<K, V> {
//     key: K;
//     value: V;
//     left: BrNode<K, V>;
//     right: BrNode<K, V>;

//     constructor(key: K, value: V) {
//         this.key = key;
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BSTMap<K, V> implements Map<K, V> {
//     private root: BrNode<K, V>;
//     private size: number;

//     constructor() {
//         this.root = null;
//         this.size = 0;
//     }

//     getSize(): number {
//         return this.size;
//     }

//     isEmpty(): boolean {
//         return this.size === 0;
//     }

//     add(key: K, value: V): void {
//         this.root = this.addElement(this.root, key, value);
//     }

//     /**
//      * @description: 为二分搜索树添加节点元素，根节点都大于左子树，小于右子树。递归算法
//      * 每次遍历的时候需要将小于根节点的值放到左子树，大于的放大右子树，暂不支持存放相同的元素
//      */

//     private addElement(node: BrNode<K, V>, key: K, value: V): BrNode<K, V> {
//         if (node == null) {
//             // 递归结束条件就是递归到空节点，此时说明添加的元素到了可以插入的节点，那么这个时候就要生成一个节点
//             this.size++;
//             return new BrNode(key, value);
//         }

//         if (node.key > key) {
//             node.left = this.addElement(node.left, key, value);
//         }

//         if (node.key < key) {
//             node.right = this.addElement(node.right, key, value);
//         }

//         return node;
//     }

//     private getNode(key: K, node: BrNode<K, V>): BrNode<K, V> {
//         if(node == null) {
//             return null;
//         }
//         if(key < node.key) {
//             return this.getNode(key, node.left);
//         }else if(key > node.key) {
//             return this.getNode(key, node.right);
//         }else {
//             return node;
//         }
//     }

//     // 二分搜索树是否包含元素
//     contains(key: K): boolean {
//         return this.getNode(key, this.root) != null;
//     }

//     get(key: K): V {
//         const node: BrNode<K ,V> = this.getNode(key, this.root);
//         return node == null ? null : node.value;
//     }

//     set(key: K, value: V) {
//         const node: BrNode<K ,V> = this.getNode(key, this.root);
//         if(node == null) {
//             throw new Error(`${key} doesn't exist`);
//         }
//         node.value = value;
//     }

   
//     // 寻找二分搜索树中最小的值，思路是一直向左子树遍历找到最左深处的那个节点
//     minimum(): K {
//         if (this.size === 0) {
//             throw new Error('The tree is empty');
//         }
//         const ret = this.getMinMum(this.root);
//         return ret.key;
//     }

//     getMinMum(node: BrNode<K, V>): BrNode<K, V> {
//         if (node.left == null) {
//             return node;
//         }
//         return this.getMinMum(node.left);
//     }

//     // 最大节点的寻找同理
//     maximum(): K {
//         if (this.size === 0) {
//             throw new Error('The tree is empty');
//         }
//         const ret = this.getMaxMum(this.root);
//         return ret.key;
//     }

//     getMaxMum(node: BrNode<K, V>): BrNode<K, V> {
//         if (node.right == null) {
//             return node;
//         }
//         return this.getMaxMum(node.right);
//     }

//     /**
//      * 删除二分搜索树最小节点，思路是：如果最小节点左右子树均为空，那么直接将该节点设置为空就可以
//      * 但是如果该节点有右子树，那么需要把右子树移到上面来。所以现在的做法就是在左子树为空的时候做判断
//      * 每次都将右子树的值替换到当前节点上面，如果本来就为空就直接替换也可以
//      */

//     removeMin(): K {
//         const ret = this.minimum();
//         this.root = this.removeMinReal(this.root);
//         return ret;
//     }

//     removeMinReal(node: BrNode<K, V>): BrNode<K, V> {
//         if (node.left == null) {
//             const rightNode: BrNode<K, V> = node.right;
//             this.size--;
//             node.right = null;
//             return rightNode;
//         }

//         node.left = this.removeMinReal(node.left);
//         return node;
//     }

//     /**
//      * 删除最大值道理同上
//      */

//     removeMax() {
//         const ret = this.maximum();
//         this.root = this.removeMaxReal(this.root);
//         return ret;
//     }

//     removeMaxReal(node: BrNode<K, V>): BrNode<K, V> {
//         if (node.right == null) {
//             const leftNode: BrNode<K, V> = node.left;
//             node.left = null;
//             this.size--;
//             return leftNode;
//         }
//         node.right = this.removeMaxReal(node.right);
//         return node;
//     }

//     /**
//      * 删除二分搜索树上的任意节点
//      * 这里的思路和删除最大最小值很像，不同的是在任意节点上会有左右子树均不为空的情况，此时需要找到一个当前节点的后继节点来替换这个节点
//      * 后继节点也就是距离当前节点最近的那个最小值节点
//      */

//     remove(key: K): V {
//         const node: BrNode<K, V> = this.getNode(key, this.root);
//         this.root = this.removeElement(this.root, key);
//         console.log('this.root', this.root);
//         return node.value;
//     }

//     removeElement(node: BrNode<K, V>, key: K): BrNode<K, V> {
//         if (node == null) {
//             return;
//         }
//         if (key < node.key) {
//             // 节点位于左子树
//             node.left = this.removeElement(node.left, key);
//             return node;
//         } else if (key > node.key) {
//             node.right = this.removeElement(node.right, key);
//             return node;
//         } else {
//             if (node.left == null) {
//                 const rightNode: BrNode<K, V> = node.right;
//                 node.right = null;
//                 this.size--;
//                 return rightNode;
//             }
//             if (node.right == null) {
//                 const leftNode: BrNode<K, V> = node.left;
//                 node.left = null;
//                 this.size--;
//                 return leftNode;
//             }
//             const successor: BrNode<K, V> = this.getMinMum(node);
//             successor.right = this.removeMinReal(node.right);
//             successor.left = node.left;
//             node.left = null;
//             node.right = null;
//             return successor;
//         }
//     }
// }

// console.log("pride and prejuice");

// const words = fs.readFileSync('./pride-and-prejudice.txt').toString();
// const words1 = splitWords(words);

// console.log(`Total Words: ${words1.length}`);

// const map: BSTMap<string, number> = new BSTMap();

// console.time('bstMap time');

// for(let word of words1) {
//     if(map.contains(word)) {
//         map.set(word, map.get(word) + 1);
//     }else {
//         map.add(word, 1);
//     }
// }

// console.timeEnd('bstMap time');

// console.log("Total different words: " + map.getSize());
// console.log("Frequency of PRIDE: " + map.get("pride"));
// console.log("Frenquency of PREJUDICE: " + map.get("prejudice"));