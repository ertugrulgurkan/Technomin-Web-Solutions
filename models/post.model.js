const { model } = require('mongoose')

const Post = model('Post', {
  subject: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
})

module.exports = Post
