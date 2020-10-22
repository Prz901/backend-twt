const service = require('../../../services/user-service')

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
    const user = await service.getById(id)
    if (user) {
      return res.status(200).json(user)
    }
    return res.status(404).json({ message: 'not found' })

  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = { getAll, getById, }

