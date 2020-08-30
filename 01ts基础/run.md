## 安装

```js
npm i -g typescipt

tsc --version
```

## 创建tsconfig.json

tsc --init

esModuleInterop: true  这个配置是，可以将ES6 Module和commonjs 混用，会产生一个命名空间

```js
// es6 Module 导出
export const name = 'shenjp';
export const age = '18';
export default 'bj';

// commonjs 导入
const module = require('./es6');

/* 
  导入后的结果会放到一个命名空间中
  module = {
    name: 'shenjp',
    age: 18,
    default: 'bj'
  }
 */
```

如果要使用 require 需要安装 @types/node

## 运行

1. 通过vscode 的终端，运行任务，选择typescript
2. 命令行 tsc hello.ts
3. 配置 npm script 脚本

安装 npm i -g ts-node ,就可以使用 ts-node xxx.ts 直接运行ts文件

