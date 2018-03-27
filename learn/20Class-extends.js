class Point{}
class ColorPoint extends Point{
    constructor(x,y,color){
        super(x,y);
        this.color=color;
    }
    toString(){
        return this.color+' '+super.toString();
    }
}
// 子类必须在constructor方法中调用super方法，
// 否则新建实例时会报错。
// 这是因为子类没有自己的this对象，而是继承父类的this对象，
// 然后对其进行加工。
// 如果不调用super方法，子类就得不到this对象。

// 另一个需要注意的地方是，
// er之后，才可以使用this关键字，否则会报错。
// 这是因为子类实例的构建，是基于对父类实例加工，
// 只有super方法才能返回父类实例。
class ColorPoint1 extends Point{
    constructor(x,y,color){
        this.color=color;//报错
        super(x,y);
        this.color=color;//正确
    }
}
// 子类的constructor方法没有调用super之前，就使用this关键字，
// 结果报错，而放在super方法之后就是正确的。

