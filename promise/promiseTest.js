const fs = require('fs')

// fs.stat('./hehe.js', (err, stats) => {
//   if (err) {
//     console.log('文件不存在')
//   } else {
//     fs.unlink('./hehe.js', (err) => {
//       console.log(err)
//       fs.writeFile('./test.js', 'xxx', (err) => {
//         console.log(err)
//       })
//     })
//   }
// })

// 异步操作需要保持一定的执行顺序 回调函数的嵌套(回调地狱)

// promise async/await  

function delFiel() {
  return new Promise((resolve, reject) => {
    fs.unlink('./hehe.js', (err) => {
      if (err) {
        reject('error')
      } else {
        resolve('ok')
      }
    })
  })
}

delFiel()
  .then(msg => {
    console.log(msg)
  })
  .catch(error => {
    console.log(error)
  })