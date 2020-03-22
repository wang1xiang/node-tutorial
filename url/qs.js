const qs = require('querystring')

let string = 'name=wangyi&pas=123&sex=0'
console.log(qs.parse(string))

let obj = { name: 'wangyi', pas: '123', sex: '0' }
console.log(qs.stringify(obj))