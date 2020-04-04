// Leetcode problem: 760
// https://leetcode.com/problems/find-anagram-mappings/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    let arrayBMap = new Map();
    let i, j;
    let result = [];
    const ALen= A.length;
    const BLen = B.length;
    
    for(i = 0; i < BLen; i++) {
      let num = B[i];  
      if(!arrayBMap.has(num)) {
         arrayBMap.set(num, i);
      }
    }
    
    for(j = 0; j < ALen; j++) {
        let num = A[j];  
        if(arrayBMap.has(num)) {
          result.push(arrayBMap.get(num));
        }
    }
    
    return result;
};