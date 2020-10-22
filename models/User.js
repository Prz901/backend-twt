const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
  posts: {
    type: Array,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  handler: {
    type: String,
    required: true,
  }
})
