const express = require("express");
const router = express.Router();
const mock = require("mockjs");

router.post("/queryAllMetric", (req, res) => {
  res.send({
    ...mock.mock({
      code: 200,
      message: null,
      data: {
        interactiveConversion: {
          interactiveContacts: "@integer(10,1000)",
          interactiveConversionCount: "@integer(10,1000)",
          interactiveConversionRate: "@integer(10,1000)",
          lineData: [
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
        },
        couponConversion: {
          couponReceiveContacts: "@integer(10,1000)",
          couponConversionCount: "@integer(10,1000)",
          couponConversionSales: "@integer(10,1000)",
          lineData: [
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
        },
        abandonedSave: {
          abandonedCheckoutContacts: "@integer(10,1000)",
          abandonedSaveContacts: "@integer(10,1000)",
          abandonedSaveSales: "@integer(10,1000)",
          lineData: [
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
        },
        leads: {
          leadsCount: "@integer(10,1000)",
          lineData: [
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
        },
      },
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
