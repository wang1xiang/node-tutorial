// 创建一个长度为10、且用0填充的Buffer
const buf1 = Buffer.alloc(10)
// 创建一个长度为10、且用1填充的Buffer
const buf2 = Buffer.alloc(10, 1)

// 创建一个长度为10、且未初始化的Buffer 此方法比alloc更快 但返回的Buffer实例可能包含旧数据 需要使用fill或write重写
const buf3 = Buffer.allocUnsafe(10)

// 创建一个包含[0x1, 0x2, 0x3]的Buffer
const buf4 = Buffer.from([1, 2, 3])

// 创建一个包含UTF-8字节[0x74, 0xc3, 0xa9, 0x73, 0x74]的Buffer
const buf5 = Buffer.from('text')

// 创建一个包含Latin-1字节[0x74, 0xe9, 0x73, 0x74]的Buffer
const buf6 = Buffer.from('test', 'latin1')
