const express = require('express')
const router = express.Router()
const deviceModel = require('../db/model/device')

router.post('/addDevice', (req, res) => {
  
  let { id, name, ip, label, relation } = req.body
  
  if (!id || !name || !label|| !ip|| !relation) return res.send({ errorCode: -1, message: '参数错误' })

  deviceModel.insertMany({ id, name, label, ip, relation }).then(data => {
      res.send({ errorCode: 0, message: '添加成功' })
    }).catch(err => {
      res.send({ errorCode: -1, message: '添加失败' })
    })
})

router.post('/getdeviceByLabel', (req, res) => {

  let { label } = req.body
  
  if (!label) return res.send({ errorCode: -1, message: '参数错误' })

  deviceModel.find({ label }).then(data => {
    data = data.map(item => {
      const { id, name, label, ip } = item
      return { id, name: name || ip, label }
    })
    res.send({ errorCode: 0, message: '查询成功', responseBody: data })
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  })
})

module.exports = router