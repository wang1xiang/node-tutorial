const express = require('express')
const router = express.Router()
const frameModel = require('../db/model/frameView')
const deviceModel = require('../db/model/deviceList')

// delete: 'frame/delete',
// getAll: 'frame/getAll',
// getInfo: 'frame/getInfo',
// saveCabinet: 'frame/saveCabinet',
// getRoomInfo: 'frame/getRoomInfo',
// getDeviceList: 'frame/getDeviceList'

router.post('/saveCabinet', (req, res) => {
  
  let {size, name, backView, order, frontList} = req.body
  
  if (!name || !size || !frontList) return res.send({ errorCode: -1, message: '参数错误' })

  frameModel.insertMany({ name, size, backView, order, frontList }).then(data => {
      res.send({ errorCode: 0, message: '添加成功' })
    }).catch(err => {
      res.send({ errorCode: -1, message: '添加失败' })
    })
})
router.post('/getInfo', (req, res) => {

  let responseBody = [
    {
      key: '设备',
      size: 0
    }, {
      key: '可用单元数',
      size: 0
    }
  ]
  deviceModel.find({}).then(data => {
    responseBody[0]['size'] = data.length
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  }).finally(() => {
    frameModel.find({}).then(data => {
      responseBody[1].size = data.map(item => item.size).reduce((prev, curr, idx, arr) => prev + curr)
    }).catch(err => {
      res.send({ errorCode: -1, message: err })
    }).finally(() => {
      res.send({ errorCode: 0, message: '成功', responseBody })
    })
  })
})

router.post('/getAll', (req, res) => {

  frameModel.find({}).then(data => {
    data.map(item => {
      item.free = item.size - item.frontList.length
    })
    res.send({ errorCode: 0, message: '查询成功', responseBody: data })
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  })
})

router.post('/delete', (req, res) => {
  let { id } = req.body

  frameModel.deleteOne({ _id: id }).then(data => {
    res.send({ errorCode: 0, message: '删除成功'})
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  })
})
module.exports = router