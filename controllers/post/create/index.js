const service = require('../../../services/post-service')

const create = async (req, res) => {
  const { message } = req.body
  try {
    return res.status(201).json(await service.create(message, req.tokenDecoded.author_id))

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = { create, }