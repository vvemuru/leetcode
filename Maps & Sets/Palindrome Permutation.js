/**
 *Leetcode problem: 266 
 *https://leetcode.com/problems/palindrome-permutation/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let stringCounter = new Map();
    
    for(let i of s) {
      if(!stringCounter.has(i)) {
          stringCounter.set(i, 1);
      } else {
          stringCounter.delete(i)
      }
    }
    
    let counterLength = stringCounter.size;
    
    if(counterLength === 0 || counterLength === 1) {
      return true;
    } else {
      return false;
    }
};