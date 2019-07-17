/*
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-17 16:15:19
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-17 16:15:21
 */
var subdomainVisits = function (cpdomains) {
  return [...cpdomains
      .map(x => x.split(' '))// 将原始一维数组转化为数量域名的二维数组 [[9001 , discuss.leetcode.com]]
      .reduce((map, arrs) => {// 聚合统计迭代遍历每一个域名和次数
          const times = +arrs[0];//当前域名的访问次数  900 
          const domains = arrs[1].split('.'); //当前域名 "discuss.leetcode.com"
          while (domains.length > 0) {
              const domain = domains.join('.');
              map.set(domain, (map.get(domain) || 0) + times);
              domains.shift();// 移除最低级域名前缀
          }
          return map;// 用map统计域名次数
      }, new Map())]//将map转化成二维数组
      .map(item => item[1] + ' ' + item[0])// 二维数组映射成一维数组

};