/***
 * 
 * Last Stone Weight
 * 
 * We have a collection of stones, each stone has a positive integer weight.
 * 
 * Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
 * 
 * If x == y, both stones are totally destroyed;
 * If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
 * At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
 * 
 * Example 1:
 * 
 * Input: [2,7,4,1,8,1]
 * Output: 1
 * 
 * Explanation: 
 * 
 * We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
 * we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
 * we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 * 
 * Approach 1: (Bad)
 * 
 * Since, we have to always know the greatest two numbers, we could sort after every operation.
 * 
 * Time: O(n^2(logn))
 * 
 * Approach 2: (Can be better) => Used in this program
 * 
 * Rather than sorting, we could find the first max and second max after every operation
 * 
 * Time: O(n^2)
 * 
 * Approach 3: (Good)
 * 
 * Use Max Heap to store and remove the numbers (As max heap always has the max element on the root), it's fetch is O(1)
 * 
 * And inserting / deleting will be log(n). Since we are doing for 'n' times
 * 
 * Time: O(nlogn);
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    var y = Math.max(...stones);
    stones.splice(stones.indexOf(y), 1);
    var x = Math.max(...stones);
    stones.splice(stones.indexOf(x), 1);

    if (x !== y) {
      y -= x;
      stones.push(y);
    }
  }

  return stones[0] || 0;
};
