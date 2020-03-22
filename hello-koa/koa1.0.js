var fs = require('fs')
var koa = require('koa') // 返回结果为函数，需执行
var app = koa() // 执行结果赋值给变量在使用

app.use('/test', function *() {
  yield doReadFile1()
  var data = yield doReadFile2()
  this.body = data
})

function doReadFile1() {
  fs.readFile('./files/output.txt', (err, data) => {
    if (err) {
      
    } else {
      console.log(data);
    }
  })
}
function doReadFile2() {
  fs.readFile('./files/copy.txt', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  })
}

app.listen(3000)