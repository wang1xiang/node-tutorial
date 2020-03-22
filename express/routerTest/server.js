const express = require('express')
const app = express()

let userRouter = require('./router/user')
let foodRouter = require('./router/food')
app.use('/user', userRouter)
app.use('/food', foodRouter)

app.listen(3000, ()=> {
  console.log('server start at 3000')
})
