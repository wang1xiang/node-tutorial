const express = require('express')
var app = express()

app.use('/', (req, res, next) => {
  console.log('中间件')
  let { token } = req.query
  if (token) {
    next()
  } else {
    res.send('缺少token')
  }
})

app.get('/test1', (req, res) => {
  res.send('test1 test')
})

app.get('/test2', (req, res) => {
  res.send('hhe test')
})

app.listen(3000, () => {
  console.log('app listen on port 3000');
})
