const fs = require('fs')

function isExit() {
  return new Promise((resolve, reject) => {
    fs.stat('./hehe.js', (err,stats) => {
      if (err) {
        reject('文件不存在')
      } else {
        resolve('文件存在')
      }
    })
  })
}

function delFiel() {
  return new Promise((resolve, reject) => {
    fs.unlink('./hehe.js', (err) => {
      if (err) {
        reject('删除失败')
      } else {
        resolve('删除成功')
      }
    })
  })
}

// 链式调用 只需要一个catch
// 如何终止链式调用 手动抛出一个错误
isExit()
  .then(res => {
    console.log('判断文件是否存在')
    console.log(res)
    return delFiel() // return出去 可以再次调用
  })
  .then(res => {
    console.log('删除文件')
    console.log(res)
    throw new Error('手动终止')
  })
  .then(res => {
    console.log('test1')
  })
  .then(res => {
    console.log('test2')
  })
  .catch(error => {
    console.log(error)
  })