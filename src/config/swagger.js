const swaggerJsDoc = require('swagger-jsdoc')

const swaggerDefinition = {
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
  host: !process.env.NODE_ENV ? "localhost:5000" : "imovel-api.herokuapp.com",
  schemes: !process.env.NODE_ENV ? ["http"] : ["https"],
  servers: {
    url: "https://imovel-api.herokuapp.com",
    description: "This is the production API",
    url: "http://localhost:5000",
    description: "This is the development API"
  },
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  }
}

const options = {
  swaggerDefinition,
  apis: ["src/docs/*"]
}

module.exports = swaggerJsDoc(options)