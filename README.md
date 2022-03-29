# node

## [大纲](https://wang1xiang.github.io/node-tutorial/readme.html)

## 是什么

- chrome V8 runtime
- 事件驱动
- 非阻塞的 i/o(正常情况 i/o 都是阻塞的，比如网络请求、数据库处理、文件的读写)
- 优点：高并发特别好

### js 运行环境

- 浏览器
  - 基本语法
  - BOM
  - DOM
  - ajax
  - 系统文件、数据库(不能、处于安全性考虑)
- 服务器
  - 基本语法
  - 能操作数据库
  - 能操作本地文件

限制语言能力的不是语言本身，而是语言的运行环境

### node 运行环境

- REPL(在命令行直接写代码)

### 模块化

- 内置模块
  - 文件操作 fs
  - url
- 第三方模块
  - 邮箱验证码案例(nodemailer 可以实现发邮件)
- 自定义模块
  - 创建模块(一个 js 文件就是一个模块)
  - 导出模块(module.export = xxx)
  - 引用模块(require(''))

#### 打印当前目录的目录树

#### 爬虫案例

> 1.获取目标网站 http.get<br> 2.分析网站内容 cheerio 可以使用 jq 里的选择器<br> 3.获取有效信息 下载或其他操作

#### javascript 事件驱动机制：单线程（带来阻塞问题）

> 异步编程机制：<br> 1.只在主线程上运行 javascript 代码<br> 2.主线程启动就进入事件循环，整个过程不断循环，不断执行回调函数<br> 3.遇到网络请求、i/o 操作时，浏览器会单开工作线程来处理，并设置观察者，然后立即返回主线程，主线程继续执行下面的任务<br> 4.浏览器开的线程处理好任务或者有监听的事件后会用得到的数据形成一个事件，放在相应观察者的事件队列中，事件队列是在主线程中的<br> 5.主线程不断地循环，不断检查事件队列，通过遍历事件一次执行事件对应的回调函数<br>
> [参考](https://www.jianshu.com/p/3115def9e1fe)

#### node 上运行的 javascript 相比后端开发语言优势

- 最大优势：借助 javascript 事件驱动机制加 v8 高性能引擎，编写高性能 web 服务
  其次：javascipt 本身是完善的函数式语言，前端比较随意，但在 node 环境中，通过模块化的 javascript 代码，加上函数时编程，并且无需考虑浏览器兼容性问题。

#### node 环境安装

- 从[Node.js 官网](https://nodejs.org/en/)下载对应的安装程序，安装时选择全部组件，包括勾选 Add to Path
- 安装完成 cmd 中输入 node -v，在此输入 node 即可进入 node.js 的交互环境，退出两次 ctrl+c
- 安装 supervisor cnpm i supervisor -g 启动 supervisor xxx.js

#### 第一个 node 程序

- 第一行总是写上'use strict'，使用严格模式运行 javasctipt 代码，避免各种潜在陷阱（每个文件写'use strice'会很麻烦，可以给 nodejs 传递一个参数，让 node 直接为所有 js 文件开启严格模式）

```js
node --use_strice ***
```

- 运行 node \*\*\*.js，文件名称必须式英文字母、数字和下划线组合
- 开发环境 vs code，打开文件点击左侧调试，配置 launch.json 文件

```js

    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run hello.js",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/hello.js",
            "stopOnEntry": false,
            "args": [],
            "cwd": "${workspaceRoot}",
            "preLaunchTask": null,
            "runtimeExecutable": null,
            "runtimeArgs": [
                "--nolazy"
            ],
            "env": {
                "NODE_ENV": "development"
            },
            "externalConsole": false,
            "sourceMaps": false,
            "outDir": null
        }
    ]
}
```

#### 模块

- nodejs 中一个.js 称为一个模块 module
- 好处： 1.大大提高代码的可维护性 2.每个模块编写完毕，就能被其他地方引用，包括 node 内置模块和第三方模块 3.可避免函数名和变量名冲突，相同名字的函数和变量可以分别存在不同的模块中
- 函数 greet 作为模块的输出暴露出去，这样其他模块就可以使用 greet 函数
  ```js
  module.exports = greet;
  ```
- 引用 变量 greet 就是在 hello.js 中我们 module.exports = greet;输出的 greet 函数
  ```js
  let greet = require("./hello");
  ```
- CommonJS 规范
  这种模块加载机制被称为 COmmonJS 规范，每个.js 都是一个模块，模块间变量和函数不冲突，对外暴露 modele.exports，可以时任意对象、函数、数组等，引用 let xxx = require('module_name')
- 深入了解模块原理
  javascript 语言本身并没有一种模块机制来保证不同模块可以使用相同的变量名，nodejs 实现方式：不需要增加任何 javascript 语法；javascript 是函数式编程，支持闭包，如果把一段 javascript 代码用一个函数包装起来，这段代码的’全局‘变量就变成了函数内部的局部变量

  ```js
  (function () {
    // 读取的hello.js代码:
    var s = "Hello";
    var name = "world";

    console.log(s + " " + name + "!");
    // hello.js代码结束
  })();
  ```

  module.exports 实现方式，Node 先准备一个对象 module

  ```js
  // 准备module对象:
  var module = {
    id: "hello",
    exports: {},
  };
  var load = function (module) {
    // 读取的hello.js代码:
    function greet(name) {
      console.log("Hello, " + name + "!");
    }

    module.exports = greet;
    // hello.js代码结束
    return module.exports;
  };
  var exported = load(module);
  // 保存module:
  save(module, exported);
  ```

  变量 module 是 Node 在加载 js 文件前准备的一个变量，并将其传入加载函数，我们在 hello.js 中可以直接使用变量 module 原因在于它实际是函数的一个参数，通过把参数 module 传递给 load 函数，hello.js 就顺利把一个变量传递给 Node 执行环境，最后 Node 会把 module 变量保存到某个地方

- module.exporets vs exports
  如果要输出一个键值对象{}，可以利用 exports 这个已存在的空对象{}，并继续在上面添加新的键值；
  如果要输出一个函数或数组，必须直接对 module.exports 对象赋值

#### 基本模块

- nodeJs 是运行在服务区端的 javascript 环境，与浏览器相比无安全限制，且必须能接收网络请求、读写文件、 处理二进制内容，所以 nodejs 常用模块实现基本的服务器功能
- **global 全局对象**（不是所有变量都是全局变量，有些变量只作用于模块内部）
  module(\_dirname,\_filename,exports,require())不是全局变量
  global 全局的命名空间对象，将顶层作用域限制在模块内，使 var 之作用在模块内
  Timer(clearImmediate() , clearInterval(), clearTimeout(), setImmediate(), setInterval(), setTimeout())为全局模块，可以不用 require 并且作用于全局
  Buffer 用来处理二进制流读取和转换的模块
  process 对象是全局变量，它提供当前 Nodejs 进程相关信息
  console 模块提供简单的调试控制台
  url 模块提供一些函数，用于 url 解析和处理
- **fs 模块** 文件系统模块，负责读写文件
  与其他模块不同的是，fs 模块同时提供异步和同步的方法
  Nodejs 标准回调函数，第一个 err 参数错误信息，第二个参数结果，err 是否为 null 是判断是否出错的标志
- **stream** 是 Nodejs 提供又一个仅在服务器端可用的模块，目的是支持“流”这个数据结构 + 数据流(必须是有序的，依次读取或依次写入)
  比如敲键盘每个字符依次连起来就是字符流，从键盘输入到应用程序，还对应一个名字：标准输入流(stdin)
  应用程序把字符输出到显示器上，为标准输出流(stdout)
  读取时，可以打开一个流，然后从文件流不断读取数据；写入时，将数据不断地往文件中写
- **http 模块** nodejs 目的是为了用 javascript 编写 web 服务器程序 + http 服务器(操作 http 模块提供的 request 和 response 对象)
  request 封装了 HTTP 请求，调用 request 对象的属性和方法就能拿到所有的 HTTP 请求的信息
  response 封装了 HTTP 响应，操作 response 对象的方法，就可以把 HTTP 响应返回给浏览器
- crypto 提供通用的加密和哈希算法

#### web 开发

- Express 是第一代流行的 web 框架，它对 Nodejs 的 http 模块进行了封装，基于 es5 的语法，要实现异步代码，只能回调
- koa1.0 express 的团队基于 es6 的 generator 重新编写，与 express 不同，koa1.0 基于 generator 实现异步
