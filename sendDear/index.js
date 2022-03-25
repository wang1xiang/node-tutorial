const { getOneData } = require("./content/getContent");
const { getWeatherTips, getWeatherData } = require("./content/getWeatherContent");
const { EMAIL_HOUR, EMAIL_MINUTE, START_DAY } = require('./constants');
const { sendMail } = require('./content/sendEmail');

const schedule = require("node-schedule"); //定时器任务库
const getAllDataAndSendMail = () => {
  let HtmlData = {};
  let today = new Date();
  let initDay = new Date(START_DAY);
  let lastDay = Math.floor((today - initDay) / 1000 / 60 / 60 / 24);
  let todaystr =
    today.getFullYear() +
    " / " +
    (today.getMonth() + 1) +
    " / " +
    today.getDate();
  HtmlData["lastDay"] = lastDay;
  HtmlData["todaystr"] = todaystr;
  Promise.all([getOneData(), getWeatherTips(), getWeatherData()]).then(
    (data) => {
      HtmlData["todayOneData"] = data[0];
      HtmlData["weatherTip"] = data[1];
      HtmlData["threeDaysData"] = data[2];
      sendMail(HtmlData);
    }
  );
};

// node-schedule 定时任务处理
let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = EMAIL_HOUR;
rule.minute = EMAIL_MINUTE;
console.log("NodeMail: 开始等待目标时刻...");
let j = schedule.scheduleJob(rule, function () {
  console.log("执行任务");
  getAllDataAndSendMail();
});
