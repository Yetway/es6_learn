// es2017引入async,使得异步操作更加方便
// 一比较就会发现，async函数就是将
// Generator 函数的星号（*）替换成async，
// 将yield替换成await，仅此而已
// （1）内置执行器。

// Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。

// asyncReadFile();
// 上面的代码调用了asyncReadFile函数，然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。

// （2）更好的语义。

// async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

// （3）更广的适用性。

// co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

// （4）返回值是 Promise。

// async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

// ，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而awai进一步说t命令就是内部then命令的语法糖。
// async function getStockPriceByName(name) {
//     const symbol=await getStockSymbol(name);
//     const stockPrice=await getStockPrice(symbol);
//     return stockPrice
// }
// getStockPriceByName('good').then(function (result) {
//     console.log(result)
// })

function timeout(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve,ms);
    });
}
async function asyncPrint(value,ms){
    await timeout(ms);
    await console.log('234');
    console.log(value);
}
asyncPrint('hello world',50);

// 语法
// 返回Pormise对象
async function f() {
    return 'hello yt';
}
f().then(v=>console.log(v));
//return返回的值为then中传入的参数v

// async 函数返回的Promise对象，必须等到内部所有的await命令后面的Promise对象执行完，才会发生状态改变
//除非遇到return或者是报错
//也就是只有async内部的异步操作执行完，才会执行then方法指定的回调函数

// async function getTitle(url) {
//     let response=await fetch(url)
//     let html= await response.text()
//     return html.match(/<title>([\s\S]+)<\/title>/i);
// }
// getTitle('http://tc39.github.io/ecma262/').then(console.log('yes'))
//  await 命令

// 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
// 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。
// 这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，
// 第二个await都会执行。
async function f() {
    try {
        await Promise.reject('出错了');
    }catch(e) {
    }
    return await Promise.resolve('hello yt world');
}
f().then(v=>console.log(v));

// 使用注意点
// 第一点，前面已经说过，await命令后面的Promise对象，
// 运行结果可能是rejected，
// 所以最好把await命令放在try...catch代码块中。
// 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
// 写法一
// let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
// let fooPromise = getFoo();
// let barPromise = getBar();
// let foo = await fooPromise;
// let bar = await barPromise;

// 第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。