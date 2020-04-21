/**
 * Leftmost Column with at Least a One
 *
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  var [m, n] = binaryMatrix.dimensions();
  var map = {
    min: Infinity,
  };
  getLeftMostOne(map, binaryMatrix, 0, m, n, 0, n);
  return map.min === Infinity ? -1 : map.min;
};

var getLeftMostOne = function (map, b, i, m, n, start, end) {
  if (start > end) {
    return false;
  }

  if (i >= m || map.min === 0) {
    return true;
  }

  var mid = Math.trunc((start + end) / 2);

  var value = b.get(i, mid);

  if (value === 1) {
    var check = b.get(i, mid - 1);
    map.min = Math.min(map.min, mid);
    if (check !== 0) {
      getLeftMostOne(
        map,
        b,
        i,
        m,
        n,
        start,
        map.min === Infinity ? mid - 1 : map.min
      );
    } else {
      getLeftMostOne(map, b, i + 1, m, n, 0, mid - 1);
    }
  } else {
    const flag = getLeftMostOne(
      map,
      b,
      i,
      m,
      n,
      mid + 1,
      map.min === Infinity ? end : map.min
    );
    if (flag === false) {
      getLeftMostOne(
        map,
        b,
        i + 1,
        m,
        n,
        0,
        map.min === Infinity ? mid - 1 : map.min
      );
    }
  }
};
