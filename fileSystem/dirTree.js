const fs = require('fs')
const path = require('path')

// 获取当前有没有传入目标路径
const target = path.join(__dirname, process.argv[2] || './')

function changstrs (str) {
  let ss = ''
  for (let i = 0; i < str.length; i++) {
    if ((i !== '/' && i !== '@') && i !== '') ss += i
  }

  return ss
}

function load (target, depth) {
  const prefix = new Array(depth + 1).join('| ')

  let ssf = changstrs(target)
  if (ssf.indexOf('node_modules') !== -1) return false

  // 读取一个目录的内容，返回一个不包括'.'和'..'的文件名的数组
  let dirinfos = fs.readdirSync(target)

  let dirs = []
  let files = []
  dirinfos.forEach(item => {
    const stats = fs.statSync(path.join(target, item))
    if (stats.isFile()) {
      files.push(item)
    } else {
      dirs.push(item)
    }
  })

  dirs.forEach(item => {
    console.log(`${prefix}├─${item}`)
    load(path.join(target, item), depth + 1)
  })

  let count = files.length - 1
  files.forEach(item => {
    let temp = count-- ? '├─' : '└─'
    console.log(`${prefix}${temp}${item}`)
  })
}

load(target, 0)