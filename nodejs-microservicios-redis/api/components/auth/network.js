const express = require('express')
const router = express.Router()
const Controller = require('./index')
const response = require('../../../network/response')

router.post('/', login)

function login(req, res, next) {
  Controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200)
    })
    .catch(next)
}

module.exports = router
