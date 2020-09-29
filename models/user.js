const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    minlength: [2, 'name should not be smaller then 2 character'],
    maxlength: [64, 'name should not be greater then 64 character']
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    maxlength: [128, 'email should not be greater then 128 character'],
    index: true
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamp: true
})

const User = mongoose.model('Users', userSchema)

module.exports = User
