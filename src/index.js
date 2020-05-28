// let's go!
require('dotenv').config()
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

server.start(
  {
    cors: process.env.FRONTEND_URL,
  },
  seed => {
    console.log(`Server is runnng on port ${seed.port}`)
  }
)
