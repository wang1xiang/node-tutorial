const express = require("express");
const router = express.Router();
const mock = require("mockjs");
const Random = mock.Random;
router.get("/click/hot", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: {
        click_person: [
          {
            url: "https://www.baidu.com/",
            num: Random.integer(1, 1000),
            rate: Random.integer(1, 100) + "%",
          },
        ],
        click_num: [
          {
            url: "https://www.com/",
            num: Random.integer(1, 1000),
            rate: Random.integer(1, 100) + "%",
          },
        ],
      },
      success: true,
    }),
  });
});

const generateDevice = (length) => {
  const data = [];
  Array.from({ length }).forEach((item) => {
    data.push({
      device: Random.string("lower", 10),
      sendNum: Random.integer(1, 1000),
      sendSuccessNum: Random.integer(1, 1000),
      sendSuccessNumRate: Random.integer(1, 100) + "%",
      openNum: Random.integer(1, 1000),
      openPersonNum: Random.integer(1, 1000),
      openPersonRate: Random.integer(1, 100) + "%",
      clickNum: Random.integer(1, 1000),
      clickPersonNum: Random.integer(1, 1000),
      clickPersonRate: Random.integer(1, 100) + "%",
      unsubscribeNum: Random.integer(1, 1000),
      unsubscribeRate: Random.integer(1, 100) + "%",
    });
  });
  return data;
};
const generateEmail = (length) => {
  const data = [];
  Array.from({ length }).forEach((item) => {
    data.push({
      emailDomain: Random.email(),
      sendNum: Random.integer(1, 1000),
      sendSuccessNum: Random.integer(1, 1000),
      sendSuccessNumRate: Random.integer(1, 100) + "%",
      openNum: Random.integer(1, 1000),
      openPersonNum: Random.integer(1, 1000),
      openPersonRate: Random.integer(1, 100) + "%",
      clickNum: Random.integer(1, 1000),
      clickPersonNum: Random.integer(1, 1000),
      clickPersonRate: Random.integer(1, 100) + "%",
      unsubscribeNum: Random.integer(1, 1000),
      unsubscribeRate: Random.integer(1, 100) + "%",
    });
  });
  return data;
};
const generateLink = (length) => {
  const data = [];
  Array.from({ length }).forEach((item) => {
    data.push({
      url: Random.email(),
      clickNum: Random.integer(1, 1000),
      clickPerson: Random.integer(1, 1000),
      clickNumRate: Random.integer(1, 100) + "%",
      clickPersonRate: Random.integer(1, 100) + "%",
    });
  });
  return data;
};
const generateData = () => {
  return [
    {
      day: "2022-07-01",
      value: Random.integer(1, 100),
    },
    {
      day: "2022-07-02",
      value: Random.integer(1, 100),
    },
    {
      day: "2022-07-03",
      value: Random.integer(1, 100),
    },
    {
      day: "2022-07-04",
      value: Random.integer(1, 100),
    },
    {
      day: "2022-07-05",
      value: Random.integer(1, 100),
    },
    {
      day: "2022-07-06",
      value: Random.integer(1, 100),
    },
    {
      day: "2022-07-07",
      value: Random.integer(1, 100),
    },
  ]
}
router.post("/advancedList", (req, res) => {
  const { query } = req.body;
  const total = Random.integer(1, 10);
  const list =
    query === "link"
      ? generateLink(total)
      : query === "email"
      ? generateEmail(total)
      : generateDevice(total);
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: {
        pageSize: 10,
        total,
        list,
        pageNum: 1,
        totalPage: 0,
      },
      success: true,
    }),
  });
});
router.post("/listCampaignDayAnalysis", (req, res) => {
  const { query } = req.body;
  const total = Random.integer(1, 10);
  const list =
    query === "link"
      ? generateLink(total)
      : query === "email"
      ? generateEmail(total)
      : generateDevice(total);
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: {
        deliverCount: generateData(),
        clickCount: generateData(),
        visitCount: generateData(),
        orderFinish: generateData(),
        totalSales: generateData(),
        openCount: generateData(),
        sendCount: generateData(),
        checkoutCreate: generateData(),
        totalOrderCount: generateData(),
      },
      success: true,
    }),
  });
});
module.exports = router;
