const express = require('express')
const config = require('../config')
const bodyParser = require('body-parser')
const user = require('./components/user/network')
const app = express()

app.use(bodyParser.json())

//ROUTES
app.use('/api/user', user)

app.listen(config.api, () => {
  console.log(`Server listening on port ${config.api.port}`)
})
