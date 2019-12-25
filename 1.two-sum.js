/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // nums.sort()

  // var mid = Math.ceil(nums.length/2)
  var result = []


  var findNext = function (prenumber, list, callback) {
    list.forEach(function (item, index) {
      // console.log(item + prenumber, `${item} + ${prenumber}`);
      if (item + prenumber === target) {
        callback(index)
      }
    });
  }

  // if (nums[mid] > target) {
  //   nums.splice(0, mid)
  // } else {
  //   nums.splice(mid, -1)
  // }
  let totalI = 0
  nums.forEach(function (item, index) {
    // console.log(item, index);
    findNext(item, nums.slice(++totalI), function (cindex) {
      result = [index,cindex + totalI]
    })
  })

  return result

};
// @lc code=end

var nums = [2, 7, 11, 15], target = 9


console.log(twoSum(nums, target));

