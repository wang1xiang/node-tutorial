const fs = require('fs')

// let dirs = []
// try {
//   dirs = fs.readdirSync('../sad/')
// } catch (err) {
//   console.log(err)
// }
// console.log(dirs)

fs.readdir('../', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
console.log(222)
// 错误的回调优先，在回调函数中第一个参数表示错误对象 默认为null

/**
 * 错误处理 同步使用try catch捕获 异步使用回调
 */