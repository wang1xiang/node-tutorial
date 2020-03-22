const express = require('express')
const cors = require('cors')
var app = express()
app.use(cors())

/**
 * 文字等简单数据类型
 * 返回{data: xxx}
 */
app.get('/loginCount', (req, res) => {
  res.send({data: parseInt(Math.random() * 1000)})
})
app.get('/entrustCount', (req, res) => {
  res.send({data: parseInt(Math.random() * 1000)})
})
app.get('/transactionCount', (req, res) => {
  res.send({data: parseInt(Math.random() * 1000)})
})
/**
 * 折线图
 * data: [ 
 *  {
 *    x轴: xxx,
 *    y轴1: xxx,
 *    y轴2: xxx
 *  }
 * ]
 */
app.get('/entrustData', (req, res) => {
  res.send({
    "data":[
        {
            "time":new Date().getHours() - 4 + ":" + new Date().getMinutes(),
            "today":parseInt(Math.random()*100),
            "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() - 3 + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() - 2 + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() - 1 + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        }
    ]
  })
})
app.get('/transactionData', (req, res) => {
  res.send({
    "data":[
        {
            "time":new Date().getHours() - 4 + ":" + new Date().getMinutes(),
            "today":parseInt(Math.random()*100),
            "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() - 3 + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() - 2 + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() - 1 + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() + ":" + new Date().getMinutes(),
          "today":parseInt(Math.random()*100),
          "yesterday":parseInt(Math.random()*100)
        }
    ]
  })
})

/**
 * 表格类型
 * {
 *  columnData: [
 *    {
 *      key: 列头字段,
 *      name: 列头名
 *    }
 *  ],
 *  responseData: {
 *    total: 总数,
 *    data: [
 *      {
 *        key: value 根据列表头字段生成
 *      }
 *    ]
 *  }
 * }
 */
app.get('/functionTime', (req, res) => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data.push({
      funcNo: 'L0000001货币查询信息',
      time: Math.random().toFixed(2),
      size: parseInt(Math.random() * 100000) + ""
    })
  }
  res.send({
    columnData: [
      {
        key: 'funcNo',
        text: '功能号'
      }, {
        key: 'time',
        text: '时间'
      }, {
        key: 'size',
        text: '数量'
      }
    ],
    responseData: {
      total: 11,
      data
    }
  })
})
app.get('/perSecondRate', (req, res) => {
  res.send({
    "data":[
        {
            "time":new Date().getHours() - 6 + ":" + new Date().getMinutes(),
            "委托数":parseInt(Math.random()*100),
            "成交数":parseInt(Math.random()*100),
            "登陆次数":parseInt(Math.random()*100)
        },
        {
          "time":new Date().getHours() - 5 + ":" + new Date().getMinutes(),
          "委托数":parseInt(Math.random()*100),
          "成交数":parseInt(Math.random()*100),
          "登陆次数":parseInt(Math.random()*100)
        },{
          "time":new Date().getHours() - 4 + ":" + new Date().getMinutes(),
          "委托数":parseInt(Math.random()*100),
          "成交数":parseInt(Math.random()*100),
          "登陆次数":parseInt(Math.random()*100)
        },{
          "time":new Date().getHours() - 3 + ":" + new Date().getMinutes(),
          "委托数":parseInt(Math.random()*100),
          "成交数":parseInt(Math.random()*100),
          "登陆次数":parseInt(Math.random()*100)
        },{
          "time":new Date().getHours() - 2 + ":" + new Date().getMinutes(),
          "委托数":parseInt(Math.random()*100),
          "成交数":parseInt(Math.random()*100),
          "登陆次数":parseInt(Math.random()*100)
        },{
          "time":new Date().getHours() - 1 + ":" + new Date().getMinutes(),
          "委托数":parseInt(Math.random()*100),
          "成交数":parseInt(Math.random()*100),
          "登陆次数":parseInt(Math.random()*100)
        },{
          "time":new Date().getHours() + ":" + new Date().getMinutes(),
          "委托数":parseInt(Math.random()*100),
          "成交数":parseInt(Math.random()*100),
          "登陆次数":parseInt(Math.random()*100)
       }
    ]
  })
})
app.get('/usedSize', (req, res) => {
  res.send({data: parseInt(Math.random() * 10000)})
})
app.get('/freeSize', (req, res) => {
  res.send({data: parseInt(Math.random() * 10000)})
})
app.get('/eventData', (req, res) => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data.push({
      name: 'L0000001货币查询信息',
      height: Math.random().toFixed(2),
      cpu: parseInt(Math.random() * 100) + "%",
      memory: parseInt(Math.random() * 100) + "%",
      title: '货币查询信息'
    })
  }
  res.send({
    columnData: [
      {
        key: 'name',
        text: '主机名称'
      }, {
        key: 'height',
        text: '列队深度'
      }, {
        key: 'cpu',
        text: 'CPU利用率'
      }, {
        key: 'memory',
        text: '内存利用率'
      }, {
        key: 'title',
        text: '标题'
      }
    ],
    responseData: {
      total: 11,
      data
    }
  })
})
/**
 * 仪表盘数据
 */
app.get('/gaugeData', (req, res) => {
  res.send({
    "gauge": [
      {
        "name": "业务指标",
        "data": [
          {
            "value": parseInt(Math.random() * 100),
            "name": "完成率"
          }
        ]
      }
    ]
  })
})
app.get('/nodeStatus', (req, res) => {
  res.send({
    data: Boolean(Math.round(Math.random())) ? '正常' : '异常'
  })
})
/**
 * 饼图
 */
app.get('/pieData', (req, res) => {
  let data = parseInt(Math.random() * 100);
  res.send({
    "data":[
        {
          "value": data,
          "name": "01"
        },
        {
          "value": 100 - data,
          "name": "02"
      }
    ]
  })
})

app.listen(3001, () => {
  console.log('app listen on port 3001');
})