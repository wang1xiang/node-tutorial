
'use strict';
// npm init --yes
const nodemailer = require('nodemailer');

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: 'smtp.163.com', // 通过lib下的well-know/service.json
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "wangxiang1324@163.com",
  pass: "RCIOKVWPLGBKIYZZ"
  }
})

// 邮件信息
let mailobj = {
  from: '"Fred Foo 👻" <wangxiang1324@163.com>', // sender address
  to: 'xufx@cernet.com', // list of receivers
  subject: '验证码', // Subject line
  text: '您的验证码是541544，有效期5分钟', // plain text body
  // html: '<b>Hello world?</b>' // html body
}

// 发送邮件
transporter.sendMail(mailobj, (err, data) => {
  console.log(err)
  console.log(data)
})