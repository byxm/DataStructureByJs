/*
 * @Describtion: 
 * @Date: 2019-12-14 20:26:37
 * @LastEditTime: 2019-12-14 20:54:04
 */


 /**
  * @description: 求解阶乘递归
  */ 
 function fac(num: number) {
    if(num === 1) {
        return 1;
    }
    return num * fac(num - 1);
 }

 console.log(fac(10));


 /**
  * @description: 递归求和
  */ 
 function sum(num: Array<number>, len: number = 0) {
    if(num.length === len) {
        return 0;
    }
    return num[len] + sum(num, len + 1);
 }

 console.log(sum([1,2,3,5]));