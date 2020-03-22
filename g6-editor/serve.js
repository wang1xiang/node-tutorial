const express = require('express')
const db = require('./db/connect')
const path = require('path')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// 通过cor是解决跨域
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))

// 路由
const relationRouter = require('./router/relationRouter')
const topoRouter = require('./router/topoRouter')
const deviceRouter = require('./router/deviceRouter')

app.use('/relation', relationRouter)
app.use('/device', deviceRouter)
app.use('/topo', topoRouter)
app.listen(3000, () => {
  console.log('server start')
})
/**
 * nodemon 自动更新代码
 * 安装 npm install nodemon -g
 * node serve.js
 * nodemon serve.js
 */
