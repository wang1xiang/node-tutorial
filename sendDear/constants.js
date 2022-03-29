//纪念日
const START_DAY = "2020/6/13";
//当地拼音,需要在下面的墨迹天气url确认
const LOCAL = "beijing/beijing";

//发送者邮箱厂家
const EMAIL_HOST = "smtp.163.com";
//发送者邮箱账户SMTP授权码
const EMAIL_AUTH = {
  user: "wangxiang1324@163.com",
  pass: "RCIOKVWPLGBKIYZZ"
};
//发送者昵称与邮箱地址
const EMAIL_FROM = '"darling" <wangxiang1324@163.com>';
//接收者邮箱地
const EMAIL_TO = "xufx@cernet.com";
//邮件主题
const EMAIL_SUBJECT = "一封暖暖的小邮件";

//每日发送时间
const EMAIL_HOUR = 08;
const EMAIL_MINUTE= 30;

// 爬取数据的url
const ONE_URL = "http://wufazhuce.com/";
const WEATHER_URL = "https://tianqi.moji.com/weather/china/" + LOCAL;

module.exports = {
  START_DAY,
  EMAIL_HOST,
  EMAIL_AUTH,
  EMAIL_FROM,
  EMAIL_TO,
  EMAIL_SUBJECT,
  EMAIL_HOUR,
  EMAIL_MINUTE,
  ONE_URL,
  WEATHER_URL
}