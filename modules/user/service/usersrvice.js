const User = require('../models/user')

/**
 * It create a New User and returns it
 * @param {Object} userInput - it is user input with all varibale for user model
 */
const addUser = async (userInput) => {
  const user = new User(userInput)
  await user.save()
  return user
}

module.exports = { addUser }
