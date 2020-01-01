/*
 * @Describtion: 
 * @Date: 2019-12-31 13:53:23
 * @LastEditTime : 2020-01-01 23:26:31
 */

import BST from './BST';

const bst: BST<number> = new BST();

        /////////////////
        //      5      //
        //    /   \    //
        //   3    6    //
        //  / \    \   //
        // 2  4     8  //
        /////////////////

const nums = [5, 3, 6, 8, 4, 2];


for(const num of nums) {
    bst.add(num);
}

bst.preOrder();
// bst.inOrder();
// bst.postOrder();

// console.log('hanNode', bst.contains(5));

// bst.levelOrder();

// console.log(bst.minimum());
// console.log(bst.maximum());

// bst.removeMin();
// bst.removeMax();
console.log('=======');
// bst.preOrder();

bst.remove(3);
// bst.preOrder();
