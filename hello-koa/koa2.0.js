var fs = require('fs')
var koa = require('koa')
var app = new koa()

koa.use(async (ctx, next) => {
  await next()
  var data = await doReadFile()
  ctx.response.type = 'text/plain'
  ctx.response.body = data
})