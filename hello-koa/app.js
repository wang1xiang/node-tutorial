const Koa = require('koa') // koa2导入的是一个class文件，用大写
const app = new Koa() // 创建一个Koa对象表示web app本身

/*
  对于每一个http请求，koa调用我们传入的异步函数来处理
  async(ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>hello koa</h1>'
  }
  ctx是koa传入封装了request和response的变量，next是koa传入将要处理的下一个异步函数
  
*/
// 对于任何请求，app将调用该异步函数处理请求
app.use(async (ctx, next) => {
  await next()
  ctx.response.type='text/html'
  ctx.response.body='<h1>hello, koa2</h1>'
})

app.listen(3000)
console.log('app started at port 3000...');