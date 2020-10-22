const User = require('../models/User')


const getAll = async () => {
  return await User.find()
}

const getById = async (id) => {
  return await User.findById(id)
}

const create = async (user) => {
  const _user = new User(user)
  return await _user.save()
}

module.exports = { create, getAll, getById, }