/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
      return [];
    }
    const BAFFLE = 'BAFFLE';
    var result = [];
    var queue = [];
    queue.push(root);
    queue.push(BAFFLE);
    
    var temp = [];
    for (var i = 0; queue.length>1; i++) {
      // 队首元素
      var top = queue[0];
      // 是否为一层末尾
      if (top === BAFFLE) {
        return;
      }
      // 左孩子入队
      if (top.left) {
        queue.push(top.left);
      }
      // 右孩子入队
      if (top.right) {
        queue.push(top.right);
      }
      // 该元素出队并放入本层数组
      temp.push(queue.shift().val);
      // 若本层结束
      if (queue[0] === BAFFLE) {
        // 把层末标志（挡板）至于队末
        queue.push(queue.shift());
        
        result.push(temp);
        temp=[];
      }
    }
    return result;
  };