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
app.use('/public', express.static(path.join(__dirname, './static')))

// 路由
const userRoutert = require('./router/userRouter')
const foodRoutert = require('./router/foodRouter')
const fileRoutert = require('./router/fileRouter')

app.use('/user', userRoutert)
app.use('/file', fileRoutert)
app.use('/food', foodRoutert)
app.listen(3000, () => {
  console.log('server start')
})
/**
 * nodemon 自动更新代码
 * 安装 npm install nodemon -g
 * node serve.js
 * nodemon serve.js
 */
