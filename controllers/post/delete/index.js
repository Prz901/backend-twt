const service = require('../../../services/post-service')

const destroy = async (req, res) => {
  const { id } = req.params
  try {
    return res.status(201).json(await service.destroy(id))

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = { destroy, }