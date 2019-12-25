/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var result = []

  while (l1 && l2) {
    if (l1.val < l2.val) {
      (l1.val != null) && result.push(new ListNode(l1.val))
      l1 = l1.next
    } else {
      (l2.val != null) && result.push(new ListNode(l2.val))
      l2 = l2.next
    }
  }

  if (l1 && l1.val != null) {
    result = result.concat(l1)
  } else if (l2 && l2.val != null) {
    result = result.concat(l2)
  }

  let rl = result.shift() || ''

  result.reduce(function (pre, cur) {
    pre.next = cur
    return cur
  }, rl)

  return rl

};
// @lc code=end

function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.toString = function () {
  return `${val}->`
}


const ll = [new ListNode(1),new ListNode(2),new ListNode(4)]
const l1 = ll.shift()
ll.reduce(function (pre, c) {
  pre.next = c
  return c
},l1)


const lll = [new ListNode(1),new ListNode(3),new ListNode(4)]
const l2 = lll.shift()
lll.reduce(function (pre, c) {
  pre.next = c
  return c
},l2)


const re = mergeTwoLists(new ListNode(), new ListNode())
console.log(re);
