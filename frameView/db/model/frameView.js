const mongoose = require('mongoose')

const frameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  free: { type: Number, default: 0 },
  frontList: { type: Array, required: true },
  size: { type: Number, default: 30 },
  order: { type: Boolean, required: true },
  backView: { type: Boolean, required: true }
})
let Frame = mongoose.model('frame', frameSchema) // 改数据对象和集合关联(集合名称, schema对象)

module.exports = Frame