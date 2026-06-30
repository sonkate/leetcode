import { arrayToTree, TreeNode } from './common/array/array_to_tree.js';

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (!root) return 0;

    const leftHeight = getSubLength(root.left);
    const rightHeight = getSubLength(root.right);

    const throughRoot = leftHeight + rightHeight;
    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    return Math.max(throughRoot, leftDiameter, rightDiameter);
};

function getSubLength(root) {
    if (!root) return 0;

    return Math.max(getSubLength(root.left), getSubLength(root.right)) + 1;
}

var diameterOfBinaryTree2 = function (root) {
    let diameter = 0;

    function height(node) {
        if (!node) return 0;

        const left = height(node.left);
        const right = height(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    }

    height(root);
    return diameter;
};

console.log(diameterOfBinaryTree(arrayToTree([1, 2, 3, 4, 5])));
