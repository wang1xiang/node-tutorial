#### 通过express 框架书写api

#### 什么是API
  前后端分离 前端通过ajax 请求数据
  通过api接口实现接口请求

  前端：1.写界面 2.请求数据 3.数据处理
  后端：写 api接口

#### express 基本使用
  1.安装 express
  ```
  cnpm install express --save
  ```
  模块的引用 从当前目录的node_module中找 找不到再到上级目录node_module找

#### 服务器相关
  服务器：1.服务器就是一台电脑 2.服务器软件(apache tomcat iis nginx node) 3.服务器ip和端口号

#### api接口的编写
  + 接收数据
    - get req.query
    - psot  req.body 需要body-parse插件进行解析

#### 中间件 middleware
  + 内置中间件 static
  + 自定义中间件 (全局 局部)
  + 第三方中间件 (body-parser) (拦截器)

#### 静态资源目录static
  指定一个目录 
#### 非关系数据库(文档) mongoDB