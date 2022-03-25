const ws = require('nodejs-websocket')
console.log('开始建立连接...')

let game1 = null, game2 = null, game1Ready = false, game2Ready = false
const server = ws.createServer((conn) => {
  conn.on('text', str => {
    console.log('收到的信息为:' + str)
    if (str === 'game1') {
      game1 = conn
      game1Ready = true
      conn.sendText('success')
    }
    if (str === 'game2') {
      game2 = conn
      game2Ready = true
      conn.sendText('success')
    }

    if (game1Ready && game2Ready) {
      game2.sendText(str)
    }
  })

  conn.on('close', (code, reason) => {
    console.log(code, '关闭连接：' + reason)
  })
  conn.on('error', (code, reason) => {
    console.log(code, '异常连接：' + reason)
  })
}).listen(8888)

console.log('建立完毕')