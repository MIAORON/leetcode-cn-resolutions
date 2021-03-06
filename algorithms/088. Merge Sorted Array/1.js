/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (var i = m, j = 0; i < m + n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
};


// 这个方法应该也是可以的，本地测试通过，但是leetcode用力测试不通过，很奇怪
// var merge = function (nums1, m, nums2, n) {
//   nums1.push(...nums2);
//   nums1 = nums1.sort((a, b) => a - b).filter(function (x) {
//     return x % 2 !== 0;
//   })
// };