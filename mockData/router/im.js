const express = require("express");
const router = express.Router();
const mock = require("mockjs");
const Random = mock.Random;

router.get("/report/workLoad/overview", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: {
        validSession: Random.integer(1, 1000),
        manualReceptionSession: Random.integer(1, 1000),
        responseSession: Random.integer(1, 1000),
        completeSession: Random.integer(1, 1000),
        averageResponseTime: Random.integer(1, 1000),
        numberOfReceivedMessages: Random.integer(1, 1000),
        numberOfReceivedEmail: Random.integer(1, 1000),
      },
      success: true,
    }),
  });
});
const generateChildData = (length) => {
  const data = [];
  Array.from({ length }).forEach((item) => {
    data.push({
      operatorId: Random.id(),
      operatorName: Random.integer(0, 100),
      receptionConversation: Random.integer(0, 100),
      adHocChat: Random.integer(0, 100),
      firstResponseSession: Random.integer(0, 100),
      averageResponseTime: 50000,
      completeSession: Random.integer(0, 100),
      numberOfReplyMessages: Random.integer(0, 100),
      numberOfReplyMails: Random.integer(0, 100),
    });
  });
  return data;
};
router.get("/report/workLoad/list", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: generateChildData(20),
      success: true,
    }),
  });
});

router.get("/report/workLoad/avgResponseTimeLineChart", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: [
        {
          date: "2022-10-25",
          avgResponseTime: "@integer(10,1000)",
        },
        {
          date: "2022-10-24",
          avgResponseTime: "@integer(10,1000)",
        },
        {
          date: "2022-10-23",
          avgResponseTime: "@integer(10,1000)",
        },
        {
          date: "2022-10-22",
          avgResponseTime: "@integer(10,1000)",
        },
        {
          date: "2022-10-21",
          avgResponseTime: "@integer(10,1000)",
        },
        {
          date: "2022-10-20",
          avgResponseTime: "@integer(10,1000)",
        },
        {
          date: "2022-10-19",
          avgResponseTime: "@integer(10,1000)",
        },
      ],
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
