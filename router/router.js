const { Router } = require('express')
const router = Router()

router.use('/hello', (req, res) => {
  res.send('Hello world!')
})
module.exports = router