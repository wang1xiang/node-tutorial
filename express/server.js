const express = require('express')
const fs = require('fs')
const http = require('https')
var cors = require('cors')
const bodyParser = require('body-parser')
var app = express()

// 解析表单数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// 解析json数据
app.use(bodyParser.json())
app.get('/user/login', (req, res) => {
  // 接收get参数 req.query
  console.log(req.query)

  // 处理参数
  let { us,ps } = req.query
  if (us === 'wangyi' && ps === '123456') {
    res.send({err: 0, meg: 'login OK'})
  } else {
    res.send({err: 1, meg: 'login fail'})
  }
})

app.get('/user/del', (req, res) => {
  res.send('hhe test')
})

app.post('/user/reg', (req, res) => {
  // 接收post数据 消息体 请求体 req.body

  // express 不能直接解析消息体 通过第三方插件
  console.log(req.body)
  // 处理参数
  let { us,ps } = req.body
  if (us === 'wangyi' && ps === '123456') {
    res.send({err: 0, meg: 'login OK'})
  } else {
    res.send({err: 1, meg: 'login fail'})
  }
})
// app.get('/test', (req, res) => {
//   fs.readFile('./files/output.txt', (err, data) => {
//     if (err) {
//       res.status(500).send('read file-output error')
//     }
//     // fs.readFile('./files', (err, data) => {
//     //   if (err) {
//     //     res.status(500).send('read file error')
//     //   }
//     //   res.type('text/plain')
//     //   res.send(data)
//     // })
//   })
// })

app.post('/system/barrage', (req, res) => {
  const url = 'https://chp.shadiao.app/api.php'
  // http://www.mzitu.com/share/comment-page-
  http.get(url, resdata => {
    let rawData = ''
    // 数据分段 只要接受数据就会触发data chunk每次接受的数据片段
    resdata.on('data', chunk => {
      rawData += chunk.toString('utf-8')
    })
    resdata.on('end', () => {
      console.log(rawData)
      res.send({err: 0, meg: rawData})
    })
  }).on('error', err => {
    console.log('请求错误')
  })
})
app.listen(3000, () => {
  console.log('app listen on port 3000');
})


/**
 * 
 * api 接口的构成元素
 * ip
 * port
 * pathname 语义化
 * method get post
 * 接收用户传递数据 数据格式由后端提供
 */