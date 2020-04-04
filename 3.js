/***
 * Maximum Subarray
 *
 * Given an integer array nums,
 * find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Approach:
 *
 * Uses Kadane's Algorithm
 * GFG Reference: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 * Wiki: https://en.wikipedia.org/wiki/Maximum_subarray_problem
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(a) {
  var max_so_far = a[0];
  var curr_max = a[0];

  for (var i = 1; i < a.length; i++) {
    curr_max = Math.max(a[i], curr_max + a[i]);
    max_so_far = Math.max(max_so_far, curr_max);
  }
  return max_so_far;
};
