## 数据类型

1. 布尔类型(boolean)

```ts
let boo1:boolean = true;
let boo2:boolean = false;
```

2. 数字类型(number)

```ts
let num:number = 10;
```

3. 字符串类型（string）

```ts
let str:string = 'hello';
```

4. 数组类型(array)

```ts
let arr1:number[] = [1, 2, 3, 4];
let arr2:Array<number> = [1, 3, 2, 3];
```

5. 元组类型（tuple）

在ts中的基础数据类型中，元组（Tuple）表示一个已知 数量 和 类型 的数组

```ts
let tup1:[string, number] = ['hello', 19];

```

6. 枚举类型

事先考虑某一个变量的所有的可能值，尽可能用自然语言中的单词标识它的每一个值

比如：月份，星期，颜色，单位，学历等

- 普通枚举

```ts
enum Gender {
  GRIL,
  BOY
};

console.log(`gril is ${Gender.GRIL}`);
console.log(`boy is ${Gender.BOY}`);

enum Work {
  MONDAY = 1,
  TUESDAY = 2
};

/* 
  编译之后的结果就是
  Gender = {
    0: 'BOY',
    1: 'GRIL',
    BOY: 0,
    GRIL: 1
  }
 */

```

- 常数枚举

```ts
const enum Colors {
  Red,
  Yellow,
  Blue
};
console.log(Colors.Red, Colors.Yellow, Colors.Blue);
// 编译之后 console.log(0 /* Red */, 1 /* Yellow */, 2 /* Blue */);
// 编译之后会把定义优化掉，因为常数定义的永远不会更改
```

7. 任意类型（any）

> 第三方库没有类型定义，类型转换的时候，数据接口太复杂 可以使用any

```ts
let str:any = 123;
str = 'test'
```

8. null undefined

> 他们都是其他类型的子类型，你可以把它赋给其他类型的变量
> 需要在 tsconfig 中，将严格模式下的 strictNullChecks 改为false

```ts
let anyname1: string = null;
let anyname2: number = null;
```

9. 空类型（void）

```ts
function greeting(name: string):void { // 函数没有返回值，需要写一个 void
  console.log(name);
}
greeting('test')
```

10. 永远不（never）

  - 在函数内部抛出错误，导致函数无法正常结束
  - 出现了死循环，后面的代码永远无法执行

```ts
function createError(message: string):never {
  throw new Error('err');
}

function sum():never {
  while (true) {
    console.log('111')
  }
  console.log('22222');
}
```

11. 类型的推论

```ts
let num1 = 2; // 如果没有写类型。会根据赋的值自动推导类型
num1 = 3;

let num2; // 如果定义的时候没有赋值，那就是一个any类型
num2 = 1;
num2 = 'test';
```

12. 包装对象

> 自动在基本类型和对象之间切换 （装箱，拆箱）

  - 基本类型上没有方法
  - 在内部迅速的完成一个装箱的操作，把基本类型迅速包装成一个对象类型，然后用对象来调用方法

```ts
let name4: string = 'hello';
name4.toLocaleLowerCase(); // new String(name4);

let isOk1: boolean = true;
let isOk2: boolean = Boolean(1);
// let isOk3: boolean = new Boolean(1); // 这样返回的是一个对象，不能直接赋给基本类型
```

13. 联合类型

```ts
let name5: string | number;
// 在没有赋值之前不能调用上面的私有方法，只有确定值的类型后才可以调用
// name5.sub()
name5 = '134';
name5.sub();
```

14. 字面量类型

```ts
let Gender3: 'Boy' | 'GIRL' // 是多个值的组合，赋值的时候只能赋这两个值
Gender3 = 'Boy';
```

字符串字面量 vs 联合类型

  - 字符串字面量类型是用来约束取值是某几个字符串中的一个，联合类型（Union Types）标识取值可以为多个类型中的一种
  - 字符串字面量限制了使用该字面量的地方仅接受待定的值，联合类型对值没有限定，仅限定值的类型要保持一致

15. 类型断言

```js
let name6: string | number;
(name6 as string).toLocaleLowerCase(); // 断言成string, 只能断言定义的类型中的一种
```




