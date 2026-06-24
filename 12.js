import { arrayToTree, TreeNode } from './common/array/array_to_tree.js';

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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;
    return (
        Math.abs(getSubLength(root.left) - getSubLength(root.right)) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    );
};

var getSubLength = function (root) {
    if (!root) return 0;
    return Math.max(getSubLength(root.left), getSubLength(root.right)) + 1;
};
let root = [1,2,2,3,3,null,null,4,4]
console.log(isBalanced(arrayToTree(root)));