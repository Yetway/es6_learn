// 变量的解构赋值

// 数组的解构赋值,等号右边不是数组将会报错
// let a=1;
// let b=2;
// let c=3;
// 可以写成
let [a,b,c]=[1,2,3];
//一一对应
let [x,,y]=[2,3,4];
console.log(x,y);//2,4

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);// 5

// 解构赋值允许默认值
let [m,n='b']=['a'];
console.log(m,n);//a,b


// 对象的解构赋值
// 数组是按次序排列，变量的取值由位置决定，对象的属性没有次序，变量必须与属性同名才能取到正确的值
let {bar,foo}={foo:'123',bar:'234'}
console.log(bar,foo)//234,123


let arr=[1,2,3];
let {0:firsts,[arr.length-1]:last}=arr;
console.log(firsts,last);//1,3

//字符串的解构赋值，字符串会被转换成类似与数组的对象
const [a1,b1,c1,d,e,f,g]='hello';
console.log(a1,b1,c1,d,e,f,g)//h,e,l,l,o,undefined,undefined
let {length:len}='hello';//类似于数组有一个length属性
console.log(len);//5

// 数值和布尔值的解构赋值
// 等号右边是数值和布尔值都会先转化为对象
// undefined和null无法转化为对象，所以解构赋值时会报错
let {toString:S}=true;
console.log(S);


// 函数参数的解构赋值
console.log([1,undefined,3].map((x='yes')=>x));
//[1,'yes',3]
function move({x = 0, y = 0} = {}) {
    return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

// 用途
// 交换值
// [x,y]=[y,x]

// 从函数返回多个值

function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example();
// 提取json数据
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);

// 遍历map结构

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// first is hello
// second is world
// 如果只想获取键名，或者只想获取键值，可以写成下面这样。

// 获取键名
for (let [key] of map) {
    // ...
}

// 获取键值
for (let [,value] of map) {
    // ...
}
