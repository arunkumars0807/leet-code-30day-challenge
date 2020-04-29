/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var result = {
        max: -Infinity
    };
    
    performPathSum(root, result);
    
    return result.max;
};

var performPathSum = function(root, result) {
    if (!root) {
        return -Infinity;
    }

    var left = performPathSum(root.left, result);
    var right = performPathSum(root.right, result);
    
    var sum = root.val + left + right;
    
    var current = Math.max(root.val, left + root.val, right + root.val, sum);
    result.max = Math.max(result.max, current);
    
    return root.val + Math.max(left, right, 0);
}
