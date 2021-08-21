const swaggerAutogen = require('swagger-autogen')()

const docDefinition = {
  info: {
    version: "1.0.0",
    title: "IMovel API",
    description: "IMovel API information",
    contact: {
      name: "Alexander Augusto",
      email: "alexaasf1010@gmail.com",
      url: "https://alexanderaugusto.com/"
    }
  },
  host: !process.env.NODE_ENV ? "localhost:5000" : "imovel-api.herokuapp.com",
  schemes: !process.env.NODE_ENV ? ["http"] : ["https"],
  basePath: "/",
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      "name": "User",
      "description": "Endpoints"
    }
  ],
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

const swaggerConfig = './src/config/swagger.json'
const endpoits = ['./src/routes.js']

swaggerAutogen(swaggerConfig, endpoits, docDefinition).then(() => {
  require('./server')
})

