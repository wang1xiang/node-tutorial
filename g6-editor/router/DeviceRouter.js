const express = require('express')
const router = express.Router()
const request = require('request')
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

router.post('/getByModelId', (req, res) => {
  let { modelId } = req.body
  if (!modelId) return res.send({ errorCode: -1, message: '参数错误' })

  const url = 'http://192.168.2.32:8080/ops/cmdb/instance/getByModelId';
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

router.post('/getById', (req, res) => {
  let { modelId, uuid } = req.body
  if (!modelId || !uuid) return res.send({ errorCode: -1, message: '参数错误' })

  const url = 'http://192.168.2.32:8080/ops/cmdb/instance/getById';
  request({
    url,
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      token: '852213cc70ae44de87b1f8d166eeb65d'
    },
    body: {
      modelId,
      uuid
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(({ errorCode: 0, message: '查询成功', responseBody: body.responseBody }))
    } else {
      res.send({ errorCode: -1, message: error })
    }
  })
})

router.post('/addRelation', (req, res) => {
  let { uuid, relationships } = req.body
  if (!uuid || !relationships) return res.send({ errorCode: -1, message: '参数错误' })

  const url = 'http://192.168.2.32:8080/ops/cmdb/instance/addRelation';
  request({
    url,
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      token: '852213cc70ae44de87b1f8d166eeb65d'
    },
    body: {
      relationships,
      uuid
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(({ errorCode: 0, message: '查询成功', responseBody: body.responseBody }))
    } else {
      res.send({ errorCode: -1, message: error })
    }
  })
})

router.post('/getByModelIds', (req, res) => {
  let { modelIds } = req.body
  if (!modelIds) return res.send({ errorCode: -1, message: '参数错误' })

  const url = 'http://192.168.2.32:8080/ops/cmdb/instance/getByModelIds';
  request({
    url,
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      token: '852213cc70ae44de87b1f8d166eeb65d'
    },
    body: {
      modelIds
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(({ errorCode: 0, message: '查询成功', responseBody: body.responseBody }))
    } else {
      res.send({ errorCode: -1, message: error })
    }
  })
})

router.post('/getTree', (req, res) => {
  const url = 'http://192.168.2.32:8080/ops/cmdb/model/getModelTree';
  request({
    url,
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      token: '852213cc70ae44de87b1f8d166eeb65d'
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(({ errorCode: 0, message: '查询成功', responseBody: body.responseBody }))
    } else {
      res.send({ errorCode: -1, message: error })
    }
  })
})

router.post('/getCurrentAlert', (req, res) => {

  const { instanceId } = req.body
  const url = 'http://192.168.2.32:8080/ops/alert/handle/getCurrentAlert';
  request({
    url,
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      token: '852213cc70ae44de87b1f8d166eeb65d'
    },
    body: {
      instanceId
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(({ errorCode: 0, message: '查询成功', responseBody: body.responseBody }))
    } else {
      res.send({ errorCode: -1, message: error })
    }
  })
})

router.post('/getIndicatorHistory', (req, res) => {

  const { from, ip, kmibId, region, to } = req.body
  const url = 'http://192.168.2.32:8080/ops/smim/indicator/getIndicatorHistory';
  request({
    url,
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      token: '852213cc70ae44de87b1f8d166eeb65d'
    },
    body: {
      from,
      ip,
      kmibId,
      region,
      to,
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(({ errorCode: 0, message: '查询成功', responseBody: body.responseBody }))
    } else {
      res.send({ errorCode: -1, message: error })
    }
  })
})

router.post('/getModelProperties', (req, res) => {

  const { modelId } = req.body
  const url = 'http://192.168.2.32:8080/ops/cmdb/model/getModelProperties';
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

module.exports = router