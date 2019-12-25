/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = ''

  if (strs.length <= 1) return strs[0] || ''

  var compare = function (cur='', next='') {
    let result = ''

    if (!next) return ''

    for (let index = 0; index < cur.length; index++) {
      const curStr = cur[index];
      const nextStr = next[index]

      if (curStr === nextStr) {
        result += curStr
      } else {
        return result
      }
    }
    return result
  }

  result = compare(strs[0], strs[1])

  if (result === '') return ''

  for (let index = 2; index < strs.length; index++) {
    const str = strs[index]

    const cc = compare(result, str)

    if (!(result = cc)) return ''
  }  
  return result
};
// @lc code=end
// ["flower","flow","flight"]
// console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["abab","aba",""]));