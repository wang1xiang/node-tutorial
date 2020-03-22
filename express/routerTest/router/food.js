const express = require('express')
const router = express.Router()

router.get('/search', (req, res) => {
  res.send('food search')
})

module.exports = router