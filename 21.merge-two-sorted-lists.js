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
  let last = {}
  let result = last

  // if (!(l1 || l2)) return ''

  l1 = l1 || {}
  l2 = l2 || {}

  if (!(l1.val != null || l2.val != null )) return ''

  while (l1 && l1.val != null) {
    if (l2 != null && (l1.val > l2.val)) {
      last.next = l2
      l2 = l2.next
    } else {
      last.next = l1
      l1 = l1.next
    }
    last.next && (last = last.next)
  }
  
  if (l2 && (l2.val != null || l2.next))  {
    last.next = l2
  }

  return result.next

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


const re = mergeTwoLists(new ListNode(), new ListNode(0))
console.log(re);
