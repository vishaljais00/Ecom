const express = require('express')
const bodyParser = require('body-parser')
require('./utils/dbconfig.js')

const authroutes = require('./routes/authroutes')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use('/', authroutes)

app.get('/', (req, res) => {
  return res.render('index')
})

app.listen(3000, () => {
  console.log('server is started')
})

module.exports = app
