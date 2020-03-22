const express = require('express')
const db = require('./db/connect')
const path = require('path')
var cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// 通过cor是解决跨域
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 路由
const frameRoutert = require('./router/frameRouter')
const deviceRouter = require('./router/deviceRouter')

app.use('/frame', frameRoutert)
app.use('/device', deviceRouter)
app.listen(3000, () => {
  console.log('server start')
})
/**
 * nodemon 自动更新代码
 * 安装 npm install nodemon -g
 * node serve.js
 * nodemon serve.js
 */
