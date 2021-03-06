### [1002\. 查找常用字符](https://leetcode-cn.com/problems/find-common-characters/)

Difficulty: **简单**


给定仅有小写字母组成的字符串数组 `A`，返回列表中的每个字符串中都显示的全部字符（**包括重复字符**）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。

**示例 1：**

```
输入：["bella","label","roller"]
输出：["e","l","l"]
```

**示例 2：**

```
输入：["cool","lock","cook"]
输出：["c","o"]
```

**提示：**

1.  `1 <= A.length <= 100`
2.  `1 <= A[i].length <= 100`
3.  `A[i][j]` 是小写字母


#### Solution

Language: **JavaScript**

```javascript
​/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  return [...new Set(A[0])]
    .filter(ch => A.every(word => word.includes(ch))) // 1.共有的字母  ["e", "l"]
    .map(ch =>
      ch.repeat(Math.min(...A.map(x => x.match(new RegExp(ch, 'g')).length))),
    ) // 将每个共有字母映射成该字母都有最大重复次数的字符串 ["e", "ll"]
    .join('') // 'ell'
    .split('') // ['e', 'l', 'l']
}
```