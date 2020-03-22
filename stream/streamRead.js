'use strict'

var fs = require('fs')

var rs = fs.createReadStream('./files/simple.txt', 'utf-8')

rs.on('data', chunk => {
  console.log('DATA:');
  console.log(chunk);
})
rs.on('end', () => {
  console.log('END');
})
rs.on('error', err => {
  console.log('ERROR' + err);
})

var ws = fs.createWriteStream('./files/output.txt', 'utf-8');
ws.write('使用stream写入二进制数据...\n', 'utf-8')
ws.write('END');
ws.end();

// pipe 复制
var ws = fs.createWriteStream('./files/copy.txt')
rs.pipe(ws)