const express = require('express'),
  router = express.Router()

// const user = require('./user/userHandler')
const post = require('./post/post-handler')
const auth = require('./auth/auth-handler')
const user = require('./user/user-handler')


// Routes in use
router.use('/api/post', post)
router.use('/api/auth', auth)
router.use('/api/user', user)



router.use('*', (req, res) => {
  res.status(404).send('Resource Not Found')
})

module.exports = router