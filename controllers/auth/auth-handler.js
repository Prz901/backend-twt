const express = require('express'),
  router = express.Router()

const service = require('../../services/auth-service')

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password)
      return res.status(400).send('Please provide both a "username" and a "password"')

    return res.json(await service.auth(username, password))

  } catch (e) {
    return res.status(500).send('Server Error: ' + e)
  }
})

module.exports = router