const express = require("express");
const router = express.Router();
const mock = require("mockjs");
const Random = mock.Random;

router.get("/sessionScore/overview", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: {
        responseSessionNum: Random.integer(1, 1000),
        inviteSessionNum: Random.integer(1, 1000),
        scoreSessionNum: Random.integer(1, 1000),
        scoreRate: Random.integer(1, 1000),
        averageScore: Random.integer(1, 5),
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
      operatorEmail: Random.email(),
      responseSessionNum: Random.integer(0, 100),
      inviteSessionNum: Random.integer(0, 100),
      scoreRateStr: Random.integer(0, 100),
      averageScoreStr: Random.integer(0, 100),
      scoreSessionNum: 2300,
      scoreDetail: [
       100,
       0,
       200,
       0,
       400,
       0,
       800,
       400,
       400,
       0,
       0
      ],
    });
  });
  return data;
};
router.get("/sessionScore/list", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: generateChildData(20),
      success: true,
    }),
  });
});

module.exports = router;
