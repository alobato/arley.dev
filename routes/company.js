const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
  res.send({ data: { name: 'Empresa ABC' } })
})

module.exports = router
