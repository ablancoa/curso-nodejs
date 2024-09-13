const express = require('express')
const config = require('../config')
const user = require('./components/user/network')
const app = express()

//ROUTES
app.use('/api/user', user)

app.listen(config.api, () => {
  console.log(`Server listening on port ${config.api.port}`)
})
