const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "IMovel API",
      description: "Customer API information",
      contact: {
        name: "Alexander Augusto",
        email: "alexaasf_10@hotmail.com",
        url: "https://alexanderaugusto.com/"
      }
    },
    tags: "Requests",
    host: "https://imovel-api.herokuapp.com",
    servers: ["https://imovel-api.herokuapp.com"]
  },
  apis: ["src/routes.js"]
}

module.exports  = swaggerJsDoc(swaggerOptions)