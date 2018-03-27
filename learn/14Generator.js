// Generator 函数是一个普通函数，但是有两个特征。
// 一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

// 执行 Generator 函数会返回一个遍历器对象，也就是说
// ，Generator 函数除了状态机，还是一个遍历器对象生成函数。
// 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
// function* foo(x, y) { ··· }
// 只有调用next()，foo才执行
// yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
var arr=[1,[[2,3],4],[5,6]];
var flat=function* (a) {
    var length=a.length;
    for(var i of a){
        var item=i;
        if(typeof item!=='number'){
            yield* arguments.callee(item);
        }else{
            yield item;
        }
    }
}
for(var f of flat(arr)){
    console.log(f);
}
//不包含6
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
// 上面代码使用for...of循环，依次显示 5 个yield表达式的值。
// 这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，
// 所以上面代码的return语句返回的6，不包括在for...of循环之中。


// Generator 函数的this
function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
var f = F.call(F.prototype);//绑定

f.next();  // Object {value: 2, done: false}
f.next();  // Object {value: 3, done: false}
f.next();  // Object {value: undefined, done: true}

f.a // 1
f.b // 2
f.c // 3

// 斐波那契数列
function* fibonacci(){
    let [pre,cur]=[0,1];
    for(;;){
        [pre,cur]=[cur,pre+cur];
        yield cur;
    }
}
for(let n of fibonacci()){
    if(n>1000)break;
    console.log(n);
}

// yield* 在generator函数里面执行另一个generator函数

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The Result';
}
function* logReturned(obj) {
    let result=yield* obj;
    console.log(result);
}
var arrResult=[...logReturned(genFuncWithReturn())]
console.log(arrResult);