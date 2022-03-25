// const htp = require('http')
const http = require('https')

const url = 'https://chp.shadiao.app/api.php'
// http://www.mzitu.com/share/comment-page-
http.get(url, res => {
  let rawData = ''
  // 数据分段 只要接受数据就会触发data chunk每次接受的数据片段
  res.on('data', chunk => {
    rawData += chunk.toString('utf-8')
  })
}).on('error', err => {
  console.log('请求错误')
})
