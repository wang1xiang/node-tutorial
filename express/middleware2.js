const express = require('express')
const app = express()

app.get('/test1', (req, res, next) => {
  console.log('fun1')
  next() // next是否继续
},
(req, res) => {
  console.log('fun2')
  res.send('test1')
})

app.listen(3000, () => {
  console.log('app listen on port 3000');
})
