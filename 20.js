/***
 * Construct Binary Search Tree from Preorder Traversal
 *
 * Return the root node of a binary search tree that matches the given preorder traversal.
 * 
 * (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)
 * 
 * Example 1:
 * 
 * Input: [8,5,1,7,10,12]
 * 
 * Output: [8,5,10,1,7,null,12]
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  var obj = { index: 0 };
  return createBSTUtil(
    preorder,
    preorder.length,
    -Infinity,
    Infinity,
    preorder[0],
    obj
  );
};

var createBSTUtil = function (arr, n, min, max, nodeVal, map) {
  if (map.index >= n) {
    return null;
  }

  var root = null;

  if (nodeVal > min && nodeVal < max) {
    root = new TreeNode(nodeVal);
    ++map.index;

    if (map.index < n) {
      root.left = createBSTUtil(arr, n, min, nodeVal, arr[map.index], map);
      root.right = createBSTUtil(arr, n, nodeVal, max, arr[map.index], map);
    }
  }

  return root;
};
