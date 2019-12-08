
import Queue from '../Queue/Queue';
import LoopQueue from '../Queue/LoopQueue';
import LinkedListQueue from './LinkedListQueue';





/**
 * @description: 比较普通队列和循环队列执行性能差别
 */
function testQueue(Queue: Queue<number> | LoopQueue<number> | LinkedListQueue<number>, opCount) {
    console.time("Queue start1");
    for(let i = 0; i < opCount; i++) {
        Queue.enqueue(i);
    }
    for(let i = 0; i < opCount; i++) {
        Queue.dequeue();
    }
    console.timeEnd("Queue start1");
}

const queue = new Queue<number>();
const loopQueue = new LoopQueue<number>();
const linkedListQueue = new LinkedListQueue<number>();

testQueue(queue, 100000); // 1379.653076171875ms
testQueue(loopQueue, 100000); // 22.177978515625ms
testQueue(linkedListQueue, 100000); // 22.177978515625ms

