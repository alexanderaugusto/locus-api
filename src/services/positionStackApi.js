const axios = require('axios')

const api = axios.create({
  baseURL: process.env.POSITION_STACK_API_URL
})

api.interceptors.request.use(config => {
  config.params = config.params || {}
  config.params.access_key = process.env.POSITION_STACK_ACCESS_KEY
  return config
})

module.exports = api
