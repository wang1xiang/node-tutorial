const express = require("express");
const router = express.Router();
const mock = require("mockjs");
const Random = mock.Random;
let list = [];
router.get("/tableHeaderGet", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: {
        list,
        storeId: "123",
      },
      success: true,
    }),
  });
});

router.post("/tableHeaderAction", (req, res) => {
  list = req.body.list;
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: null,
      success: true,
    }),
  });
});

const generateChildData = (length) => {
  const data = [];
  Array.from({ length }).forEach((item) => {
    data.push({
      allChecked: false,
      name: Random.first(),
      phone: Random.ip(),
      email: Random.email(),
      subscribeState: Random.integer(0, 2),
      "gender|1": ["1", "2"],
      "timeZone|1": [
        "Pacific/Midway",
        "Pacific/Honolulu",
        "America/Juneau",
        "America/Boise",
        "America/Chihuahua",
      ],
      country: Random.region(),
      province: "",
      city: null,
      createTime: Random.date("yyyy-MM-dd HH:mm:ss"),
      updateTime: Random.date("yyyy-MM-dd HH:mm:ss"),
      firstName: Random.first(),
      lastName: Random.last(),
      birthday: Random.date(),
      instagram: Random.string("lower", 10),
      messenger: Random.string("lower", 10),
      facebook: '123213',
      whatsapp: Random.string("lower", 10),
      tiktok: Random.string("lower", 10),
      google: Random.string("lower", 10),
      linkedin: Random.string("lower", 10),
      youtube: Random.string("lower", 10),
      browser: Random.string("lower", 10),
      status: Random.string(),
      age: Random.integer(),
      checkbox_2: "1654928647282,1654928648475",
      radio_2: "1654928639282",
      avatarUrl: Random.image(),
      dataType: Random.integer(1, 2),
      avatarColor: Random.color(),
    });
  });
  return data;
};
const generateData = (length) => {
  const data = [];
  Array.from({ length }).forEach((item) => {
    data.push({
      allChecked: false,
      name: Random.first(),
      phone: Random.ip(),
      email: Random.email(),
      subscribeState: Random.integer(0, 2),
      "gender|1": ["1", "2"],
      "timeZone|1": [
        "Pacific/Midway",
        "Pacific/Honolulu",
        "America/Juneau",
        "America/Boise",
        "America/Chihuahua",
      ],
      country: Random.region(),
      ignore: Random.boolean(),
      province: "",
      city: null,
      userUUID: '1811eb2c0e912b1-0e133e44e200b9-4c647e53-144000-1811eb2c0ea1214',
      createTime: Random.date("yyyy-MM-dd HH:mm:ss"),
      updateTime: Random.date("yyyy-MM-dd HH:mm:ss"),
      firstName: Random.first(),
      lastName: Random.last(),
      birthday: Random.date(),
      instagram: Random.string("lower", 10),
      messenger: Random.string("lower", 10),
      facebook: Random.string("lower", 10),
      whatsapp: Random.string("lower", 10),
      tiktok: Random.string("lower", 10),
      google: Random.string("lower", 10),
      linkedin: Random.string("lower", 10),
      youtube: Random.string("lower", 10),
      browser: Random.string("lower", 10),
      status: Random.string(),
      age: Random.integer(),
      almostData: generateChildData(Random.integer(3, 5)),
    });
  });
  return data;
};
router.get("/info", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: generateData(Random.integer(3, 5)),
      success: true,
    }),
  });
});
router.get("/merge/list", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: generateData(Random.integer(1, 10)),
      success: true,
    }),
  });
});

module.exports = router;
