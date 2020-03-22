/* Nodejs或者koa提供的request对象，都不提供解析request的body的功能
  需要另外引入另一个middleware来解析原始request请求，把解析的参数，绑定到ctx.request.body中
  koa-bodyparse就是干这个的
*/
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()

app.use(async (ctx, next) => {
  console.log(`Proces ${ctx.request.method}${ctx.request.url}...`);
  await next()
})

app.use(bodyParser())

router.get('/', async(ctx, next) => {
  ctx.response.body = `<h1>index</h1>
    <form action="signin" method="post">
      <p>Name: <input name="name" value="koa"></p>
      <p>Password: <input name="password" type="password"></p>
      <p><input type="submit" vakye="Submit"></p>
    </form>`
})

router.post('/signin', async(ctx, next) => {
  var name = ctx.request.body.name || '',
      password = ctx.request.body.password || ''
  console.log(`signin with name:${name},password:${password}`);
  if (name === 'koa' && password ==='12345') {
    ctx.response.body = `<h1>Welcome, ${name}</h1>`
  } else {
    ctx.response.body = `<h1>Login failed</h1>
      <p><a href="/">Try again</a></p>`
  }
})

app.use(router.routes())
app.listen(3000)
console.log('app start at port 3000');