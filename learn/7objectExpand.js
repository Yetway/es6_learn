/**
 * Created by Administrator on 2017/12/14.
 */
// Object.is();
Object.is('foo','foo');//true
Object.is(NaN,NaN);//true
Object.is(+0,-0);//false

// Object.assign();// 对象合并
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
//不是对象的转换为对象合并
// undefined null无法转换为对象，但当出现多个参数是，只要不在首参数也不会报错
// Object.setPrototypeOf()//设置对象的prototype对象
let proro={};
let obj={x:10};
Object.setPrototypeOf(obj,proro);
proro.z=10;
proro.y=3;
console.log(obj.y);//3

// Object.getPrototypeOf()//获取对象原型

// super关键字 指向当前对象的原型对象
const proto={
    foo:'yet'
};
const obj={
    find(){
        return super.foo;
    }
}
Object.setPrototypeOf(obj,proto);
obj.find();//'yet'

const proto={
    x:'yet',
    foo(){
        console.log(this.x);
    }
}
const obj={
    x:'yh',
    foo(){
        super.foo();
    }
}
Object.setPrototypeOf(obj,proto);
obj.foo();//'yh' super指的是当前原型对象 this指的是当前绑定的对象