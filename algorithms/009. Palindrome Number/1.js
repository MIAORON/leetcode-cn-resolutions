/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  var t = x
  x = Math.abs(x)
  var p = 0
  while (x) {
    p = p * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return t === p
}
