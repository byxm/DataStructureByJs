/*
 * @Describtion: 
 * @Date: 2019-12-07 16:50:10
 * @LastEditTime: 2019-12-08 17:46:59
 */

// import Queue from './Queue';
// import LoopQueue from './LoopQueue';




// /**
//  * @description: 比较普通队列和循环队列执行性能差别
//  */
// function testQueue(Queue: Queue<number> | LoopQueue<number>, opCount) {
//     console.time("Queue start");
//     for(let i = 0; i < opCount; i++) {
//         Queue.enqueue(i);
//     }
//     for(let i = 0; i < opCount; i++) {
//         Queue.dequeue();
//     }
//     console.timeEnd("Queue start");
// }

// const queue = new Queue<number>();
// const loopQueue = new LoopQueue<number>();

// testQueue(queue, 100000); // 1379.653076171875ms
// testQueue(loopQueue, 100000); // 22.177978515625ms

//  /**
//   * 我们用循环队列降低了出队列操作的时间复杂度，通过均摊复杂度分析得出循环队列的时间复杂度为O(1),可以看到在性能上的提升是非常明显的
//   * 但是我发现一个问题，当opCount的值比较小的时候（在我的这段代码里面是30000以下），普通队列的执行时间居然比循环队列的还要小
//   * 并非想过多纠结这个问题，毕竟在1000000以上确实有很明显的性能提升。我猜是javascript的shift方法可能内部也做了什么处理，并非我单纯
//   * 想象的复杂度为O(n)
//   */ 
