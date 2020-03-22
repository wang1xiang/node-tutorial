const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const Mail = require('../utils/mail')
const app = express()

// apidoc -i .\router\ -o .\apidoc\
let localCode = {}
/**
 * @api {post} /user/reg 用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 用户密码.
 * @apiParam {String} code 验证码.
 * 
 * @apiSuccess {String} err 数字码.
 * @apiSuccess {String} msg 结果.
 */
router.post('/reg', (req, res) => {
  // 获取数据 数据处理 返回数据
  const { us, ps, code } = req.body
  if (!us || !ps || !code) return res.send({ err: -1, msg: '参数错误'})
  if (localCode[us] !== code) return res.send({ err: -1, msg: '验证码错误' })
  User.find({ username: us }).then(res => {
    if (res.length === 0) {
      return User.insertMany({
        username: us,
        password: ps
      })
    } else {
      console.log('用户已存在')
      res.send({ err: -3, msg: '用户已存在' })
    }
  }).then(() => {
    res.send({ err: 0, msg: '注册成功' })
  }).catch(err => {
    res.send({ err: -2, msg: '注册失败' })
  })
})

/**
 * @api {post} /user/login 用户登录
 * @apiName 用户登录
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 用户密码.
 * @apiParam {String} code 验证码.
 * 
 * @apiSuccess {String} err 数字码.
 * @apiSuccess {String} msg 结果.
 */
router.post('/login', (req, res) => {
  const { us, ps, code } = req.body
  // if (!us || !ps || !code) return res.send({ err: -1, msg: '参数错误' })

  // if (codes[code] !== code) return res.send({ err: -1, msg: '验证码错误' })
  User.find({
    username: us,
    password: ps
  }).then(data => {
    if (data.length > 0) {
      res.send({ err: 0, msg: '登陆成功' })
    } else {
      res.send({ err: -1, msg: '用户名密码错误' })
    }
  }).catch(err => {
    return res.send({ err: -2, msg: '内部错误' })
  })
})

/**
 * @api {post} /user/getMailCode 获取验证码
 * @apiName 获取验证码
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} mail 邮箱地址.
 * 
 * @apiSuccess {String} err 数字码.
 * @apiSuccess {String} msg 结果.
 */
router.post('/getMailCode', (req, res) => {
  const { us, mail } = req.body
  let code = parseInt(Math.random() * 10000)
  Mail.send(mail, code).then(() => {
    res.send({ err: 0, msg: '验证码发送成功' })
    localCode[us] = code
  }).catch(err => {
    res.send({ err: -1, msg: err })
  })
})
module.exports = router