require('dotenv').config()
require('express-async-errors')

const errorHandler = require('./errors/handler')
const http = require('http')
const app = require('./app')

app.use(errorHandler)

const httpServer = http.createServer(app)
const server = httpServer.listen(process.env.PORT || 5000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("Server is running on http://%s:%s", host, port)
})