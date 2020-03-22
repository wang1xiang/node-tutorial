const Koa = require('koa')
/* 函数调用
  相当于
  const fn_router = require('koa-router')
  const router = fn_router()
*/
const router = require('koa-router')()
const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method}${ctx.request.url}...`);
  await next()
})
// 注册一个GET请求
router.get('/hello/:name', async(ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `<h1>hello, ${name}</h1>`
})

router.get('/', async(ctx, next) => {
  ctx.response.body = '<h1>index</h1>'
})

app.use(router.routes())

app.listen(3000)
console.log('app start at 3000...');