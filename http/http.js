'use strict'

var http = require('http')

var server = http.createServer((request, response) => {
  console.log(request.method + ':' + request.url);
  response.writeHead(200, {'Content-type': 'text/html'});
  response.end('<h1>hello world</h1>');
})

server.listen(8088);
console.log('server is running at http://127.0.0.1:8088/');

var url = require('url')

console.log(url.parse('http://user:pass@host.com:8088/path/to/file?query=string#hash'));

var path = require('path')

var workDir = path.resolve('.')
var filePath = path.join(workDir, 'pub', 'index.html');
console.log(filePath);