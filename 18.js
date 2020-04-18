/***
 * Minimum Path Sum
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 *
 * Input:
 *
 * [
 *  [1,3,1],
 *  [1,5,1],
 *  [4,2,1]
 * ]
 *
 * Output: 7
 *
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var row = grid.length;
  var col = grid[0].length;
  for (var i = 1; i < row; ++i) {
    grid[i][0] += grid[i - 1][0];
  }
  for (var i = 1; i < col; ++i) {
    grid[0][i] += grid[0][i - 1];
  }

  for (var i = 1; i < row; ++i) {
    for (var j = 1; j < col; ++j) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[row - 1][col - 1];
};
