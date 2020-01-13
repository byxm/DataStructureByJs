// /*
//  * @Describtion:
//  * @Date: 2020-01-05 16:38:38
//  * @LastEditTime : 2020-01-05 17:01:57
//  */
// import * as fs from 'fs';
// import { Set } from './interface';
// import BST from '../BST/BST';
// import { splitWords } from './splitWords';

// class BSTSet<E> implements Set<E> {
//     private BST: BST<E>;

//     constructor() {
//         this.BST = new BST();
//     }

//     getSize(): number {
//         return this.BST.getSize();
//     }

//     isEmpty(): boolean {
//         return this.BST.isEmpty();
//     }

//     add(e: E): void {
//         this.BST.add(e);
//     }

//     contains(e: E): boolean {
//         return this.BST.contains(e);
//     }

//     remove(e: E): void {
//         this.BST.remove(e);
//     }
// }


// console.log("pride and prejuice");

// const words = fs.readFileSync('./pride-and-prejudice.txt').toString();
// const words1 = splitWords(words);

// console.log(`Total Words: ${words1.length}`);

// const set: BSTSet<string> = new BSTSet();
// for(let i = 0; i < words1.length; i++) {
//     set.add(words1[i]);
// }

// console.log(`The different words of pride and prejuice are ${set.getSize()}`);

// console.log('******************************************');

// console.log('a table of two cities');


// const wordsCity = fs.readFileSync('./a-tale-of-two-cities.txt').toString();
// const wordsCity1 = splitWords(wordsCity);

// console.log(`Total Words: ${wordsCity1.length}`);

// const set1: BSTSet<string> = new BSTSet();
// for(let i = 0; i < wordsCity1.length; i++) {
//     set1.add(wordsCity1[i]);
// }

// console.log(`The different words of two table cities are ${set1.getSize()}`);
