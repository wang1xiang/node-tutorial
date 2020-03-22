const express = require('express')
const router = express.Router()
const deviceModel = require('../db/model/deviceList')

// delete: 'frame/delete',
// getAll: 'frame/getAll',
//   getInfo: 'frame/getInfo',
//   saveCabinet: 'frame/saveCabinet',
//   getRoomInfo: 'frame/getRoomInfo',
//   getDeviceList: 'frame/getDeviceList'

router.post('/add', (req, res) => {
  
  let {name, size} = req.body
  
  if (!name || !size) return res.send({ errorCode: -1, message: '参数错误' })
  deviceModel.insertMany({ name, size })
    .then(data => {
      res.send({ errorCode: 0, message: '添加成功' })
    })
    .catch(err => {
      res.send({ errorCode: -1, message: '添加失败' })
    })
})

router.post('/getDeviceList', (req, res) => {

  deviceModel.find({})
    .then(data => {
      res.send({ errorCode: 0, message: '查询成功', responseBody: data })
    })
    .catch(err => {
      res.send({ errorCode: -1, message: err })
    })
})

module.exports = router