/***
 * Contiguous Array
 *
 * Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
 *
 * Example 1:
 *
 * Input: [0,1]
 * Output: 2
 *
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 *
 * Example 2:
 *
 * Input: [0,1,0]
 * Output: 2
 *
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 * Note: The length of the given binary array will not exceed 50,000.
 *
 * Approach 1: (Bad)
 *
 * Use 2 loops and find which sums to 0
 *
 * Time: O(n^2)
 *
 * Approach 2: (Good) => Used in this program
 *
 * The idea is to convert all '0's to -1.
 *
 * And try to find the maximum subarray length which sums to 0.
 *
 * So, we are converting a tricky problem with a little modification into something that is straightforward.
 *
 * Approch for finding max subarray length to 0 sum.
 * 
 * Start with sum = 0, maxLen = 0
 *
 * For every 'i',
 * 
 * Store the sum so far in a variable 'sum' (sum += nums[i])
 * 
 * ---- This is for the last loop case ----
 * check if sum === 0
 * then maxLen = current i + 1 => maxLen = i + 1;
 * ---- This is for the last loop case ----
 * 
 * if this sum value is not already present in the map, 
 *  Add to the map with the index (i) as the value
 * 
 * if this sum value is already present in the map
 *  maxLen = max (maxLen, current i index in for loop - map[sum]) => maxLen = max(maxLen, i - map[sum]);
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  var map = {},
    sum = 0,
    maxLength = -1,
    n = nums.length;

  for (var i = 0; i < n; ++i) {
    nums[i] = nums[i] || -1;
    sum += nums[i];

    if (sum === 0) {
      maxLength = i + 1;
    }

    if (map[sum] === undefined) {
      map[sum] = i;
    } else {
      maxLength = Math.max(maxLength, i - map[sum]);
    }
  }

  return Math.max(maxLength, 0);
};
