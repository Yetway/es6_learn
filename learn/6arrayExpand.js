/**
 * Created by Administrator on 2017/12/13.
 */
// 扩展运算符是三个点...
//可以将一个数组转为用都好分隔的参数序列
function f(x,y,z) {
    return x+y+z;
}
arg=[1,2,3];
t=f(...arg);
console.log(t);
//提供了数组合并的新方法

// ES5的合并数组
// arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
// [...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

// 任何 Iterator 接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。

// let nodeList = document.querySelectorAll('div');
// let array = [...nodeList];

//Array.from()
// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

//还可接受第二个参数 作用类似于数组的map，用来对每个元素进行处理

a=[1,2,3];
p=Array.from(a,x=>x*x);
console.log(p)

//Array.of()用于将一组值转换为数组
Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]

// copyWithin()将指定位置的成员复制到其他位置
// 接受三个参数：从哪儿开始替换，替换的数据开头（0），替换数据的结尾（array.length）
arrr=[1,2,3,4];
p=arrr.copyWithin(1,2);
console.log(p);//[1,3,4,4];

// 数组实例的find()和findIndex()
// 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
//findIndex()返回第一个符合条件的位置
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

// fill()
// 填充数组
