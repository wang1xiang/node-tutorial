const express = require("express");
const router = express.Router();
const mock = require("mockjs");
const Random = mock.Random;

router.post("/statistical", (req, res) => {
  const nodeIds = req.body.nodeIds;
  const data = nodeIds.map(id => {
    return {
      "emailStatistical": {
        "clickCount": Random.integer(1, 100),
        "deliverCount": Random.integer(1, 100),
        "openCount": Random.integer(1, 100),
        "sendCount": Random.integer(1, 100)
      },
      "entryIntoCount": Random.integer(1, 100),
      "exitCount": Random.integer(1, 100),
      "failCount": Random.integer(1, 100),
      "nodeId": id,
      "nodeSpecificType": "",
      "successCount": Random.integer(1, 100)
    }
  })
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data,
      success: true,
    }),
  });
});
router.post("/statistical/detail", (req, res) => {
  const page = req.body;
  const data = {
    "data": [
      {
        "createTime": Random.datetime('day', 'yyyy-MM-dd HH:mm:ss'),
        "email": Random.email(),
        "nodeId": "",
        "phone": Random.ip(),
        "triggerType": "",
        "userName": Random.first(),
        "userUUID": ""
      }
    ],
    "pageNum": page.pageNum,
    "pageSize": page.pageSize,
    "total": Random.integer(1, 100)
  }
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data,
      success: true,
    }),
  });
});
router.post("/querySingleMetricLine", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: [
        {
          date: "2022-10-25",
          value: "@integer(10,1000)",
        },
        {
          date: "2022-10-24",
          value: "@integer(10,1000)",
        },
        {
          date: "2022-10-23",
          value: "@integer(10,1000)",
        },
        {
          date: "2022-10-22",
          value: "@integer(10,1000)",
        },
        {
          date: "2022-10-21",
          value: "@integer(10,1000)",
        },
        {
          date: "2022-10-20",
          value: "@integer(10,1000)",
        },
        {
          date: "2022-10-19",
          value: "@integer(10,1000)",
        },
      ],
      success: true,
    }),
  });
});

module.exports = router;
