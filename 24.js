import { TreeNode, ArrayToTree } from './common/array/array_to_tree.js';

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    while (root) {
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    return 0;
};