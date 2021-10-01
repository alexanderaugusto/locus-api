const swaggerAutogen = require('swagger-autogen')()

const docDefinition = {
  info: {
    version: "1.0.0",
    title: "Locus API",
    description: "Locus API information",
    contact: {
      name: "Alexander Augusto",
      email: "alexaasf1010@gmail.com",
      url: "https://alexanderaugusto.com/"
    }
  },
  host: !process.env.NODE_ENV ? "localhost:5000" : "locus-app.mybluemix.net",
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
    url: "https://locus-app.mybluemix.net/",
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

