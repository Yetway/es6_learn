// 字符串遍历接口
// for...of
for(let i of 'hello'){
    console.log(i);
}
//可以识别大于0xffff的码点，传统的for循环无法识别
// at()
// 类似于charAt()，返回给定字符串位置的字符


// includes(),startsWith(),endsWith()
//includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
//同indexOf()均支持第二个参数 从哪个位置开始
let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true，第二个参数针对前n个字符
s.includes('Hello', 6) // false

//repeat，返回一个新的字符串，表示将原字符重复n次

console.log('x'.repeat(3))//'xxx'
//参数为infinite和负数会报错，但在0~-1之间等同于0要先做取整运算

// padStart()字符串头部补全
// padEnd()字符串尾部补全
//接受两个参数，一个为指定字符串最小长度，一个是用来补全字符串
// 若原字符串大于或等于最小长度，则返回原来字符串
// 'x'.padStart(5, 'ab') // 'ababx'
// 'x'.padStart(4, 'ab') // 'abax'
// 'x'.padEnd(5, 'ab') // 'xabab'
// 'x'.padEnd(4, 'ab') // 'xaba'
// 'xxx'.padStart(2, 'ab') // 'xxx'
// 'xxx'.padEnd(2, 'ab') // 'xxx'
// 若省略第二个参数，则自动补全空格



// 模版字符串
// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
let [name,time]=['Bob','today'];
console.log(name,time);
let strings=`hello,${name}!how are you ${time}`;
console.log(strings)
//能调用函数
function fn() {
    return "Hello World";
}
`foo ${fn()} bar`
// foo Hello World bar