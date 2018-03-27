// super关键字
// super这个关键字，既可以当作函数使用，也可以当作对象使用。
// 在这两种情况下，它的用法完全不同。

// 第一种情况，super作为函数调用时，代表父类的构造函数。
// ES6 要求，子类的构造函数必须执行一次super函数。
// super()只能用在子类的构造函数之中，用在其他地方就会报错

// 第二种情况，super作为对象时，
// 在普通方法中，指向父类的原型对象；
// 在静态方法中，指向父类。
class A{
    p(){
        return 2;
    }
}
class B extends A{
    constructor(){
        super();
        console.log(super.p());//super指向父类的原型对象
    }
}
let c= new B();

// ES6 规定，通过super调用父类的方法时，方法内部的this指向子类。
class D {
    constructor(){
        this.x=1;
        this.target=new.target;
    }
    print(){
        console.log(this.target,this.x)
    }
}
class G extends D{
    constructor(){
        super();
        this.x=5;
    }
    show(){
        super.print();
    }
}
var gd=new G();
gd.show();
// 上面代码中，super.print()虽然调用的是A.prototype.print()，
// 但是A.prototype.print()内部的this指向子类B，导致输出的是2，而不是1。
// 也就是说，实际上执行的是super.print.call(this)。


// 由于this指向子类，所以如果通过super对某个属性赋值，这时super就是this，
// 赋值的属性会变成子类实例的属性。

// 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。

class Parent{
    static myMethod(msg){
        console.log('static',msg);
    }
    myMethod(msg){
        console.log('instance',msg);
    }
}
class Child extends Parent{
    static myMethod(msg){
        super.myMethod(msg);
    }
    myMethod(msg){
        super.myMethod(msg)
    }
}
Child.myMethod('1');//静态方法直接通过类调用
var child =new Child();
child.myMethod('2');//实例调用

// 注意，使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。