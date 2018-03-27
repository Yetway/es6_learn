// defer与async的区别是：
// defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；
// async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。
// 一句话，defer是“渲染完再执行”，async是“下载完就执行”。
// 另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
// CommonJS:动态加载静态引用
// es6：静态加载动态引用

// lib.js
export let obj = {};

// main.js
import { obj } from './lib';

obj.prop = 123; // OK
obj = {}; // TypeError
// 上面代码中，main.js从lib.js输入变量obj，
// 可以对obj添加属性，
// 但是重新赋值就会报错。
// 因为变量obj指向的地址是只读的，不能重新赋值，
// 这就好比main.js创造了一个名为obj的const变量
