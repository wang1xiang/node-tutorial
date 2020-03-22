const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var app = express()
app.use(cors())

app.get('/mapData', (req, res) => {
  res.send({"data":[
    {
        "name":"湖南省",
        "value":[
            111.5332,
            27.3779,
            10
        ],
        "itemStyle":{
            "normal":{
                "color":"#339999"
            }
        }
    },
    {
        "name":"辽宁省",
        "value":[
            122.0438,
            41.0889,
            20
        ],
        "itemStyle":{
            "normal":{
                "color":"#0099FF"
            }
        }
    },
    {
        "name":"北京市",
        "value":[
            116.4551,
            40.2539,
            30
        ],
        "itemStyle":{
            "normal":{
                "color":"#3366FF"
            }
        }
    },
    {
        "name":"吉林省",
        "value":[
            125.7746,
            43.5938,
            999999
        ],
        "itemStyle":{
            "normal":{
                "color":"#33FF00"
            }
        }
    }
]})
})
app.get('/proLineData', (req, res) => {
  let data = [
    {
      "时间":new Date().getHours() - 4 + ":" + new Date().getMinutes(),
      "数量":parseInt(Math.random()*100)
    },
    {
      "时间":new Date().getHours() - 3 + ":" + new Date().getMinutes(),
      "数量":parseInt(Math.random()*100)
    },
    {
      "时间":new Date().getHours() - 2 + ":" + new Date().getMinutes(),
      "数量":parseInt(Math.random()*100)
    },
    {
      "时间":new Date().getHours() - 1 + ":" + new Date().getMinutes(),
      "数量":parseInt(Math.random()*100)
    },
    {
      "时间":new Date().getHours() + ":" + new Date().getMinutes(),
      "数量":parseInt(Math.random()*100)
    }
  ]
  res.send({
    data
  })
})
app.get('/testLineData', (req, res) => {
  res.send({
    "data":[
        {
          "时间":new Date().getHours() - 4 + ":" + new Date().getMinutes(),
          "数量":parseInt(Math.random()*100)
        },
        {
          "时间":new Date().getHours() - 3 + ":" + new Date().getMinutes(),
          "数量":parseInt(Math.random()*100)
        },
        {
          "时间":new Date().getHours() - 2 + ":" + new Date().getMinutes(),
          "数量":parseInt(Math.random()*100)
        },
        {
          "时间":new Date().getHours() - 1 + ":" + new Date().getMinutes(),
          "数量":parseInt(Math.random()*100)
        },
        {
          "时间":new Date().getHours() + ":" + new Date().getMinutes(),
          "数量":parseInt(Math.random()*100)
        }
    ]
  })
})
app.get('/proBarData', (req, res) => {
  res.send({
    "data":[
        {
            "类别":"委托数",
            "深交所":parseInt(Math.random()*10000),
            "上交所":parseInt(Math.random()*10000)
        },
        {
            "类别":"成交数",
            "深交所":parseInt(Math.random()*10000),
            "上交所":parseInt(Math.random()*10000)
        }
    ]
  })
})
app.get('/testBarData', (req, res) => {
  res.send({
    "data":[
        {
            "类别":"委托数",
            "深交所":parseInt(Math.random()*10000),
            "上交所":parseInt(Math.random()*10000)
        },
        {
            "类别":"成交数",
            "深交所":parseInt(Math.random()*10000),
            "上交所":parseInt(Math.random()*10000)
        }
    ]
  })
})
app.get('/nodeStatus', (req, res) => {
  const data = parseInt(Math.random() * 3)
  res.send({
    data: data === 0 ? 'red' : ( data === 1 ? 'grey' : 'blue')
  })
})

app.listen(3002, () => {
  console.log('app listen on port 3002');
})