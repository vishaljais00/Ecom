const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('hello World , welcome !')
})

app.listen(3000, () => {
  console.log('server is started')
})

exports = app
