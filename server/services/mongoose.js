const mongoose = require('mongoose')

const url =
  'mongodb+srv://admin:qwerty123456@cluster0.3xjt6.gcp.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
exports.myConnect = async () => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  return mongoose.connection
}

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('db is connected')
})
