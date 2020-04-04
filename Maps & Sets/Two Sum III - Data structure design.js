/**
 * Leetcode problem: 170
 * https://leetcode.com/problems/two-sum-iii-data-structure-design/
 */

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.numbers = new Map();
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if(!this.numbers.has(number)) {
        this.numbers.set(number, 1);
    } else {
        this.numbers.set(number, this.numbers.get(number) + 1);
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    
    for(let key of this.numbers.keys()) {
        let difference = value - key;
        
        if(difference !== key) {
            if(this.numbers.has(difference)) {
                return true;
            }
        } else {
            if(this.numbers.get(key) > 1) {
               return true;
            }
        } 
    }
    
    return false;
};



