// Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。


// （1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

// （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

// Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
// const promise = new Promise(function(resolve, reject) {
//   // ... some code
//
//   if (/* 异步操作成功 */){
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });
function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done');
    });
}

timeout(100).then((value)=>{console.log(value)})
// timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。

let promise=new Promise((resolve,reject)=>{
    console.log('promise');
    resolve();
})

promise.then(()=>{
    console.log('yetway');
})

console.log('yt');

//Promise是创建之后就立即执行，then方法指定的回调函数将在当前脚本所有同步任务执行完后才会执行


// Promise实现ajax
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});

// 抓住错误
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });

// 类似于try catch

// Promise会吃掉错误
someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123


// 一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。


// finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

promise
.then(result => {})
.catch(error => {})
.finally(() => {});
// 上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。

// 下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。

server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
// finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

// Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});
// promises是包含 6 个 Promise 实例的数组，只有这 6 个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数


// Promise.prototype.finally()
// finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作.
promise
.then(result => {})
.catch(error => {})
.finally(() => {});


// 不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。
// Promise.try()
Promise.try(database.users.get({id: userId}))
  .then()
  .catch()