const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  desc: { type: String, required: true },
  typename: { type: String, required: true },
  typeid: { type: Number, required: true },
  img: { type: String, required: true }
})
let Food = mongoose.model('foods', foodSchema) // 改数据对象和集合关联(集合名称, schema对象)

module.exports = Food