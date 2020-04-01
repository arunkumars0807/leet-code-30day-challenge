/***
 * Single Number
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 * Example 1:
 * Input: [2,2,1]
 * Output: 1
 *
 * Example 2:
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var result = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    // Pairs will make the result value to 0, only the non paired number will be in the result
    // Since, we are sure that only one number is odd one out, this solution is fine.
    result ^= nums[i];
  }
  return result;
};
