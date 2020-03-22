'use strict'

var fs = require('fs')
// 异步读文件
fs.readFile('./files/simple.png', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.length + 'bytes');
  }
})

fs.readFile('./files/simple.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
console.log('异步读文件，这里先执行'); 

// 同步读文件
try {
  var data = fs.readFileSync('./files/simple.txt', 'utf-8')
  console.log(data);
  console.log('异步读文件，这里后执行'); 
} catch {
  console.log('出错');
}
  