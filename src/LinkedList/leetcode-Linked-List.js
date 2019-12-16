/*
 * @Describtion: 去除链表中的相同元素，关键是要在最后返回一个node元素让链表指针能够找到值
 问题见 https://leetcode.com/problems/remove-linked-list-elements/submissions/
 * @Date: 2019-12-10 20:37:32
 * @LastEditTime: 2019-12-10 21:26:25
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeElements = function(head, val) {
    var dummyNode = new ListNode(-1);
    dummyNode.next = head;
    var prev = dummyNode;
    while(prev.next != null) {
        if(prev.next.val === val) {
            prev.next = prev.next.next;
        }else {
            prev = prev.next;
        }
    }
    return dummyNode.next;
};
