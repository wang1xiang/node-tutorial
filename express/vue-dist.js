const express = require('express')
const path = require('path')
const cors = require('cors')
//引入中间件，解决history模式
const history = require('connect-history-api-fallback')
const app = express()
// gzip压缩
const compression = require('compression')

app.use(cors())
app.use(history())
app.use(compression())
app.use(express.static(path.join(__dirname, './page'))) 

app.listen(3000, () => {
  console.log('app listen on port 3000');
})
