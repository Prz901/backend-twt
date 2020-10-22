const service = require('../../../services/post-service')

const getAll = async (req, res) => {
  try {
    res.status(200).json(await service.getAll())
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const getById = async (req, res) => {
  const { id } = req.params
  try {
    const post = await service.getById(id)
    if (post) {
      return res.status(200).json(post)
    }
    return res.status(404).json({ message: 'not found' })

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = { getAll, getById, }

