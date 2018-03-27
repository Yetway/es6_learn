// prototype _proto_
// 每一个对象都有__proto__属性，
// 指向对应的构造函数的prototype属性。
// Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，
// 因此同时存在两条继承链

// （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

// （2）子类prototype属性的__proto__属性，表示方法的继承，
// 总是指向父类的prototype属性。
class A{}
class B extends  A{

}
B.__proto__===A;
B.prototype.__proto__===A.prototype


// extends 的继承目标
// class B extends A{}三种特殊情况
class A extends Object{
    //继承Object类
}
A.__proto__===Object;
A.prototype.__proto__===Object.prototype;

class A{

}
A.__proto__===Function.prototype;
A.prototype.__proto__===Object.prototype;

class A extends null{}
A.__proto__===Function.prototype;
A.prototype.__proto__===undefined;

// 实例__proto__属性
var p1=new Point(2,3);
var p2=new ColorPoint(2,3,'red');
p2.__proto__===p1;
p2.__proto__.__proto__===p1.__proto__;
// 通过子类实例的__proto__.__proto__属性，可以修改父类实例的行为