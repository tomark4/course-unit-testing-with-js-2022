require('dotenv').config()
const logger = require('./logger.js')
const app = require('./app.js')
const { connectDb } = require('./database.js')

const port = process.env.PORT || 8000
const database = process.env.DATABASE

connectDb({ uri: database })
  .then(() => logger.info('db connected'))
  .catch(() => logger.error('Error de conexion'))

app.listen(port, () => {
  logger.info(`server listen on port ${port} good!`)
})
