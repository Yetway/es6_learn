// import {stat,exists,readFile} from 'fs';模块导入
// 模块功能主要由两个命令构成：export和import。
// export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
// export 导出的写法
export var m=1;
var n=2;
export {n};
var k=3;
export {k as kname};
// 正确
export function f() {};

// 正确
function f() {}
export {f};

// import
import {m,n,s} from '23Module'
// 建议输入的变量全部为已读不要轻易修改他的属性
// import命令具有提升效果


// 模块的整体加载
export function area(radius) {
    return Math.PI=radius*radius;
}
export function cirum(radius) {
    return 2*Math.PI*radius;
}

import {area,cirum} from '23Module';
import * as circle from '23Module';

console.log(area(3));
console.log(circle.area(4));
// 注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。


// export default 默认的输出 有且只有一个default，import时不需要加｛｝ 可以用匿名函数代替

export default function foo(){
    console.log('foo');
}
import emr from '23Module';
comsole.log(emr());

function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;

// app.js
import { default as foo } from 'modules';

// export 和 import的复写
export {add, foo} from '23Module';
// 等于
import {add,foo} from '23Module';
export {add,foo};

// 跨模块常量
export const A=1;
import * as consts from '23Module';
import {A} from '23Module';