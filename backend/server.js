import config from '../config/config.js'
import app from './express.js'
import mongoose from 'mongoose'


mongoose.Promise = global.Promise
console.info('Mongouri=',config.mongoUri);

mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
