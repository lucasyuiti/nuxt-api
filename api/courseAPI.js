const express = require('express')
const app = express()

const router = require('./router')
app.use(router)
console.log('passa pelo courseapi')
if (require.main === module) {
  const port = 3007
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app