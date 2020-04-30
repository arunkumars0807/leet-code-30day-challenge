/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr, i = 0) {
    if (!root || i >= arr.length) {
        return false;
    }
    
    if (root.val !== arr[i]) {
        return false;
    }
    
    if (i === arr.length - 1) {
        return !root.left && !root.right;
    }
    
    return isValidSequence(root.left, arr, i + 1) || isValidSequence(root.right, arr, i + 1);
    
};
