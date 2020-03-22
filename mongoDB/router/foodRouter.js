const express = require('express')
const router = express.Router()
const foodModel = require('../db/model/foodModel')

/**
 * @api {post} /food/add 增加食物
 * @apiName 增加食物
 * @apiGroup Food
 *
 * @apiParam {String} name 名称.
 * @apiParam {String} price 价格.
 * @apiParam {String} desc 描述.
 * @apiParam {String} typename 类别名.
 * @apiParam {String} typeid 类别id.
 * @apiParam {String} img 图片.
 * 
 * @apiSuccess {String} err 数字码.
 * @apiSuccess {String} msg 结果.
 */
router.post('/add', (req, res) => {
  // let data = {
  //   name: '油闷大虾',
  //   price: '99$',
  //   desc: '五颗星',
  //   typename: '热菜',
  //   typeid: 1,
  //   img: '/public/image/useravatar.png'
  // }
  
  let {name, price, desc, typename, typeid, img} = req.body
  
  if (!name || !price || !desc || !typename || !typeid || !img) return res.send({ err: -1, msg: '参数错误' })
  foodModel.insertMany({ name, price, desc, typename, typeid, img })
    .then(data => {
      res.send({ err: 0, msg: '添加成功' })
    })
    .catch(err => {
      res.send({ err: -1, msg: '添加失败' })
    })
})

/**
 * @api {post} /food/update 修改食物
 * @apiName 修改食物
 * @apiGroup Food
 *
 * @apiParam {String} name 名称.
 * @apiParam {String} price 价格.
 * @apiParam {String} desc 描述.
 * @apiParam {String} typename 类别名.
 * @apiParam {String} typeid 类别id.
 * @apiParam {String} img 图片.
 * 
 * @apiSuccess {String} err 数字码.
 * @apiSuccess {String} msg 结果.
 */
router.post('/update', (req, res) => {
  let {name, price, desc, typename, typeid, img, _id} = req.body
  
  if (!name || !price || !desc || !typename || !typeid || !img) return res.send({ err: -1, msg: '参数错误' })
  foodModel.updateOne({ _id}, { name, price, desc, typename, typeid, img })
    .then(data => {
      res.send({ err: 0, msg: '修改成功' })
    })
    .catch(err => {
      res.send({ err: -1, msg: '修改失败' })
    })
})
/**
 * @api {post} /food/getInfoByType 分类查询
 * @apiName 分类查询
 * @apiGroup Food
 *
 * @apiParam {String} typeid 类别id.
 * 
 * @apiSuccess {String} err 数字码.
 * @apiSuccess {String} msg 结果.
 */
router.post('/getInfoByType', (req, res) => {
  let { typeid } = req.body

  foodModel.find({ typeid })
    .then(data => {
      res.send({ err: 0, msg: '查询成功', data })
    })
    .catch(err => {
      res.send({ err: -1, msg: err })
    })
})

/**
 * @api {post} /food/getInfoByPage 分页查询
  * @apiName getInfoByPage
 * @apiGroup Food
 *
 * @apiParam {Number} pageSize  每页数据条数.
* @apiParam {Number}  page  那一页.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/getInfoByPage',(req,res)=>{
  let pageSize=req.body.pageSize || 2 //设置默认值
  let page =req.body.page || 1
  let count=0
  foodModel.find()
  .then((list)=>{
    count=list.length //获取总的数据条数
    return  foodModel.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize))
  })
  .then((data)=>{
    // res.send({err:0,msg:'查询ok',list:data})
    let  allpage=Math.ceil(count/pageSize)
    res.send({err:0,msg:'查询ok',info:{list:data,count:count,allpage:allpage}})
  })
  .catch(()=>{
    res.send({err:-1,msg:'查询失败'})
  })

 })

/**
 * @api {post} /food/delete 删除
 * @apiName 删除
 * @apiGroup Food
 *
 * @apiParam {String} _id id.
 * 
 * @apiSuccess {String} err 数字码.
 * @apiSuccess {String} msg 结果.
 */
router.post('/delete', (req, res) => {
  let { _id } = req.body

  foodModel.remove({ _id })
    .then(data => {
      res.send({ err: 0, msg: '删除成功'})
    })
    .catch(err => {
      res.send({ err: -1, msg: err })
    })
})
module.exports = router