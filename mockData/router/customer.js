const express = require("express");
const router = express.Router();
const mock = require("mockjs");

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

module.exports = router;
