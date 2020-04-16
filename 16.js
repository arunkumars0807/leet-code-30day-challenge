/***
 * Valid Parenthesis String
 *
 * Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules
 * 
 * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * 
 * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
 * An empty string is also valid.
 * 
 * Example 1:
 * 
 * Input: "()"
 * Output: True
 * 
 * Example 2:
 * 
 * Input: "(*)"
 * Output: True
 * 
 * Example 3:
 * 
 * Input: "(*))"
 * Output: True
 * 
 * Approach:
 * 
 * Here, we will do 2 pass. One from i = 0, and one from i = s.length - 1
 * 
 * Each time we will consider '*' as '(' or ')' and keep track of the counter.
 * 
 * If the counter fails anywhere in the middle, we return false
 * Else, we return true at the end.
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  var counter = 0;

  for (var i = 0; i < s.length; ++i) {
    var c = s[i];

    if (c === '(' || c === '*') {
      ++counter;
    } else if (c === ')') {
      if (counter <= 0) {
        return false;
      }
      --counter;
    }
  }

  counter = 0;

  for (var i = s.length - 1; i >= 0; --i) {
    var c = s[i];

    if (c === ')' || c === '*') {
      ++counter;
    } else if (c === '(') {
      if (counter <= 0) {
        return false;
      }
      --counter;
    }
  }

  return true;
};
