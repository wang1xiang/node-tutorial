const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, default: 0 },
  sex: { type: Number, default: 0 }
})
let User = mongoose.model('user', userSchema) // 改数据对象和集合关联(集合名称, schema对象)

module.exports = User