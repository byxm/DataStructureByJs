/*
 * @Describtion: lettcode question named Unique Morse Code Words  https://leetcode.com/problems/unique-morse-code-words/
 * @Date: 2020-01-05 17:31:10
 * @LastEditTime : 2020-01-05 17:47:47
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

