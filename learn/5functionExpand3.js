// 箭头函数
var f =()=>5;
f();
console.log(f())
// 等同于var f = function () { return 5 };

var sum=(x,y)=>x+y;
console.log(sum(1,2));
// 等同于var sum = function(num1, num2) {return num1 + num2;};

// 箭头函数简化回调函数
[1,2,3].map(x=>x*x);

// 尾递归
function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(5) // 120
// 只需要知道循环可以用递归代替