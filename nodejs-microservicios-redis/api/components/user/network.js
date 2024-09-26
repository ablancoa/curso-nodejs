const express = require('express')
const Controller = require('./index')
const response = require('../../../network/response')
const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)

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
