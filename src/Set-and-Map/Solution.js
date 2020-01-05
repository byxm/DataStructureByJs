/*
 * @Describtion: lettcode question named Unique Morse Code Words  https://leetcode.com/problems/unique-morse-code-words/
 * @Date: 2020-01-05 17:31:10
 * @LastEditTime : 2020-01-07 21:32:32
 */


var uniqueMorseRepresentations = function(words) {
    const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const set = new Set();
    for(let i = 0; i < words.length;i++) {
        let morseCode = '';
        for(let j = 0; j < words[i].length; j++) {
            morseCode = morseCode + codes[words[i].charAt(j).charCodeAt() - 'a'.charCodeAt()]
        }
        set.add(morseCode);
    }
    return set.size;
};


/**
 * @description: lettcode question named Unique Morse Code Words  https://leetcode.com/problems/unique-morse-code-words/
 * @param {type} 
 * @return: 
 */
// var uniqueMorseRepresentations = function(words) {
//     const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//     const set = new Set();
//     for(let i = 0; i < words.length;i++) {
//         let morseCode = '';
//         for(let j = 0; j < words[i].length; j++) {
//             morseCode = morseCode + codes[words[i].charAt(j).charCodeAt() - 'a'.charCodeAt()]
//         }
//         set.add(morseCode);
//     }
//     return set.size;
// };



/**
 * @description: leetcode question 349 https://leetcode.com/problems/intersection-of-two-arrays/
 * @param {type} 
 * @return: 
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set();
    nums2.forEach(function(value) {
        if(set1.has(value)) {
            set2.add(value);
        }
    })
    return [...set2];
};


/**
 * @description: leetcode solution 350 https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const arr = [];
    for(const num of nums1) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        }else {
            map.set(num, 1);
        }
    }

    for(const num of nums2) {
        if(map.has(num)) {
            arr.push(num);
            map.set(num, map.get(num) - 1);
            if(map.get(num) === 0) {
                map.delete(num);
            }
        }
    }
    return arr;

};
