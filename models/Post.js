const mongoose = require('mongoose')

module.exports = mongoose.model('Post', {
  author_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
  },
})

