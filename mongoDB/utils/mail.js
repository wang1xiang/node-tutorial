
'use strict';
// npm init --yes
const nodemailer = require('nodemailer');

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: 'smtp.qq.com', // 通过lib下的well-know/service.json
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '756638369@qq.com',
    pass: 'ahyunqgrphjjbaia' // smtp 验证码
  }
})
function send(mail, code) {
  // 邮件信息
  let mailobj = {
    from: '"Fred Foo 👻" <756638369@qq.com>', // sender address
    to: mail, // list of receivers
    subject: '验证码', // Subject line
    text: `您的验证码是${code}，有效期5分钟`, // plain text body
    // html: '<b>Hello world?</b>' // html body
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailobj, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

module.exports = { send }