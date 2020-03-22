const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number, default: 1 }
})
let Device = mongoose.model('device', deviceSchema) // 改数据对象和集合关联(集合名称, schema对象)

module.exports = Device