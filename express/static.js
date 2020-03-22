const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './test'))) 

// app.use('/public', express.static(path.join(__dirname, './test')))

app.listen(3000, () => {
  console.log('app listen on port 3000');
})
