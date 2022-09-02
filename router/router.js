const { Router } = require('express')
const router = Router()

router.use('/router', (req, res) => {
  res.send('Hello world!')
})

module.exports = router