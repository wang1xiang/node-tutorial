let buf = Buffer.alloc(256)

// 写入缓冲区的字符串 返回实际写入的大小
len = buf.write('www.runoob.com')
console.log('写入字节数：' + len)

// 从缓冲区读取数据(编码，开始位置，结束位置)
console.log(buf.toString('ascii'))
console.log(buf.toString('ascii', 0, 5))
console.log(buf.toString('utf-8', 5, 8))

// 将Buffer转换为JSON对象
const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
const json = JSON.stringify(buf1)
console.log(json)

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ? Buffer.from(value.data) : value
})
console.log(copy)

// 缓冲区合并
const buf2 = Buffer.concat([buf, buf1])
console.log(buf2.toString())

// 缓冲区长度
console.log(buf2.length)
