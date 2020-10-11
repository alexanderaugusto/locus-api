const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "IMovel API",
      description: "Customer API information",
      contact: {
        name: "Alexander Augusto"
      }
    },
    servers: ["https://imovel-api.herokuapp.com"]
  },
  apis: ["routes.js"]
}

module.exports  = swaggerJsDoc(swaggerOptions)