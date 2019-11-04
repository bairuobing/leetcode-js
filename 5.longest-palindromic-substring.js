/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
      return s;
    }
    let originLen = s.length;

    let help = function(pre, next) {
        
        for (let p = pre,n = next; p >= 0 && n <=originLen - 1; p--,n++) {
            if (s[p] !== s[n]) {return;}
            if (s[p] === s[n]) {
                let curLen = n - p + 1;
                if (curLen > resLen) {
                    resLen = curLen;
                    res = s.substr(p,curLen);
                }
            }
        }
    }
    
    let resLen = 0;
    let res = s[0];
    for(let i = 0; i <= originLen - 2; i++) {
        if (s[i] === s[i+1]) {
            help(i, i + 1);
        }
        if (i <= originLen - 3 && s[i] === s[i + 2]) {
            help(i, i + 2);
        }
    }
    return res;

};
// @lc code=end
