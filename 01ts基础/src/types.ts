// 无法重新声明块范围变量“name”
// 这里申明的变量是全局的变量。所以在所有文件中不能重复
// 解决办法是，在该文件中加一个 export或者import ，将此文件变为一个模块

export {}; // 此时这个文件就变成了一个模块

let name:string = 'shenjp';
let age:number = 10;
let marry:boolean = true;

let hobbies:number[] = [1, 2, 3];
let inter:Array<string> = ['shenjp', '18'];

// 元组，类似于一个数组，长度和类型都是固定的数组
// 1. 长度固定  2. 类型可以不一样
let point:[number, string] = [10, 'shen'];

// 枚举
enum Gender {
  BOY,
  GRIL
}
console.log(`boy is ${Gender.BOY}`);
console.log(`gril is ${Gender.GRIL}`);
// 没赋初始值，那么初始值就是从0开始
/* 
  编译之后的结果就是
  Gender = {
    0: 'BOY',
    1: 'GRIL',
    BOY: 0,
    GRIL: 1
  }
 */

// 常数枚举
const enum Colors {
  Red,
  Yellow,
  Blue
};
console.log(Colors.Red, Colors.Yellow, Colors.Blue);
// 编译之后 console.log(0 /* Red */, 1 /* Yellow */, 2 /* Blue */);


// 任意类型
// 第三方库没有类型定义，类型转换的时候，数据接口太复杂 可以使用any
// let root:HTMLElement | null = document.getElementById('app'); // html元素有一套专门的类型定义
// root!.style.color = 'red'; // ! 断言root不为空

// null undefined
// null 空 undefined 未定义
// 他们都是其他类型的子类型，你可以把它赋给其他类型的变量
// 需要在 tsconfig 中，将严格模式下的 strictNullChecks 改为false
let anyname1: string = null;
let anyname2: number = null;

// void 类型 空的
function greeting(name: string):void { // 函数没有返回值，需要写一个 void
  console.log(name);
}
greeting('test')

// never 永远不
// nerver 是其他类型的子类型，代表永远不会出现
/* 
  1. 在函数内部抛出错误，导致函数无法正常结束
  2. 出现了死循环，后面的代码永远无法执行
 */
function createError(message: string):never {
  throw new Error('err');
}
function sum():never {
  while (true) {
    console.log('111')
  }
  console.log('22222');
}

// 类型推论
let num1 = 2; // 如果没有写类型。会根据赋的值自动推导类型
num1 = 3;

let num2; // 如果定义的时候没有赋值，那就是一个any类型
num2 = 1;
num2 = 'test';

// 包装对象
// 自动在基本类型和对象之间切换 （装箱，拆箱）
/* 
  1. 基本类型上没有方法
  2. 在内部迅速的完成一个装箱的操作，把基本类型迅速包装成一个对象类型，然后用对象来调用方法
 */
let name4: string = 'hello';
name4.toLocaleLowerCase(); // new String(name4);

let isOk1: boolean = true;
let isOk2: boolean = Boolean(1);
// let isOk3: boolean = new Boolean(1); // 这样返回的是一个对象，不能直接赋给基本类型

// 联合类型
let name5: string | number;
// 在没有赋值之前不能调用上面的私有方法，只有确定值的类型后才可以调用
// name5.sub()
name5 = '134';
name5.sub();

// 类型断言
let name6: string | number;
(name6 as string).toLocaleLowerCase(); // 断言成string, 只能断言定义的类型中的一种

// 字面量类型
let Gender3: 'Boy' | 'GIRL' // 是多个值的组合，赋值的时候只能赋这两个值
Gender3 = 'Boy';

/* 
  字符串字面量 vs 联合类型
  1. 字符串字面量类型是用来约束取值是某几个字符串中的一个，联合类型（Union Types）标识取值可以为多个类型中的一种
  2. 字符串字面量限制了使用该字面量的地方仅接受待定的值，联合类型对值没有限定，仅限定值的类型要保持一致
 */




