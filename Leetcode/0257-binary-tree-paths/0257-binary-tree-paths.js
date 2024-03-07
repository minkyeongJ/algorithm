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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];

    function findRoot(node, currPath){
        if(node){
            currPath.push(node.val);
            if(node.left === null && node.right === null){
                paths.push([...currPath]);
            }
            findRoot(node.left, [...currPath]);
            findRoot(node.right, [...currPath]);
        }
    }

    findRoot(root, []);
    let answer = paths.map(path => path.join('->'));
    return answer;
};