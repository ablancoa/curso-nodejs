const express = require('express')
const config = require('../config')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const app = express()

app.use(bodyParser.json())

//ROUTES
app.use('/api/auth', auth)
app.use('/api/user', user)

//SWAGGER
const swaggerDocument = require('./swagger.json')
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(config.api, () => {
  console.log(`Server listening on port ${config.api.port}`)
})
