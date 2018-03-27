// let
for(let i=0;i<10;i++){

}
console.log(i);//undefined
for(var i=0;i<10;i++){

}
console.log(i);//10

//var存在变量声明提前，let不存在变量声明提前 它所声明的变量一定要在声明之后使用
console.log(a);//undefined
var a=0;

// console.log(b);//报错
// let b=1;

//暂时性死区
//ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
// var tmp=123;
// if(true){
//     tmp='abc';//报错
//     let tmp;
// }


//let不允许在相同的作用域内重复声明同一变量

// const 命令
// 声明一个只读的常量，一旦声明不再改变
// 不可重复
// 具有快级作用域
const foo={}
foo.pro=123;
foo.pro;
// 常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。


// 冻结对象Object.freeze({})
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, i) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};

// ES6 声明变量的六种方法
// ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。