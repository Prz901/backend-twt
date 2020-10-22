const service = require('../../../services/post-service')

const getAllComments = async (req, res) => {
  const { id } = req.params
  try {
    const result = await service.getAllCommmentsFromId(id)
    if (!result)
      return res.status(404).json({ message: 'post not found' })

    return res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const createComment = async (req, res) => {
  const comment = req.body
  const { id } = req.params

  try {
    const post = await service.getById(id)

    if (post) {
      return res.status(200).json(await service.createComment(id, comment, req.tokenDecoded.author_id))
    }
    return res.status(404).json({ message: 'not found' })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}

module.exports = { getAllComments, createComment, }

