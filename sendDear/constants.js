//纪念日
const START_DAY = "2020/6/13";
//当地拼音,需要在下面的墨迹天气url确认
const LOCAL = "beijing/beijing";

//发送者邮箱厂家
const EMAIL_HOST = "smtp.qq.com";
//发送者邮箱账户SMTP授权码
const EMAIL_AUTH = {
  user: "756638369@qq.com",
  pass: "dwhalqagcjlobbei"
};
//发送者昵称与邮箱地址
const EMAIL_FROM = '"darling" <756638369@qq.com>';
//接收者邮箱地
const EMAIL_TO = "756638369@qq.com";
//邮件主题
const EMAIL_SUBJECT = "一封暖暖的小邮件";

//每日发送时间
const EMAIL_HOUR = 16;
const EMAIL_MINUTE= 17;

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