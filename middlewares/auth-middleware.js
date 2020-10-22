const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authorization = req.headers['authorization']
  const accessToken = authorization.split('Bearer ')[1]
  if (!accessToken) return res.status(400).send('Please provide a Bearer Token')

  jwt.verify(accessToken, process.env.SECRET, (err, decoded) => {
    if (err)
      return res.status(401).send('Please provide a Valid x-access-token ' + err)
    req.tokenDecoded = decoded
    next()
  })
}