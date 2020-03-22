'use strict'

var fs = require('fs')

// 异步方法
var data = 'hello world'
fs.writeFile('./files/output.txt', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
})

// 同步方法
fs.writeFileSync('output.txt', data)
fs.readFile('./files/output.txt','utf-8', (err, data) => {
  console.log(data)
});

// stat对象
fs.stat('./files/simple.txt', (err, stat) => {
  if (err) {
    console.log(err);
  } else {
    console.log('isFile' + stat.isFile());
    console.log('isDirectory' + stat.isDirectory());
    if (stat.isFile) {
      console.log('size' + stat.size);
      console.log('birth time' + stat.birthtime);
      console.log('modified time' + stat.mtime);
    }
  }
})