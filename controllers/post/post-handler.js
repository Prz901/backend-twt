// Express imports
const express = require('express'),
  router = express.Router()

const { getAll, getById } = require('./read')
const { create } = require('./create')

const { getAllComments, createComment } = require('./comment')

const { destroy } = require('./delete')

const authMiddleware = require('../../middlewares/auth-middleware')

// Controller import

router.get('/', getAll)
router.get('/:id', getById)

router.post('/', authMiddleware, create)

router.delete('/:id/destroy', destroy)

router.get('/:id/comment', getAllComments)
router.post('/:id/comment', authMiddleware, createComment)

module.exports = router