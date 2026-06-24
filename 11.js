import { arrayToTree, TreeNode } from "./common/array/array_to_tree.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
};

let tree = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(tree, new TreeNode(0), new TreeNode(5)));

// Search path solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor2 = function (root, p, q) {
    let pathP = [];
    let pathQ = [];

    const findPath = (node, target, path) => {
        if (!node) return false;

        path.push(node);

        if (node.val === target.val) {
            return true;
        }

        if (findPath(node.left, target, path) || findPath(node.right, target, path)) {
            return true;
        }

        path.pop();
        return false;
    };

    findPath(root, p, pathP);
    findPath(root, q, pathQ);

    let lca = null;
    for (let i = 0; i < Math.min(pathP.length, pathQ.length); i++) {
        if (pathP[i].val === pathQ[i].val) {
            lca = pathP[i];
        } else {
            break;
        }
    }

    return lca;
};

console.log(lowestCommonAncestor2(tree, new TreeNode(0), new TreeNode(5)));