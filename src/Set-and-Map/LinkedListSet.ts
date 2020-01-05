/*
 * @Describtion: Set集合链表实现
 * @Date: 2020-01-05 11:53:58
 * @LastEditTime : 2020-01-05 18:07:29
 */
import * as fs from 'fs';
import { Set } from './interface';
import { LinkedList } from '../LinkedList/LinkedListBasics';
import { splitWords } from './splitWords';


/**
 * note: 这里我使用了ES6新增的Set来测试过，发现ES6原生Set的时间复杂度和我使用二分搜索树实现的差不多。所以可以肯定的是Set的底层实现绝不是用的数组和链表
 * 以后再使用集合的时候可以放心的使用ES6的Set
 */

class LinkedListSet<E> implements Set<E> {

    private list: LinkedList<E>;

    constructor() {
        this.list = new LinkedList();
    }

    getSize(): number { return this.list.getSize(); }

    isEmpty(): boolean { return this.list.isEmpty(); }

    add(e: E): void {
        if(!this.list.contains(e)) {
            this.list.addFirst(e);
        }
    }

    contains(e: E): boolean { return this.list.contains(e) }

    remove(e: E): void { this.list.removeElement(e); }
    
}

console.log("pride and prejuice");

const words = fs.readFileSync('./pride-and-prejudice.txt').toString();
const words1 = splitWords(words);

console.log(`Total Words: ${words1.length}`);

const set: LinkedListSet<string> = new LinkedListSet();
for(let i = 0; i < words1.length; i++) {
    set.add(words1[i]);
}

console.log(`The different words of pride and prejuice are ${set.getSize()}`);

console.log('******************************************');

console.log('a table of two cities');


const wordsCity = fs.readFileSync('./a-tale-of-two-cities.txt').toString();
const wordsCity1 = splitWords(wordsCity);

console.log(`Total Words: ${wordsCity1.length}`);

const set1: LinkedListSet<string> = new LinkedListSet();
for(let i = 0; i < wordsCity1.length; i++) {
    set1.add(wordsCity1[i]);
}

console.log(`The different words of two table cities are ${set1.getSize()}`);
