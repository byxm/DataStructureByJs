// /*
//  * @Describtion: Map的链表实现
//  * @Date: 2020-01-05 17:56:14
//  * @LastEditTime : 2020-01-05 23:28:07
//  */

// import * as fs from 'fs';
// import { splitWords } from './splitWords';

// import { Map } from './interface';

// class LinkedNode<K, V> {
//     key: K;
//     value: V;
//     next: LinkedNode<K, V>;

//     constructor(key: K = null, value: V = null, next: LinkedNode<K, V> = null) {
//         this.key = key;
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedListMap<K, V> implements Map<K, V> {

//     private dummyHead: LinkedNode<K, V>;
//     private size: number;

//     constructor() {
//         this.dummyHead = new LinkedNode();
//         this.size = 0;
//     }

//     getSize(): number { return this.size; }

//     isEmpty(): boolean { return this.size == 0; }

//     private getNode(key: K): LinkedNode<K, V> {
//         let cur: LinkedNode<K, V> = this.dummyHead;
//         while(cur != null) {
//             if(cur.key === key) {
//                 return cur;
//             }
//             cur = cur.next;
//         }
//         return null;
//     }

//     contains(key: K): boolean {
//         const node: LinkedNode<K, V> = this.getNode(key);
//         return node != null;
//     }

//     get(key: K): V {
//         const node: LinkedNode<K, V> = this.getNode(key);
//         return node == null ? null : node.value;
//     }

//     add(key: K, value: V) {
//         const node: LinkedNode<K, V> = this.getNode(key);
//         if(node == null) {
//             this.dummyHead.next = new LinkedNode(key, value, this.dummyHead.next);
//             this.size++;
//         }else {
//             node.value = value;
//         }
//     }

//     set(key: K, value: V) {
//         const node: LinkedNode<K, V> = this.getNode(key);
//         if(node == null) {
//             throw new Error(`${key} doesn't exist!`)
//         }
//         node.value = value;
//     }

//     remove(key: K): V {
//         let prev: LinkedNode<K, V> = this.dummyHead.next;
//         while(prev != null) {
//             if(prev.key === key) {
//                 const cur: LinkedNode<K, V> = prev.next;
//                 prev.next = cur.next;
//                 this.size--;
//                 prev.next = null;
//             }
//             prev = prev.next;
//             return prev.value;
//         }
//         return null;
//     }
// }



// console.log("pride and prejuice");

// const words = fs.readFileSync('./pride-and-prejudice.txt').toString();
// const words1 = splitWords(words);

// console.log(`Total Words: ${words1.length}`);

// /**
//  * note: 这里我同样也使用了ES6的Map映射实现这个功能，时间复杂度也和二分搜索树实现的一样，甚至还要更快一些
//  * 所以在使用es6的字典的时候一定优先使用Map
// */

// const map: LinkedListMap<string, number> = new LinkedListMap();

// console.time('linkedListMap time');

// for(let word of words1) {
//     if(map.contains(word)) {
//         map.set(word, map.get(word) + 1);
//     }else {
//         map.add(word, 1);
//     }
// }

// console.timeEnd('linkedListMap time');

// console.log("Total different words: " + map.getSize());
// console.log("Frequency of PRIDE: " + map.get("pride"));
// console.log("Frenquency of PREJUDICE: " + map.get("prejudice"));


