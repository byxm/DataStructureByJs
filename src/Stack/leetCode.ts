/*
 * @Date: 2019-11-24 21:54:08
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 21:01:17
 */

import Stack from './Stack';

const stack = new Stack();

/**
 * @description: 模拟栈进行括号匹配，见leetcode题目https://leetcode.com/problems/valid-parentheses/submissions/
 */
function isValid(str: string): boolean {
    for (let i: number = 0; i < str.length; i++) {
        const s = str.charAt(i);
        if (s === '(' || s === '{' || s === '[') {
            stack.push(s);
        } else {
            if (stack.isEmpty()) {
                return false;
            }
            const topStack = stack.pop();
            if (s === ')' && topStack !== '(') {
                return false;
            }
            if (s === '}' && topStack !== '{') {
                return false;
            }
            if (s === ']' && topStack !== '[') {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

// console.log(isValid('()([)[]'));

/**
 * @description: 10进制转二进制
 */
function dividedBy2(intger) {
    const binary = [];
    while(intger > 0) {
        const res = Math.floor(intger % 2)
        stack.push(res);
        intger = Math.floor(intger / 2);
    }
    console.log(stack.toString(), stack.getSize());
    const length = stack.getSize();
    for(let i = 0; i < length; i++) {
        binary.push(stack.pop());
    }
    return binary.join('');
}

console.log(dividedBy2(17777));

