const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')
 
// 将一组html格式的字符串 转换为类dom 可以通过jq的语法选择其中的元素
console.log($('.title').text());