const fs = require('fs')

fs.mkdir('./test.js', err => {
  console.log(err)
})

// fs.rename('./test.js', './test', err => {
//   if (err) {
//     console.log('失败')
//   } else {
//     console.log('ok')
//   }
// })

// fs.rmdir('../node', err => {
//   if (err) {
//     console.log('失败')
//   } else {
//     console.log('ok')
//   }
// })