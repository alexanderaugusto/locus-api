const express = require('express')
const cors = require('cors')
const path = require('path')
const swaggerConfig = require('./config/swagger')
const swaggerUi = require('swagger-ui-express')

class AppController {
  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(cors())
    this.express.use('/storage/user', express.static(path.resolve(__dirname, "../tmp/uploads/user")))
    this.express.use('/storage/property', express.static(path.resolve(__dirname, "../tmp/uploads/property")))
    this.express.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
  }

  routes() {
    this.express.use(require('./routes'))
  }
}

module.exports = new AppController().express