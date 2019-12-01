/*
 * @Describtion: 循环队列击鼓传花案例
 * @Date: 2019-12-01 16:05:28
 * @LastEditTime: 2019-12-01 17:44:37
 */

import Queue from './Queue';
import LoopQueue from './LoopQueue';

function hotPotato(nameList: Array<string>, count: number, Queue: Queue<string> | LoopQueue<string>) {
    console.time('hotPotato');

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    while (queue.getSize() > 1) {
        for (let i = 0; i < count; i++) {
            queue.enqueue(queue.dequeue());
        }
        const eliminated = queue.dequeue();
        console.log(`${eliminated}在本次传花过程中被淘汰`);
    }

    console.timeEnd('hotPotato');
    return queue.dequeue();
}

const nameList = ['Simone', 'Lily', 'Merci', 'Bob', 'Adam', 'Spencer', 'Jenny'];

const queue = new Queue<string>();
const loopQueue = new LoopQueue<string>();

const winner = hotPotato(nameList, 100, queue);
const winner1 = hotPotato(nameList, 100, loopQueue);

console.log(`winner: 胜利者是${winner}`);

console.log(`winner1: 胜利者是${winner1}`);
