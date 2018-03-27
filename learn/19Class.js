// class
// 定义类

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
//
// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// };
//
// var p = new Point(1, 2);

// es6
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }//默认方法
    toString(){
        return '('+this.x+','+this.y+')';
    }
}
var p=new Point(1,2);
console.log(p.toString())
// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
// Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

// Class的表达式
const MyClass=class Me{
    getClassName(){
        return Me.name;
    }
}
// MyClass为类名 Me只在Class的内部代码使用，指代当前类

let person=new class{
    constructor(name){
        this.name=name;
    }
    sayName(){
        console.log(this.name);
    }
}('yetian')
person.sayName();//person为立即执行类

// class类不存在变量提升，函数声明提前 函数表达式不提前

// Class 的静态方法
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
// 父类的静态方法，可以被子类继承
// 静态方法也是可以从super对象上调用的。
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
// foo.classMethod()
// TypeError: foo.classMethod is not a function

// new.target 属性
// new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
class Rectangle{
    constructor(length,width){
        console.log(new.target===Rectangle);
        this.length=length;
        this.width=width;
    }
}
class Square extends Rectangle{
    constructor(length){
        super(length,length);//调用父类的width length
        console.log(new.target);
    }
}
var obj=new Rectangle(2,3);
var sth=new Square(2,3)