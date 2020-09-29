const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
  console.log('mongoDB is connected')
})
