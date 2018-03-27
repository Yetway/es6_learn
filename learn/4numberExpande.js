// ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。

// Number.isFinite()用来检查一个数值是否为有限的（finite）。

// Math对象的扩展
// Math.trunc() 去除一个数的小数部分。返回整数部分
let a=Math.trunc(4.1);
console.log(a);
//Math.sign()判断正负0
// 它会返回五种值。
// 参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为 0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
Math.cbrt()//立方根
Math.hypot()//平方和的平方根