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
    expiresIn: 172800
  })
}

const verifyJwt = (token, cb) => {
  return jwt.verify(token, process.env.AUTH_SECRET, cb)
}

module.exports = {
  encryptPassword,
  comparePassword,
  generateJwt,
  verifyJwt
}