/*
 * @Describtion: 对链表删除相同元素的递归操作
 * @Date: 2019-12-14 21:15:59
 * @LastEditTime: 2019-12-14 22:50:01
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @description: 这里需要将问题进行拆解得到最基本的那个问题解法
 * 在这里每次的操作可以将其分成链表的头节点和剩余节点，如果头节点值和删除元素的值相等直接返回剩余节点，如果不等则拼接上再返回
 */
const removeElements = function(head, val) {
     if(head == null) {
         return null;
     }   
     const res = removeElements(head.next, val);
     if(head.val === val) {
        return res;
     } else {
         head.next = res;
         return head;
     }
};

const arr = [1,2,3,4,5,6,6];

