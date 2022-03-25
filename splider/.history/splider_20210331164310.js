// const htp = require('http')
const fs = require('fs')
const http = require('https')
const cheerio = require('cheerio')
const request = require('request')
var url = require('url'),
  async = require('async'),
  phantom = require('phantom'),
  publicAPI = require('./publicAPI')

var config = {
  url: 'https://kentintrol.com/', //目的网站
  savePath: '.', //保存路径
  containOutLink: true, //是否爬取外部链接
  subOnly: true, //仅爬取当前路径和其子页面
  totalNum: 10, //爬取页面上限，0为不限制
  endWith: 'html', //文件结尾
  saveStrategy: publicAPI.Strategy.SAVE_IN_ROOT,
  getOuterJs: true, //是否爬取远端js
  getOuterCss: true, //是否爬取远端Css
  getOuterImages: true, //是否爬取远端图片
}

var list = [config.url]
var count = 0
var urlInfo = url.parse(config.url)
// http://www.mzitu.com/share/comment-page-
http
  .get('https://kentintrol.com/', (res) => {
    let url = 'https://kentintrol.com/'
    const { statusCode } = res
    const contentType = res.headers['content-type']
    let error = null
    if (statusCode !== 200) {
      error = new Error('请求状态错误')
    } else if (!/^text\/html/.test(contentType)) {
      error = new Error('请求类型错误')
    } else {
      let html = ''
      // 数据分段 只要接受数据就会触发data chunk每次接受的数据片段

      res.on('data', (chunk) => {
        html += chunk.toString('utf-8')
      })

      res.on('end', () => {
        // fs.writeFileSync('./baidu.html', html)
        console.log('数据传输完毕')
        // 通过cheerio分析
        let $ = cheerio.load(html)
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
        //获取css
        var stylesheets = $("link[rel='stylesheet']")
        css = getCss(stylesheets)
        //获取图片
        var imgs = $('img')
        images = getImages(imgs)
        if (!config.totalNum || count < config.totalNum) {
          var links = $('a')
          getLink(links, url)
        }
        async.parallel([
          function (callback) {
            saveHtml(url, html, function () {
              console.log(
                'Page:' + (count + 1) + '    Url:' + url + '    success!\n'
              )
              callback(null)
            })
          },
          function (callback) {
            saveJs(
              url,
              js,
              function (x, js) {
                console.log(
                  'Page:' +
                    (count + 1) +
                    '    Js' +
                    (x + 1) +
                    '     Src:' +
                    js +
                    '    Success!\n'
                )
              },
              callback
            )
          },
          function (callback) {
            saveCss(
              url,
              css,
              function (x, css) {
                console.log(
                  'Page:' +
                    (count + 1) +
                    '    Css' +
                    (x + 1) +
                    '     Src:' +
                    css +
                    '    Success!\n'
                )
              },
              callback
            )
          },
          function (callback) {
            saveImage(
              url,
              images,
              function (x, img) {
                console.log(
                  'Page:' +
                    (count + 1) +
                    '    Images' +
                    (x + 1) +
                    '     Src:' +
                    img +
                    '    Success!\n'
                )
              },
              callback
            )
          },
        ])
      })
    }
    if (error) {
      console.log(error)
      res.resume() // 重置缓存
      return false
    }
  })
  .on('error', (err) => {
    console.log('请求错误')
  })

// request模块保存图片
function saveImg(url, index) {
  const writeStream = fs.createWriteStream(`./image/${index}image.png`)
  const readStream = request(url)

  readStream.pipe(writeStream)
  readStream.on('end', function () {
    console.log('文件下载成功')
  })
  readStream.on('error', function (err) {
    console.log('错误信息' + err)
  })
  writeStream.on('finish', function () {
    console.log('文件写入成功')
    writeStream.end()
  })
}
var saveHtml = function (url, html, callback) {
  console.log('url' + url)
  url = url.match(/https?:\/\/((?:(?![\?])[\S])*)/)[1]
  var endWith = /\/$/.test(url)
  url = endWith ? url.match(/(\S*)\/$/)[1] : url
  var reg = new RegExp(/\.html|\.htm|\.asp|\.jsp$/)
  var usePathAsName = reg.test(url)
  var array = url.split('/')
  array[0] = urlInfo.hostname
  var length = usePathAsName ? array.length - 1 : array.length
  var currentPath = config.savePath

  for (var i = 0; i < length; i++) {
    ;(function (i) {
      currentPath += '/' + array[i]
      if (currentPath.includes(':')) currentPath.replace(':', 'wang')
      if (fs.existsSync(currentPath)) {
        write(i, callback)
      } else {
        try {
          fs.mkdirSync(currentPath)
          write(i, callback)
        } catch (err) {
          console.log(err)
        }
      }
    })(i)
  }

  function write(index, callback) {
    if (index == length - 1) {
      var fileName = endWith
        ? 'index.' + config.endWith
        : usePathAsName
        ? array[array.length - 1]
        : array[array.length - 1] + config.endWith
      console.log(currentPath)
      console.log(fileName)
      fs.writeFile(currentPath + '/' + fileName, html, function (err) {
        if (err) {
          console.log(err, 'appendFile')
        } else {
          callback()
        }
      })
    }
  }
}

var saveJs = function (url, js, callback, callback2) {
  if (!js.length) {
    callback2(null)
    return
  }
  var length = js.length
  var count = 0
  var root = config.savePath + '/' + urlInfo.hostname
  if (config.saveStrategy == publicAPI.Strategy.SAVE_IN_ROOT) {
    if (fs.existsSync(root)) {
      write(callback, callback2)
    } else {
      fs.mkdirSync(root)
      write(callback, callback2)
    }
  }

  function write(callback, callback2) {
    for (var i = 0; i < length; i++) {
      ;(function (i) {
        var reg = new RegExp(/^\//)
        var path = reg.test(js[i]) ? js[i].substring(1) : js[i]
        var array = path.split('/')
        var currentPath = root
        var len = array.length
        for (var j = 0; j < len - 1; j++) {
          ;(function (j) {
            currentPath += '/' + array[j]
            if (currentPath.includes(':')) cu = currentPath.replace(':', 'wang')
            if (fs.existsSync(currentPath)) {
              if (j == len - 2) {
                fetch(
                  js[i],
                  function () {
                    callback(count, js[i])
                  },
                  callback2
                )
              }
            } else {
              try {
                fs.mkdirSync(currentPath)
                if (j == len - 2) {
                  fetch(
                    js[i],
                    function () {
                      callback(count, js[i])
                    },
                    callback2
                  )
                }
              } catch (err) {
                console.log('saveJs error!', err)
              }
            }
          })(j)
        }
      })(i)
    }
  }

  function fetch(js, callback, callback2) {
    request(url + js, function (err, res, body) {
      //console.log(body);
      js = js.match(/((?:(?![\?])[\S])*)/)[1]
      if (err) {
        count++
      } else {
        fs.writeFile(root + '/' + js, body, function (err) {
          count++
          if (count == length) callback2(null)
          if (err) {
            console.log(err)
          } else {
            callback()
          }
        })
      }
    })
  }
}

var saveCss = function (url, css, callback, callback2) {
  if (!css.length) {
    callback2(null)
    return
  }
  var length = css.length
  var count = 0
  var root = config.savePath + '/' + urlInfo.hostname
  if (config.saveStrategy == publicAPI.Strategy.SAVE_IN_ROOT) {
    if (fs.existsSync(root)) {
      write(callback, callback2)
    } else {
      fs.mkdirSync(root)
      write(callback, callback2)
    }
  }

  function write(callback, callback2) {
    for (var i = 0; i < length; i++) {
      ;(function (i) {
        var reg = new RegExp(/^\//)
        var path = reg.test(css[i]) ? css[i].substring(1) : css[i]
        var array = path.split('/')
        var currentPath = root
        var len = array.length
        for (var j = 0; j < len - 1; j++) {
          ;(function (j) {
            currentPath += '/' + array[j]
            if (currentPath.includes(':')) cu = currentPath.replace(':', 'wang')
            if (fs.existsSync(currentPath)) {
              if (j == len - 2) {
                fetch(
                  css[i],
                  function () {
                    callback(count, css[i])
                  },
                  callback2
                )
              }
            } else {
              try {
                fs.mkdirSync(currentPath)
                console.log(j, 4)
                if (j == len - 2) {
                  fetch(
                    css[i],
                    function () {
                      callback(count, css[i])
                    },
                    callback2
                  )
                }
              } catch (err) {
                console.log('saveCss error!', err)
              }
            }
          })(j)
        }
      })(i)
    }
  }

  function fetch(js, callback, callback2) {
    request(url + js, function (err, res, body) {
      js = js.match(/((?:(?![\?])[\S])*)/)[1]
      if (err) {
        count++
      } else {
        fs.writeFile(root + '/' + js, body, function (err) {
          count++
          if (count == length) callback2(null)
          if (err) {
            console.log(err)
          } else {
            callback()
          }
        })
      }
    })
  }
}

var saveImage = function (url, images, callback, callback2) {
  if (!images.length) {
    callback2(null)
    return
  }
  var length = images.length
  var count = 0
  var root = config.savePath + '/' + urlInfo.hostname
  if (config.saveStrategy == publicAPI.Strategy.SAVE_IN_ROOT) {
    if (fs.existsSync(root)) {
      write(callback, callback2)
    } else {
      fs.mkdirSync(root)
      write(callback, callback2)
    }
  }

  function write(callback, callback2) {
    for (var i = 0; i < length; i++) {
      ;(function (i) {
        var reg = new RegExp(/^\//)
        var path = reg.test(images[i]) ? images[i].substring(1) : images[i]
        var array = path.split('/')
        var currentPath = root
        var len = array.length
        for (var j = 0; j < len - 1; j++) {
          ;(function (j) {
            currentPath += '/' + array[j]
            if (currentPath.includes(':')) currentPath.replace(':', 'wang')
            if (fs.existsSync(currentPath)) {
              if (j == len - 2) {
                fetch(
                  images[i],
                  function () {
                    callback(count, images[i])
                  },
                  callback2
                )
              }
            } else {
              try {
                console.log(currentPath)
                fs.mkdirSync(currentPath)
                if (j == len - 2) {
                  fetch(
                    images[i],
                    function () {
                      callback(count, images[1])
                    },
                    callback2
                  )
                }
              } catch (err) {
                console.log('saveImage error!')
              }
            }
          })(j)
        }
      })(i)
    }
  }

  function fetch(js, callback, callback2) {
    request
      .get(url + js)
      .on('response', function (res) {
        if (res.statusCode == 200) {
          callback()
          count++
          if (count == length) callback2(null)
        }
      })
      .on('error', function (err) {
        console.log(err)
      })
      .pipe(fs.createWriteStream(root + '/' + js))
  }
}

function getJs(scripts) {
  var res = []
  scripts.each(function (i, script) {
    var src = script.attribs.src
    if (!src) return
    if (!config.getOuterJs) {
      if (/^https?/.test(src)) return
    }
    res.push(src)
  })
  return publicAPI.uniqueArray(res)
}

function getCss(stylesheets) {
  var res = []
  stylesheets.each(function (i, style) {
    var src = style.attribs.href
    if (!src) return
    if (!config.getOuterCss) {
      if (/^https?/.test(src)) return
    }
    res.push(src)
  })
  return publicAPI.uniqueArray(res)
}

function getImages(imgs) {
  var res = []
  imgs.each(function (i, img) {
    var src = img.attribs.src
    if (!src) return
    if (!config.getOuterImages) {
      if (/^https?/.test(src)) return
    }
    res.push(src)
  })
  return publicAPI.uniqueArray(res)
}

function getLink(links, url) {
  //console.log(links)
  links.each(function (i, link) {
    var href = link.attribs.href
    if (!href) return
    if (
      !config.containOutLink &&
      /^https?/.test(href) &&
      href.indexOf(urlInfo.hostname) < 0
    ) {
      return
    }
    if (!config.totalNum || count < config.totalNum) {
      if (!/^https?/.test(href)) {
        if (!/\.html|\.htm|\.asp|\.jsp$/.test(url)) href = url + '/' + href
        else {
          href = url.substring(0, url.lastIndexOf('/')) + '/' + href
        }
      }
      if (linkCheck(href)) list.push(urlFormat(href))
    }
  })
  list = publicAPI.uniqueArray(list)
  console.log(list)
}

function linkCheck(link) {
  if (link == '/') return false
  return !/^#|javascript:|mailto:|tel:/.test(link)
}

function urlFormat(url) {
  //去除多于的/
  return url.replace(/([^:])[\/\\\\]{2,}/g, '$1/')
}
