/***
 * Move Zeroes
 *
 * Given an array nums,
 * write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Constraints:
 *
 * 1. You must do this in-place without making a copy of the array.
 * 2. Minimize the total number of operations.
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // Approach 1
  // Using counter to store the number of 0s and pushing at the end.
  // Uses Splicing of the array

  // var count = 0;
  // for (var i = 0; i < nums.length;) {
  //     if (nums[i] === 0) {
  //         ++ count;
  //         nums.splice(i, 1);
  //     } else {
  //         ++ i;
  //     }
  // }

  // for (var i = 0; i < count; ++ i) {
  //     nums.push(0);
  // }

  // Approach 2
  // Using 2 pointers to keep track of zeros and non zeros
  // Avoids splicing the array

  var i = 0,
    j = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
    ++i;
  }
  for (j; j < nums.length; ++j) {
    nums[j] = 0;
  }
};
