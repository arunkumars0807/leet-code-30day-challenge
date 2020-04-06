/***
 * Group Anagrams
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 *  ["ate","eat","tea"],
 *  ["nat","tan"],
 *  ["bat"]
 * ]
 *
 * Note:
 *
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * 
 * Appraches:
 * 
 * 1. Using hashcode,
 * We can generate hashcodes for each characters, store them as key O(m * n) time
 * 
 * 2. Using sorting,
 * We can sort the words and store them as keys O(n * mlogm) time
 * 
 * This code below uses the [2] (Sorting method)
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = {};
  for (var i = 0; i < strs.length; ++i) {
    var word = strs[i];
    var sorted = word.split('').sort().join('');
    if (map[sorted] === undefined) {
      map[sorted] = [];
    }
    map[sorted].push(word);
  }
  var result = [];
  for (var i in map) {
    if (map.hasOwnProperty(i)) {
      result.push(map[i]);
    }
  }
  return result;
};
