/*
 * @Description: leetCode 347号问题和优先队列有关 https://leetcode.com/problems/top-k-frequent-elements/
 * @Author:
 * @Date: 2020-01-16 09:25:35
 */

import PriorityQueue from './priorityQueue';

/**
 * @description: 这道题的解法借助优先队列能够让时间复杂度达到O(nlogk)，思路是：先统计出数组中所有元素出现的次数
 * 然后将这些元素的频率键值存入最小二叉堆队列，得到一个以最小频率为高优先级的队列，然后在依次将键值里面的频率元素和队列中的
 * 队首元素相比较，如果大于这个队首元素，也就是说比频率最低的元素要高，那么就出队，然后入队钙元素
 */
var topKFrequent = function(nums, k) {
    
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(i)) {
            numsMap.set(i, numsMap.get(i) + 1);
        } else {
            numsMap.set(i, 1);
        }
    }


    class Freq {

        e: number;
        freq: number;

        constructor(e, freq) {
            this.e = e;
            this.freq = freq;
        }
    }
    

    const pq: PriorityQueue<Freq> = new PriorityQueue<Freq>();
    for (const key of numsMap.keys()) {
        if (pq.getSize() < k) {
            pq.enqueue(new Freq(key, numsMap.get(key)));
        }else if(numsMap.get(key) > pq.getFront()) {
            pq.dequeue();
            pq.enqueue(new Freq(key, numsMap.get(key)));
        }
    }

    const arr = [];
    while(!pq.isEmpty()) {
        arr.push(pq.dequeue().e);
    }

    return arr;

};

const nums = [1,1,1,2,2,3];
const k = 2;

console.log(topKFrequent(nums, k));
