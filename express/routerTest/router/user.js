const express = require('express')
const router = express.Router()

router.get('/add', (req, res) => {
  res.send('user add')
})

router.get('/del', (req, res) => {
  res.send('user del')
})

module.exports = router