// 按顺序完成异步操作
async function loginOrder(urls) {
    const textPromises=urls.map(async function (url) {
        const response=await fetch(url);
        return response.text();
    })

    for(let i in textPromises){
        console.log(await i);
    }
}
// ，虽然map方法的参数是async函数，但它是并发执行的，因为只有async函数内部是继发执行，外部不受影响。后面的for..of循环内部使用了await，因此实现了按顺序输出