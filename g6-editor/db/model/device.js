const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  ip: { type: String },
  label: { type: String, required: true },
  relation: { type: Array, default: [] }
})
let Device = mongoose.model('device', deviceSchema) // 改数据对象和集合关联(集合名称, schema对象)

module.exports = Device