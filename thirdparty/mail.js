
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
  html:  `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
            
      #outlook a {
        padding: 0;
      }
  
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      p {
        display: block;
        margin: 13px 0;
      }
     .mjml-body {margin: 0 auto;width: fit-content;} .mjml-table {
              width: 600px!important;
            }
          </style>
    <!--[if mso]>
          <noscript>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          </noscript>
          <![endif]-->
    <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
  
        .mj-column-per-33-333333333333336 {
          width: 33.333333333333336% !important;
          max-width: 33.333333333333336%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
  
      .moz-text-html .mj-column-per-33-333333333333336 {
        width: 33.333333333333336% !important;
        max-width: 33.333333333333336%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
  
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css">
      .product-image img {
        max-width: 180px;
        margin: 0 auto;
        margin-bottom: 16px;
      }
  
      .ellipsis-text div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 148px;
        margin-top: -20px;
      }
  
      .ellipsis-button p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100px;
      }
    </style>
  </head>
  
  <body style="word-spacing:normal;background-color:#efeeea;">
    <div class="mjml-body" style="background-color:#efeeea;">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="mjml-table-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="mjml-table-outlook" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div class="mjml-table" style="margin:0px auto;max-width:600px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                    <tbody>
                      <tr>
                        <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="font-size:0px;padding:10px 25px 10px 25px;word-break:break-word;">
                                            <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;line-height:1.7;text-align:left;color:#000000;">Make it easy for everyone to compose emails!</div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="mjml-table-outlook" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div class="mjml-table" style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="border:none;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td style="border:none;vertical-align:top;padding:0px 0px 0px 0px;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                            <tbody>
                              <tr>
                                <td align="center" style="font-size:0px;padding:4px 0;word-break:break-word;">
                                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                  <div style="margin:0px auto;border-radius:3px;max-width:600px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;border-radius:3px;">
                                      <tbody>
                                        <tr>
                                          <td style="direction:ltr;font-size:0px;padding:4px 0;text-align:center;">
                                            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                            <div style="margin:0px auto;max-width:600px;">
                                              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                                <tbody>
                                                  <tr>
                                                    <td style="direction:ltr;font-size:0px;padding:4px 0;text-align:center;">
                                                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                                                      <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center" class="product-image" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td style="width:150px;">
                                                                        <img height="100" src="https://quick-cep.oss-cn-shanghai.aliyuncs.com/217/ma/template/example/689805571351642112/0e7331f3-30b6-49ab-a0ab-fffd23383685-image.png" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;font-size:13px;" width="150" />
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="22px" style="vertical-align:top;height:22px;"><![endif]-->
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;line-height:22px;text-align:center;color:rgba(0,0,0,0.85);height:22px;">1</div>
                                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:12px;line-height:20px;text-align:center;color:rgba(0,0,0,0.65);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:16px;font-weight:500;line-height:24px;text-align:center;color:rgba(0,0,0,0.85);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" vertical-align="middle" class="ellipsis-button" style="font-size:0px;padding:5px 16px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" bgcolor="#ff6600" role="presentation" style="border:none;border-radius:4px;cursor:auto;height:32px;mso-padding-alt:10px 25px;background:#ff6600;" valign="middle">
                                                                        <p style="display:inline-block;background:#ff6600;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:4px;"> 123 </p>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                      <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                                                      <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center" class="product-image" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td style="width:150px;">
                                                                        <img height="100" src="https://quick-cep.oss-cn-shanghai.aliyuncs.com/217/ma/template/example/689805571351642112/0e7331f3-30b6-49ab-a0ab-fffd23383685-image.png" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;font-size:13px;" width="150" />
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="22px" style="vertical-align:top;height:22px;"><![endif]-->
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;line-height:22px;text-align:center;color:rgba(0,0,0,0.85);height:22px;">2</div>
                                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:12px;line-height:20px;text-align:center;color:rgba(0,0,0,0.65);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:16px;font-weight:500;line-height:24px;text-align:center;color:rgba(0,0,0,0.85);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" vertical-align="middle" class="ellipsis-button" style="font-size:0px;padding:5px 16px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" bgcolor="#ff6600" role="presentation" style="border:none;border-radius:4px;cursor:auto;height:32px;mso-padding-alt:10px 25px;background:#ff6600;" valign="middle">
                                                                        <p style="display:inline-block;background:#ff6600;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:4px;"> 123 </p>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                      <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                                                      <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center" class="product-image" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td style="width:150px;">
                                                                        <img height="100" src="https://quick-cep.oss-cn-shanghai.aliyuncs.com/217/ma/template/example/689805571351642112/0e7331f3-30b6-49ab-a0ab-fffd23383685-image.png" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;font-size:13px;" width="150" />
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="22px" style="vertical-align:top;height:22px;"><![endif]-->
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;line-height:22px;text-align:center;color:rgba(0,0,0,0.85);height:22px;">3</div>
                                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:12px;line-height:20px;text-align:center;color:rgba(0,0,0,0.65);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:16px;font-weight:500;line-height:24px;text-align:center;color:rgba(0,0,0,0.85);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" vertical-align="middle" class="ellipsis-button" style="font-size:0px;padding:5px 16px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" bgcolor="#ff6600" role="presentation" style="border:none;border-radius:4px;cursor:auto;height:32px;mso-padding-alt:10px 25px;background:#ff6600;" valign="middle">
                                                                        <p style="display:inline-block;background:#ff6600;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:4px;"> 123 </p>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                      <!--[if mso | IE]></td></tr></table><![endif]-->
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            <!--[if mso | IE]></td></tr></table></td><td class="" style="" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                            <div style="margin:0px auto;max-width:600px;">
                                              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                                <tbody>
                                                  <tr>
                                                    <td style="direction:ltr;font-size:0px;padding:4px 0;text-align:center;">
                                                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                                                      <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center" class="product-image" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td style="width:150px;">
                                                                        <img height="100" src="https://quick-cep.oss-cn-shanghai.aliyuncs.com/217/ma/template/example/689805571351642112/0e7331f3-30b6-49ab-a0ab-fffd23383685-image.png" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;font-size:13px;" width="150" />
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="22px" style="vertical-align:top;height:22px;"><![endif]-->
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;line-height:22px;text-align:center;color:rgba(0,0,0,0.85);height:22px;">4</div>
                                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:12px;line-height:20px;text-align:center;color:rgba(0,0,0,0.65);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" class="ellipsis-text" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                <div style="font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:16px;font-weight:500;line-height:24px;text-align:center;color:rgba(0,0,0,0.85);">123</div>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td align="center" vertical-align="middle" class="ellipsis-button" style="font-size:0px;padding:5px 16px;word-break:break-word;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" bgcolor="#ff6600" role="presentation" style="border:none;border-radius:4px;cursor:auto;height:32px;mso-padding-alt:10px 25px;background:#ff6600;" valign="middle">
                                                                        <p style="display:inline-block;background:#ff6600;color:#ffffff;font-family:lucida Grande,Verdana,Microsoft YaHei;font-size:14px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:4px;"> 123 </p>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                      <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                                                      <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                          <tbody>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                      <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:200px;" ><![endif]-->
                                                      <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                          <tbody>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                      <!--[if mso | IE]></td></tr></table><![endif]-->
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
  
  </html>` // html body
}

// 发送邮件
transporter.sendMail(mailobj, (err, data) => {
  console.log(err)
  console.log(data)
})