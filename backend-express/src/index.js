import 'dotenv/config'
import logger from './logger.js'
import app from './app.js'

const port = process.env.PORT || 8000

app.listen(port, () => {
  logger.info(`server listen on port ${port} good!`)
})
