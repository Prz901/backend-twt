const service = require('../../../services/user-service')

const create = async (req, res) => {
  const user = req.body
  try {
    return res.status(201).json(await service.create(user))

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = { create, }