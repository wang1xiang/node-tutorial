/**
 * 不是内部命令 需要设置环境变量未mongod的bin目录
 * 指令
 * mongodb  数据库名
 * mongod   命令行启动数据库命令
 * momgo    命令行操作数据库指令
 * mongoose node操作数据库的插件
 */

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/20200219', { useUnifiedTopology: true, useNewUrlParser: true } )
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('db ok');
})
/**
 * Schema对象
 * 创建一个和集合相关的schema对象 类似表头
 * 将schema对象转换为数据模型
 * 操作数据库
 */
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
  sex: { type: Number, default: 0 }
})
let User = mongoose.model('user', userSchema) // 改数据对象和集合关联(集合名称, schema对象)
// 插入
User.insertMany({username: 'wangyi', password: '123', age: 16})
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })

// 查询
// User.find()
// User.find({age: 17})
//   .then(res => {
//     console.log(res)
//     console.log('查询成功')
//   })
//   .catch(error => {
//     console.log(error)
//     console.log('查询失败')
//   })

// 删除
// User.remove()
//   .then(res => {
//     console.log(res)
//     console.log('删除成功')
//   })
//   .catch(error => {
//     console.log(error)
//     console.log('删除失败')
//   })