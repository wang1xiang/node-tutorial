const express = require('express')
const router = express.Router()
const request = require('request')
const relationModel = require('../db/model/relationView')
const deviceModel = require('../db/model/device')

router.post('/addRelation', (req, res) => {
  
  let { source, target, label } = req.body
  
  if (!source || !target || !label) return res.send({ errorCode: -1, message: '参数错误' })

  relationModel.insertMany({ source, target, label }).then(data => {
      res.send({ errorCode: 0, message: '添加成功' })
    }).catch(err => {
      res.send({ errorCode: -1, message: '添加失败' })
    })
})

router.post('/getModelRelationships', (req, res) => {
  
  let { modelId } = req.body
  const url = 'http://192.168.2.32:8080/ops/cmdb/model/getModelRelationships';
  request({
    url,
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      token: '852213cc70ae44de87b1f8d166eeb65d'
    },
    body: {
      modelId
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(({ errorCode: 0, message: '查询成功', responseBody: body.responseBody }))
    } else {
      res.send({ errorCode: -1, message: error })
    }
  })
})

router.post('/getRelationById', (req, res) => {

  let { id } = req.body
  
  if (!id) return res.send({ errorCode: -1, message: '参数错误' })

  let deviceList = []
  deviceModel.find({ id }).then(data => {
    let actions = []
    data[0].relation.forEach(item => {
      const action = () => {
        return new Promise(resolve => {
          deviceModel.find({ id: item.target }).then(data => {
            deviceList = [ ...deviceList, ...data ]
            resolve()
          })
        })
      }
      actions.push(action())
    })
    Promise.all(actions).then(() => {
      res.send({ errorCode: 0, message: '查询成功', responseBody: deviceList })
    })
  }).catch(err => {
    res.send({ errorCode: -1, message: err })
  })
})

module.exports = router