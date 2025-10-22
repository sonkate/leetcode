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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};

// invertTree([4, 2, 7, 1, 3, 6, 9]);
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function arrayToTree(arr) {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (current) {
            // Left child
            if (i < arr.length && arr[i] != null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;

            // Right child
            if (i < arr.length && arr[i] != null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }
    }

    return root;
}
const arr = [4, 2, 7, 1, 3, 6, 9];
const tree = invertTree(arrayToTree(arr));

console.log(JSON.stringify(tree, null, 4));
