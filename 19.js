/***
 * Search in Rotated Sorted Array
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 *
 * Output: 4
 *
 *
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 *
 * Output: -1
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return searchUtil(nums, 0, nums.length - 1, target);
};

var searchUtil = function (nums, s, e, target) {
  if (s > e) {
    return -1;
  }

  var m = Math.trunc((s + e) / 2);

  if (nums[s] === target) {
    return s;
  }
  if (nums[e] === target) {
    return e;
  }
  if (nums[m] === target) {
    return m;
  }

  if (nums[s] <= nums[m]) {
    // s ... m is sorted
    if (target >= nums[s] && target <= nums[m]) {
      return searchUtil(nums, s, m - 1, target);
    }
    return searchUtil(nums, m + 1, e, target);
  } else {
    // Rotated
    if (target >= nums[m] && target <= nums[e]) {
      return searchUtil(nums, m + 1, e, target);
    }
  }
  return searchUtil(nums, s, m - 1, target);
};
