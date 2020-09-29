const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/user/service/usersrvice')

/**
 * show page for user registration
 */
router.get('/register', (req, res) => {
  return res.render('register', { message: null })
})
/**
 * Handel user registration
 */
router.post('/register', async (req, res) => {
  try {
    const user = await addUser(req.body)
    return res.render('register', { message: 'Registration success' })
  } catch (e) {
    console.log(e)
    return res.status(400).render('register', { message: 'Something went wrong' })
  }
})

// router.post('/register', async (req, res) => {
//   return res.render('register', { message: 'Registration is successful' })
// })

module.exports = router
