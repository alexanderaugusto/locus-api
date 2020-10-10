const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const encryptPassword = (password) => {
  return bcrypt.hash(password, 8)
}

const comparePassword = (password1, password2) => {
  return bcrypt.compare(password1, password2)
}

const generateJwt = (params) => {
  return jwt.sign(params, process.env.AUTH_SECRET, {
    expiresIn: 864000
  })
}

module.exports = {
  encryptPassword,
  comparePassword,
  generateJwt
}