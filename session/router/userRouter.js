const express=require('express')
const router= express.Router()
const User=require('../db/model/userModel')
const  JWT=require('../utils/jwt')
let codes={}  //通过内存保存验证码
/**
 * @api {post} /user/reg  用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us  用户名.
 * @apiParam {String} ps 用户密码.
 * @apiParam {String} code 验证码.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/reg',(req,res)=>{
// 获取数据
   let {us,ps,code}=req.body
  //  if(!us || !ps) {return res.send({err:-1,msg:'参数错误'})}

  if(us&&ps&&code){
      //判断验证码是否ok
  console.log(codes[us]) 
  console.log(code)
  console.log(codes)
  if(codes[us]!=code){return res.send({err:-4,msg : '验证码错误'})}
    User.find({us})
    .then((data)=>{
      if(data.length===0){
          // 用户名不存在 可以注册
          return User.insertMany({us:us,ps:ps})
      }else{
        res.send({err:-3,msg:'用户名已存在'})
      }
    })  
    .then(()=>{
      res.send({err:0,msg:'注册ok'})
    })
    .catch((err)=>{
      res.send({err:-2,msg:'注册err'})
    })
  }else{
    return res.send({err:-1,msg:'参数错误'})
  }
   console.log(us,ps)
// 数据处理
// 返回数据

})

/**
 * @api {post} /user/login  用户登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} us  用户名.
 * @apiParam {String} ps 用户密码.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/logOut',(req,res)=>{
  req.session.destroy()//  销毁保存的session
  res.send({err:0,msg:'已退出'})
})
router.post('/login',(req,res)=>{
  let {us,ps}=req.body
  if(!us||!ps ){ return res.send({err:-1,msg : '参数错误'})}
  // {us:us,ps:ps}  === {us,ps}
  User.find({username: us,password: ps})
  .then((data)=>{
    if(data.length>0){
       // 登录成功后将用户的相关信息存到session
      //  req.session.login=true
      //  req.session.name=us
      let token=JWT.creatToken({login:true,name:us})
      res.send({err:0,msg : '登录ok',token})
    }else{
      res.send({err:-2,msg : '用户名或密码不正确'})
    }
      // console.log(data)
  })
  .catch((err)=>{
    return res.send({err:-1,msg : '内部错误'})
  })

})

module.exports=router
/*
nodemon  自动更新代码
npm  install  nodemon -g
node server.js
nodemon server.js
*/ 