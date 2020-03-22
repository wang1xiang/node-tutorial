const express=require('express')
const router= express.Router()
const multer= require('multer')

//设置保存规则
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
    // 指定文件路径
		cb(null, './static/img')
	},
	filename: function(req, file, cb) {
    // 指定文件名
    // 文件名重复覆盖
    // 后缀名发生改变
    // console.log('----',file)
    let exts=file.originalname.split('.')
    let ext=exts[exts.length-1]
    
    let tmpname=(new Date()).getTime()+parseInt(Math.random()*9999)
		cb(null, `${tmpname}.${ext}`);
	}
})

//设置过滤规则（可选）
var imageFilter = function(req, file, cb){
  var acceptableMime = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif']
  //微信公众号只接收上述四种类型的图片
  if(acceptableMime.indexOf(file.mimetype) !== -1){
      cb(null, true)
  }else{
      cb(null, false)
  }
}

//设置限制（可选）
var imageLimit = {
  fieldSize: '2MB'
}

//创建 multer 实例
var upload = multer({
	storage
})

// hehe要上传图片数据的key值 必须前后端统一
router.post('/upload',upload.single('hehe'),(req,res)=>{
  console.log(req.file)
  let {size,mimetype,path}=req.file
  let types=['jpg','jpeg','png','gif'] //允许上传的数据类型
  let tmpType=mimetype.split('/')[1]
  if(size>500000){
      return  res.send({err:-1,msg:'尺寸过大'})
  }else if(types.indexOf(tmpType)==-1){
      return  res.send({err:-2,msg:'媒体类型错误'})
  }else{
    let url=`/public/img/${req.file.filename}`
    res.send({err:0,msg:'ok',img:url})
  }
})

module.exports=router
