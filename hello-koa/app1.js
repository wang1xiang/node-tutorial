const Koa = require('koa')
const app = new Koa()
/* middleware
  koa把async函数组成一个处理链，处理完调用await next()调用下一个async函数， 每个async函数称为middleware
*/
app.use(async (ctx, next) => {
  console.log(`${ctx.method}${ctx.url}`);
  await next() // 调用下一个middleware
})

app.use(async (ctx, next) => {
  const start = new Date().getTime()
  await next()
  const ms = new Date().getTime() - start
  console.log(`Time: ${ms}ms`);
})

app.use(async (ctx, next) => {
  await next()
  ctx.type = 'text/html'
  ctx.body = '<h1>Hello, koa2</h1>'
})

app.listen(3000)
console.log('app start at port 3000');