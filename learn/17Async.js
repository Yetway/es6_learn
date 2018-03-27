// 与其他异步做比较
// 假定某个 DOM 元素上面，部署了一系列的动画，前一个动画结束，才能开始后一个。如果当中有一个动画出错，就不再往下执行，返回上一个成功执行的动画的返回值。
// Promise
function Action(elem,animations) {
    let ret=null;
    let p=Promise.resolve();
    for(let anim in animations){
        p=p.then(function (val) {
            ret =val;
            return anim(elem);
        })
    }
    return p.catch(function (e) {

    }).then(function () {
        return ret;
    })
}
// 虽然 Promise 的写法比回调函数的写法大大改进，但是一眼看上去，代码完全都是 Promise 的 API（then、catch等等），操作本身的语义反而不容易看出来。
// Generator,需要自动执行器 spawn
function atction1(elem,animations) {
    return spawn(
        function* () {
            let ret=null;
            try{
                for(let ele of animations){
                    ret =yield ele(elem);
                }
            }catch(e){

            }
            return ret;
        }
    );
}

// async
async function actions2(elem,animation) {
    let ret=null;
    try{
        for(let ele of animation){
            ret=await ele(elem);
        }
    }catch (e){

    }
    return ret;
}