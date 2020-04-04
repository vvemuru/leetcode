/**
 * Leetcode problem: 349
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let smallestArray = nums1.length < nums2.length ? nums1 : nums2;
    let biggestArray = nums1.length > nums2.length ? nums1 : nums2;
    let smallestArrayMap = {};
    let intersection = [];
        
    for(let item of smallestArray) {
        if(!smallestArrayMap[item]) {
          smallestArrayMap[item] = true;
        }
    }
    
    for(let i=0; i< biggestArray.length; i++) {
        let currentItem = biggestArray[i];
        
        if(smallestArrayMap[currentItem]) {
          intersection.push(currentItem);
        }
    }
    
    let convertToSet = new Set(intersection);
    
    return [...convertToSet];
};