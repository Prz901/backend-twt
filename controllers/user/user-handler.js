// Express imports
const express = require('express'),
  router = express.Router()

const { create } = require('./create')
const { getAll, getById } = require('./read')

router.get('/', getAll)
router.get('/:id', getById)

router.post('/', create)

module.exports = router