const {Schema, model, Types} = require('mongoose')

const userSchema = Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
notes: [{
  type: Types.ObjectId,
  ref: 'Event'
}]
})
