/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  return onRob(nums, len - 1);
  
  // 可以在 前 n 个房子获得的钱数
  function onRob(nums, index) {
    if (index < 0) {
      return 0;
    }
    return Math.max(onRob(nums, index - 2) + nums[index], onRob(nums, index - 1));
  }
};

rob([2,7,9,3,1]);
