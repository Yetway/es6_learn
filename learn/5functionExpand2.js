/**
 * Created by Administrator on 2017/12/13.
 */
// 参数默认值的位置
// 通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
function f(x=1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]
f(,3);//报错
f(undefined,1)//[1,1]
// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。null则传入null

// 函数的length属性，将返回没有指定默认值的参数个数
// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2

// 作用域
let x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // 1
// 上面代码中，函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x。

// 如果此时，全局变量x不存在，就会报错。

function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // ReferenceError: x is not defined


// rest
// S6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
// arguments对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用Array.prototype.slice.call先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}
var a = [];
push(a, 1, 2, 3);
// 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

// 报错
function f(a, ...b, c) {
  // ...
}
// 函数的length属性，不包括 rest 参数。

(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1
