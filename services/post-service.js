const Post = require('../models/Post')

const getAll = async () => {
  return await Post.find()

}
const getById = async (id) => {
  return await Post.findById(id)
}

const create = async (message, author_id) => {
  const post = new Post({ message, author_id })
  return await post.save()
}

const createComment = async (id, comment, author_id) => {
  const post = await Post.findById(id)

  if (!post)
    throw ('post not found')

  post.comments.push({ comment, author_id })
  return await post.save()
}

const getAllCommmentsFromId = async (id) => {
  try {
    const post = await Post.findById(id)
    if (!post)
      return false

    return post.comments
  } catch (error) {

    return false
  }

}

const destroy = async (id) => {
  try {
    await Post.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  createComment,
  getAllCommmentsFromId,
  destroy,
}