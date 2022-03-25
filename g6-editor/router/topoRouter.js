const express = require('express')
const router = express.Router()
const topoModel = require('../db/model/topoView')

router.post('/addTopoModel', (req, res) => {
  
  let { id, name, topoData, screenshot } = req.body
  
  if (!id || !name || !topoData || !screenshot) return res.send({ errorCode: -1, message: '参数错误' })

  topoModel.insertMany({ id, name, topoData, screenshot }).then(data => {
      res.send({ errorCode: 0, message: '添加成功' })
    }).catch(err => {
      res.send({ errorCode: -1, message: '添加失败' })
    })
})

router.post('/updateTopoModel', (req, res) => {
  
  let { id, name, topoData, screenshot } = req.body
  
  if (!id || !name || !topoData || !screenshot) return res.send({ errorCode: -1, message: '参数错误' })

  topoModel.updateOne({ id }, { name, topoData, screenshot }).then(data => {
      res.send({ errorCode: 0, message: '修改成功' })
    }).catch(err => {
      res.send({ errorCode: -1, message: '修改失败' })
    })
})


router.post('/getTopoModel', (req, res) => {

  topoModel.find().then(data => {
    res.send({ errorCode: 0, message: '查询成功', responseBody: data })
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  })
})

router.post('/getTopoModelById', (req, res) => {

  const { id } = req.body

  topoModel.find({ id }).then(data => {
    const topoData = data[0].topoData
    res.send({ errorCode: 0, message: '查询成功', responseBody: topoData })
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  })
})


router.post('/deleteTopoModel', (req, res) => {

  let { id } = req.body
  topoModel.deleteOne({ id }).then(data => {
    res.send({ errorCode: 0, message: '删除成功' })
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  })
})

module.exports = router