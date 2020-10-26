const mongoose = require('mongoose')

module.exports = mongoose.model('user', {
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
})
