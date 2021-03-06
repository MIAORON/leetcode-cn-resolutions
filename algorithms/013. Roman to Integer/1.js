/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
  
   const len = s.length;
   let res = 0;
   const map = {
     "I": 1,
     "V": 5,
     "X": 10,
     "L": 50,
     "C": 100,
     "D": 500,
     "M": 1000,
   }
   /**
   * @description 此提交根据罗马数字计算规则进行。
   * 从左到右，前一位大于后一位 ，增加，反之减少。
   */
   for (let sIndex = 0; sIndex < len - 1; sIndex++) {
     if (map[s[sIndex]] < map[s[sIndex + 1]]) {
       res -= map[s[sIndex]];
     } else {
       res += map[s[sIndex]];
     }
   }  
   res += map[s[len - 1]];
   return res;
 }