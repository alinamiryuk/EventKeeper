const mongoose = require('mongoose')

module.exports = mongoose.model('note', {
  creator: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
  title: {
    tytpe: String,
    require: true,
  },
  text: {
    type: String,
  },
})
