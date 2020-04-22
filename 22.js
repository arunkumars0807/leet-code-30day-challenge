/**
 * Subarray Sum Equals K
 *
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
 * 
 * Example 1:
 * 
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var map = {},
    sum = 0,
    noOfSubArrays = 0;

  for (var i = 0; i < nums.length; ++i) {
    sum += nums[i];

    if (sum === k) {
      ++noOfSubArrays;
    }

    if (map[sum - k] !== undefined) {
      noOfSubArrays += map[sum - k];
    }

    if (map[sum] === undefined) {
      map[sum] = 0;
    }

    ++map[sum];
  }

  return noOfSubArrays;
};
