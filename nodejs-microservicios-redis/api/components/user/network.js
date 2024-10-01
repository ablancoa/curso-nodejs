const express = require('express')
const secure = require('./secure')
const Controller = require('./index')
const response = require('../../../network/response')
const router = express.Router()

router.get('/', secure('update'), list)
router.get('/:id', secure('update'), get)
router.post('/', upsert)
router.put('/', secure('update'), upsert)

function list(req, res, next) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200)
    })
    .catch(next)
}

function get(req, res, next) {
  const id = req.params.id
  Controller.get(id)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch(next)
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch(next)
}

module.exports = router
