const url = require('url')

// let data = 'https://ke.qq.com/course/411515?taid=4150737999644539&dialog=1'
// console.log(url.parse(data))

let data = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'ke.qq.com',
  port: null,
  hostname: 'ke.qq.com',
  hash: null,
  search: '?taid=4150737999644539&dialog=1',
  query: 'taid=4150737999644539&dialog=1',
  pathname: '/course/411515',
  path: '/course/411515?taid=4150737999644539&dialog=1',
  href:
    'https://ke.qq.com/course/411515?taid=4150737999644539&dialog=1'
}
console.log(url.format(data))