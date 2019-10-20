/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var exch = (idx1, idx2) => {
        if (nums[idx1] === nums[idx2]) {
            return;
        }
        let temp = nums[idx1];
        nums[idx1] = nums[idx2];
        nums[idx2] = temp;
    }
    // 双指针
    let top = 0;
    let tail = nums.length - 1;
    let i = 0;
    while(i <= tail) {
        if (nums[i] === 0) {
            exch(i, top);
            if (nums[top] === 0) {
                i++;
            }
            top++;
            continue;
        }
        if (nums[i] === 1) {
            i++;
            continue;
        }
        if (nums[i] === 2) {
            exch(i, tail);
            tail--;
            continue;
        }
        
    }
    
}; 
// @lc code=end

