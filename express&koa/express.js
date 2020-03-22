const express = require('express')

const app = express()
const router = express.Router()

app.use(async (req, res, next) => {
  console.log('I am the first middleWare')
  next()
  console.log('first middleWare end calling')
})
app.use((req, res, next) => {
  console.log('I am the second middleWare')
  next()
  console.log('second middleWare end calling')
})

router.get('/api/test1', async(req, res, next) => {
  console.log('I am the router middleWare => /api/test1')
  res.status(200).send('hello')
})

router.get('/api/testerror', (req, res, next) => {
  console.log('I am the router middleWare => /api/testerror')
  throw new Error('I am error.')
})

app.use('/', router)

app.use(async (err, req, res, next) => {
  if (err) {
    console.log('last middleWare catch error', err)
    res.status(500).send('server Error')
    return
  }
  console.log('I am the last middleWare')
  next()
  console.log('last middleWare end calling')
})

app.listen(3000)
console.log('server listening at port 3000');