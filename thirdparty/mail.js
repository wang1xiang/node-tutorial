
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
  to: '756638369@qq.com', // list of receivers
  subject: '验证码', // Subject line
  // text: '您的验证码是541544，有效期5分钟', // plain text body
  html:  `
  
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <!--[if gte mso 9]>
          <xml>
              <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
      <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
          
          <style type="text/css">
              html {
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

          </style>
      
          <style type="text/css">
              *, *::before, *::after {
box-sizing: inherit;
}

          </style>
      
          <style type="text/css">
              strong, b {
font-weight: 700;
}

          </style>
      
          <style type="text/css">
              body {
color: #263238;
margin: 0;
font-size: 0.875rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 400;
line-height: 1.43;
letter-spacing: 0.01071em;
background-color: #fff;
}

          </style>
      
          <style type="text/css">
              @media print {
body {
  background-color: #fff;
}
}

          </style>
      
          <style type="text/css">
              body::backdrop {
background-color: #fff;
}

          </style>
      
          <style type="text/css">
              .MuiButtonBase-root {
color: inherit;
border: 0;
cursor: pointer;
margin: 0;
display: inline-flex;
outline: 0;
padding: 0;
position: relative;
align-items: center;
user-select: none;
border-radius: 0;
vertical-align: middle;
-moz-appearance: none;
justify-content: center;
text-decoration: none;
background-color: transparent;
-webkit-appearance: none;
-webkit-tap-highlight-color: transparent;
}

          </style>
      
          <style type="text/css">
              .MuiButtonBase-root::-moz-focus-inner {
border-style: none;
}

          </style>
      
          <style type="text/css">
              .MuiButtonBase-root.Mui-disabled {
cursor: default;
pointer-events: none;
}

          </style>
      
          <style type="text/css">
              .jss1 {
}

          </style>
      
          <style type="text/css">
              .MuiButton-root {
color: #263238;
padding: 6px 16px;
font-size: 0.875rem;
min-width: 64px;
box-sizing: border-box;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 500;
line-height: 1.75;
border-radius: 4px;
letter-spacing: 0.02857em;
text-transform: uppercase;
}

          </style>
      
          <style type="text/css">
              .MuiButton-root:hover {
text-decoration: none;
background-color: rgba(38, 50, 56, 0.04);
}

          </style>
      
          <style type="text/css">
              .MuiButton-root.Mui-disabled {
color: rgba(0, 0, 0, 0.26);
}

          </style>
      
          <style type="text/css">
              @media (hover: none) {
.MuiButton-root:hover {
  background-color: transparent;
}
}

          </style>
      
          <style type="text/css">
              .MuiButton-root:hover.Mui-disabled {
background-color: transparent;
}

          </style>
      
          <style type="text/css">
              .MuiButton-label {
width: 100%;
display: inherit;
align-items: inherit;
justify-content: inherit;
}

          </style>
      
          <style type="text/css">
              .MuiButton-text {
padding: 6px 8px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-textPrimary {
color: #3949ab;
}

          </style>
      
          <style type="text/css">
              .MuiButton-textPrimary:hover {
background-color: rgba(57, 73, 171, 0.04);
}

          </style>
      
          <style type="text/css">
              .MuiButton-textSecondary {
color: #5850EC;
}

          </style>
      
          <style type="text/css">
              .MuiButton-textSecondary:hover {
background-color: rgba(88, 80, 236, 0.04);
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlined {
border: 1px solid rgba(0, 0, 0, 0.23);
padding: 5px 15px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlined.Mui-disabled {
border: 1px solid rgba(0, 0, 0, 0.12);
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlinedPrimary {
color: #3949ab;
border: 1px solid rgba(57, 73, 171, 0.5);
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlinedPrimary:hover {
border: 1px solid #3949ab;
background-color: rgba(57, 73, 171, 0.04);
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlinedSecondary {
color: #5850EC;
border: 1px solid rgba(88, 80, 236, 0.5);
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlinedSecondary:hover {
border: 1px solid #5850EC;
background-color: rgba(88, 80, 236, 0.04);
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlinedSecondary.Mui-disabled {
border: 1px solid rgba(0, 0, 0, 0.26);
}

          </style>
      
          <style type="text/css">
              .MuiButton-contained {
color: rgba(0, 0, 0, 0.87);
box-shadow: 0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25);
background-color: #e0e0e0;
}

          </style>
      
          <style type="text/css">
              .MuiButton-contained:hover {
box-shadow: 0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25);
background-color: #d5d5d5;
}

          </style>
      
          <style type="text/css">
              .MuiButton-contained.Mui-focusVisible {
box-shadow: 0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25);
}

          </style>
      
          <style type="text/css">
              .MuiButton-contained:active {
box-shadow: 0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25);
}

          </style>
      
          <style type="text/css">
              .MuiButton-contained.Mui-disabled {
color: rgba(0, 0, 0, 0.26);
box-shadow: none;
background-color: rgba(0, 0, 0, 0.12);
}

          </style>
      
          <style type="text/css">
              .MuiButton-contained:hover.Mui-disabled {
background-color: rgba(0, 0, 0, 0.12);
}

          </style>
      
          <style type="text/css">
              .MuiButton-containedPrimary {
color: #fff;
background-color: #3949ab;
}

          </style>
      
          <style type="text/css">
              .MuiButton-containedPrimary:hover {
background-color: rgb(39, 51, 119);
}

          </style>
      
          <style type="text/css">
              .MuiButton-containedSecondary {
color: #fff;
background-color: #5850EC;
}

          </style>
      
          <style type="text/css">
              .MuiButton-containedSecondary:hover {
background-color: rgb(61, 56, 165);
}

          </style>
      
          <style type="text/css">
              .MuiButton-disableElevation {
box-shadow: none;
}

          </style>
      
          <style type="text/css">
              .MuiButton-disableElevation:hover {
box-shadow: none;
}

          </style>
      
          <style type="text/css">
              .MuiButton-disableElevation.Mui-focusVisible {
box-shadow: none;
}

          </style>
      
          <style type="text/css">
              .MuiButton-disableElevation:active {
box-shadow: none;
}

          </style>
      
          <style type="text/css">
              .MuiButton-disableElevation.Mui-disabled {
box-shadow: none;
}

          </style>
      
          <style type="text/css">
              .MuiButton-colorInherit {
color: inherit;
border-color: currentColor;
}

          </style>
      
          <style type="text/css">
              .MuiButton-textSizeSmall {
padding: 4px 5px;
font-size: 0.8125rem;
}

          </style>
      
          <style type="text/css">
              .MuiButton-textSizeLarge {
padding: 8px 11px;
font-size: 0.9375rem;
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlinedSizeSmall {
padding: 3px 9px;
font-size: 0.8125rem;
}

          </style>
      
          <style type="text/css">
              .MuiButton-outlinedSizeLarge {
padding: 7px 21px;
font-size: 0.9375rem;
}

          </style>
      
          <style type="text/css">
              .MuiButton-containedSizeSmall {
padding: 4px 10px;
font-size: 0.8125rem;
}

          </style>
      
          <style type="text/css">
              .MuiButton-containedSizeLarge {
padding: 8px 22px;
font-size: 0.9375rem;
}

          </style>
      
          <style type="text/css">
              .MuiButton-fullWidth {
width: 100%;
}

          </style>
      
          <style type="text/css">
              .MuiButton-startIcon {
display: inherit;
margin-left: -4px;
margin-right: 8px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-startIcon.MuiButton-iconSizeSmall {
margin-left: -2px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-endIcon {
display: inherit;
margin-left: 8px;
margin-right: -4px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-endIcon.MuiButton-iconSizeSmall {
margin-right: -2px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-iconSizeSmall > *:first-child {
font-size: 18px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-iconSizeMedium > *:first-child {
font-size: 20px;
}

          </style>
      
          <style type="text/css">
              .MuiButton-iconSizeLarge > *:first-child {
font-size: 22px;
}

          </style>
      

      <style type="text/css">
          .mainClass{
              width: 58.333333333333336%
          }
      </style>
      <style type="text/css">
          .braft-output-content p{min-height:1em}.braft-output-content .image-wrap img{max-width:100%;height:auto}.braft-output-content ul,.braft-output-content ol{margin:16px 0;padding:0}.braft-output-content blockquote{margin:0 0 10px 0;padding:15px 20px;background-color:#f1f2f3;border-left:solid 5px #ccc;color:#666;font-style:italic}.braft-output-content pre{max-width:100%;max-height:100%;margin:10px 0;padding:15px;overflow:auto;background-color:#f1f2f3;border-radius:3px;color:#666;font-family:monospace;font-size:14px;font-weight:normal;line-height:16px;}.braft-output-content pre pre{margin:0;padding:0}
          @media  (max-width: 768px) {
              /* For mobile phones: */
              .mainClass {
                  width: 100%;
              }
          }
          @media screen and (max-width: 600px) {
              table td#containerCol {
                  display: flex;
                  width: 100%;
              }
          }
      </style>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
     
    </head>
    <body style="
          background-color:#e0e0e0;
          background-image: url();
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
      ">
      <table style="width:100%;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="center" style="width:100%"><tr><td style="padding:0"><div style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div id="Main" class="mainClass"><table style="width:100%;background-image:url();background-color:#ffffff;height:100%;border-radius:0;background-repeat:no-repeat;background-size:cover;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="left" style="width:100%"><tr><td style="padding:0"><div style="text-align:center;align:center;background-image:url();background-color:#00000000;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><a href="#" target="_self" style="pointer-events:none"><img src="https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF" width="100%" alt="Not found" style="width:100%;border-radius:0"/></a></div></div></td></tr><tr><td style="padding:0"><div style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><table style="width:100%;background-image:url();background-color:#FFFFFF00;height:100%;border-radius:0;background-repeat:no-repeat;background-size:cover;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="left" style="width:100%"><tr><td width="50%" style="padding:0" id="containerCol"><table style="width:100%;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="left" style="width:100%"><tr><td style="padding:0"><div style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><table style="width:100%;background-image:url();background-color:#FFFFFF00;height:100%;border-radius:0;background-repeat:no-repeat;background-size:cover;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="left" style="width:100%"><tr><td style="padding:0"><div style="text-align:center;align:center;background-image:url();background-color:#F12805;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div id="Af9aKExB-O" style="width:100%"><a class="MuiButtonBase-root MuiButton-root MuiButton-outlined" tabindex="0" aria-disabled="false" href="#" target="_blank" style="size:medium;variant:outlined;color:#F1E7E7;font-family:-apple-system,BlinkMacSystemFont,‘Segoe UI’,Roboto,Helvetica,Arial,sans-serif,‘Apple Color Emoji’,‘Segoe UI Emoji’,‘Segoe UI Symbol’;border-radius:4px;background-color:#170FF6;display:inline-block"><span class="MuiButton-label">Click me</span></a></div></div></td></tr></tbody></table></div></div></td></tr></tbody></table></td><td width="50%" style="padding:0" id="containerCol"><table style="width:100%;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="left" style="width:100%"><tr><td style="padding:0"><div style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><table style="width:100%;background-image:url();background-color:#FFFFFF00;height:100%;border-radius:0;background-repeat:no-repeat;background-size:cover;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="left" style="width:100%"><tr><td style="padding:0"><div style="margin-bottom:0;margin-top:0;margin-right:0;margin-left:0;background-image:url();background-color:#00000000"><div style="width:100%"><div class="MuiBox-root jss1 braft-output-content" style="padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;text-align:left;border-radius:0;height:auto;font-family:-apple-system,BlinkMacSystemFont,‘Segoe UI’,Roboto,Helvetica,Arial,sans-serif,‘Apple Color Emoji’,‘Segoe UI Emoji’,‘Segoe UI Symbol’">This is a new Text block. Change the text.</div></div></div></td></tr></tbody></table></div></div></td></tr></tbody></table></td></tr></tbody></table></div></div></td></tr></tbody></table></div></div></td></tr></tbody></table>
      
    </body>
      <script type="text/javascript">
        var w=window.innerWidth;
        if(w < 800) document.getElementById("Main").className=("MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12");
      </script>
  </html>

  ` // html body
}

// 发送邮件
transporter.sendMail(mailobj, (err, data) => {
  console.log(err)
  console.log(data)
})