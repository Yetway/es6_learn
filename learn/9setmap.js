// Set类似于数组 但成员的值是唯一的没有重复的值
const s=new Set();
let arr=[2,3,4,5,6,6,7,8,7,9];
arr.forEach(x=>s.add(x))
console.log(s)
//通过add方法向Set()结构加入成员，Set函数可以接受一个数组作为参数
console.log([...s]);//用扩展字符转为真正的数组

// 数组去重
const set=new Set(arr)//去重数组的方法
console.log(set)
// Set 结构的实例有以下属性。
//
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。
// Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
//
// add(value)：添加某个值，返回 Set 结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。
let s1=Array.from(s)//将s转换为数组
console.log(s1)
// 遍历操作
// Set 结构的实例有四个遍历方法，可以用于遍历成员。
//
// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员
//Set的键名和键值是一个值所以set.keys()和set.values()是一样的
// 数组的map和filter也同样适用于set
// WeakSet与Set结构类似，但是成员只能是对象，没有size没办法遍历
const a=[[1,2],[3,4]];
const aw=new WeakSet(a);
console.log(aw);
// const b=[1,2];
// const bw=new WeakSet(b);
// console.log(bw);报错
// Map
// javascript的Object，本质上是键值对的集合，但只能用字符串做键
// Map数据结构，各种类型的值都可以当作键
//所以Map比Object更适合键值对的数据结构
const m=new Map();
const o={p:'hello'};
m.set(o,'yet');
console.log(o);
let ss=m.get(o);
console.log(ss);
//不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数。这就是说，Set和Map都可以用来生成新的 Map。
const mm = new Map();

const hello = function() {console.log('hello');};
mm.set(hello, 'Hello ES6!') ;// 键是函数
mm.get(hello) ; // Hello ES6!
mm.has(hello);//
mm.delete();
mm.clear();
// keys()：返回键名的遍历器。
// values()：返回键值的遍历器。
// entries()：返回所有成员的遍历器。
// forEach()：遍历 Map 的所有成员
// WeakMap与Map的区别有两点。

// 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。