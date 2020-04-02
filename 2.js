/***
 * 
 * Happy Number
 * 
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle
 * which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 *
 * Example:
 *
 * Input: 19
 * Output: true
 *
 * Explanation:
 *
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 * Approach:
 *
 * 1. Find the sum of squares of the number,
 * 2. Store that result in a map / set
 * 3. Repeat 1 (until)
 *
 * Either
 *
 * result === 1 (or) [true]
 * result is one of the existing stored numbers. [false] - Cycle detected.
 *
 * Approach 2:
 *
 * This can be further optimized by using 2 pointer approach of linkedlist
 *
 * Run a slow and a fast pointer, if they meet, there is a cycle hence return false,
 * else return true if the result comes to '1'
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var map = {};
  while (true) {
    n = sumOfSquares(n);

    if (n === 1) {
      return true;
    } else if (map[n] !== undefined) {
      return false;
    }
    map[n] = true;
  }
};

var sumOfSquares = function(num) {
  var sum = 0;
  while (num != 0) {
    var digit = num % 10;
    sum += digit * digit;
    num = Math.trunc(num / 10);
  }
  return sum;
};
