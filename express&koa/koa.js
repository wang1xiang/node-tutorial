const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = Router()

app.use(async (ctx, next) => {
  console.log('I am the first middleWare')
  next()
  console.log('first middleWare end calling')
})
app.use(async (ctx, next) => {
  console.log('I am the second middleWare')
  await next()
  console.log('second middleWare end calling')
})

router.get('/api/test1', async (ctx, next) => {
  console.log('I am the router middleWare => /api/test1')
  ctx.body = 'hello'
})

router.get('/api/testerror', async (ctx, next) => {
  throw new Error('I am error')
})

app.use(router.routes())

app.listen(3000)
console.log('server listening at port 3000')