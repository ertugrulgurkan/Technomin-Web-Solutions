const { model } = require('mongoose')

const Message = model('Message', {
  name: {
      type: String,
      required: true,
    },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

module.exports = Message
