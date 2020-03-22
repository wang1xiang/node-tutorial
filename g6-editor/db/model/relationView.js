const mongoose = require('mongoose')

const relationSchema = new mongoose.Schema({
  source: { type: String, required: true },
  target: { type: String, required: true },
  label: { type: String, required: true }
})
let Relation = mongoose.model('relation', relationSchema) // 改数据对象和集合关联(集合名称, schema对象)

module.exports = Relation