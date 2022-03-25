const { EMAIL_AUTH, EMAIL_FROM, EMAIL_HOST, EMAIL_SUBJECT, EMAIL_TO } = require("../constants");

const nodemailer = require("nodemailer"); //发送邮件的node插件
const fs = require("fs"); //文件读写
const path = require("path"); //路径配置
const myejs = require("ejs"); //ejs模版引擎
// 发动邮件
const sendMail = (HtmlData) => {
  const template = myejs.compile(
    fs.readFileSync(path.resolve(__dirname, "email.ejs"), "utf8")
  );
  const html = template(HtmlData);

  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST, // 通过lib下的well-know/service.json
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: EMAIL_AUTH
  });

  let mailOptions = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: EMAIL_SUBJECT,
    html: html,
  };
  transporter.sendMail(mailOptions, (error, info = {}) => {
    if (error) {
      sendMail(HtmlData); //再次发送
    }
    console.log("静等下一次发送");
  });
  // sendImmediate(transporter, mailOptions)
};

// 测试发送
// const sendImmediate = (transporter, mailobj) => {
//   // 发送邮件
//   transporter.sendMail(mailobj, (err, data) => {
//     console.log(err)
//     console.log(data)
//   })
// }

module.exports = {
  sendMail
}