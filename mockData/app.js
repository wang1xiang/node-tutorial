const express = require("express");
const bodyParse = require("body-parser");

const app = express();

/*为app添加中间件处理跨域请求*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyParse.json());
app.use(
  bodyParse.urlencoded({
    extended: false, // 扩展模式
    limit: 2 * 1024 * 1024, // 限制2m
  })
);


const testRouter = require('./router/test')
const analyticsRouter = require('./router/analytics')
const customerRouter = require('./router/customer')
const campaignRouter = require('./router/campaign');
const flowRouter = require('./router/flow');
const imRouter = require('./router/im');
const reportRouter = require('./router/report');
app.use('/mockJS/api/testApi', testRouter)
app.use('/mockJS/api/robotAnalysis', analyticsRouter)
app.use('/mockJS/node/trigger', flowRouter)
app.use('/mockJS/api/customerAnalysis', customerRouter)
app.use('/mockJS/api/compaign', campaignRouter)
app.use('/mockJS/api/im', imRouter)
app.use('/mockJS/api/report', reportRouter)

app.listen(8080, () => {
  console.info("服务启动http://localhost:8080");
});
