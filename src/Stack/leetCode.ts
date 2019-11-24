/*
 * @Author: your name
 * @Date: 2019-11-24 20:50:48
 * @LastEditTime: 2019-11-24 21:48:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DataStructure/src/Stack/leetCode.ts
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

console.log(isValid('()([)[]'));
