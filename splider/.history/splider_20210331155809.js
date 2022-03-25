// const htp = require('http')
const fs = require('fs')
const http = require('https')
const cheerio = require('cheerio')
const request = require("request")

const url = 'https://kentintrol.com/'
// http://www.mzitu.com/share/comment-page-
http.get(url, res => {
  const { statusCode } = res
  const contentType = res.headers['content-type']
  let error = null
  if (statusCode !== 200) {
    error = new Error('请求状态错误')
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error('请求类型错误')
  } else {
    let rawData = ''
    // 数据分段 只要接受数据就会触发data chunk每次接受的数据片段
    
    res.on('data', chunk => {
      rawData += chunk.toString('utf-8')
    })

    res.on('end', () => {
      // fs.writeFileSync('./baidu.html', rawData)
      console.log('数据传输完毕')
      // 通过cheerio分析
      let $ = cheerio.load(rawData)
      // $('img').each((index, el) => {
      //   if ($(el).attr('src') !== '') {
      //     console.log($(el).attr('src'))
      //     if (index < 15) saveImg($(el).attr('src'), index)
      //   }
      // })
      var js, css, images

      //获取js列表
      var scripts = $('script')
      js = getJs(scripts)
      console.log(js)
      //获取css
      var stylesheets = $("link[rel='stylesheet']")
      css = getCss(stylesheets)
      console.log(css)
      //获取图片
      var imgs = $('img')
      images = getImages(imgs)
      console.log(images)
    })
  }
  if (error) {
    console.log(error)
    res.resume() // 重置缓存
    return false
  }  
}).on('error', err => {
  console.log('请求错误')
})

// request模块保存图片
function saveImg(url, index) {
  const writeStream = fs.createWriteStream(`./image/${index}image.png`);
  const readStream = request(url)

  readStream.pipe(writeStream)
  readStream.on('end', function() {
    console.log('文件下载成功')
  })
  readStream.on('error', function(err) {
    console.log('错误信息' + err)
  })
  writeStream.on('finish', function() {
    console.log('文件写入成功')
    writeStream.end();
  })
}