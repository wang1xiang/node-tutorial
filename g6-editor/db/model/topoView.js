const mongoose = require('mongoose')

const topoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  topoData: { type: Object, required: true },
  screenshot: { type: String, required: true }
})
let Topo = mongoose.model('topo', topoSchema) // 改数据对象和集合关联(集合名称, schema对象)

module.exports = Topo