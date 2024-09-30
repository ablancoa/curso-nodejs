const express = require('express')
const secure = require('./secure')
const Controller = require('./index')
const response = require('../../../network/response')
const router = express.Router()

router.get('/', secure('update'), list)
router.get('/:id', secure('update'), get)
router.post('/', upsert)
router.put('/', secure('update'), upsert)

function list(req, res) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500)
    })
}

function get(req, res) {
  const id = req.params.id
  Controller.get(id)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500)
    })
}

function upsert(req, res) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500)
    })
}

module.exports = router
