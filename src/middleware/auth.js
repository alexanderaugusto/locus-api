const { verifyJwt } = require('../utils/auth')

const authRequired = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      cod: 401,
      description: 'Você precisa estar autenticado para realizar esta operação.'
    })
  }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) {
    return res.status(401).send({
      cod: 401,
      description: 'O token de autenticação possui erros.'
    })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({
      cod: 401,
      description: 'O token de autenticação possui formato inválido.'
    })
  }

  verifyJwt(token, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        cod: 401,
        description: 'Sua sessão expirou! Faça o login novamente para continuar acessando.'
      })
    }

    req.user_id = decoded.id

    return next()
  })
}

const authOptional = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return next()
  }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) {
    return next()
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return next()
  }

  verifyJwt(token, (err, decoded) => {
    if (err) {
      return next()
    }

    req.user_id = decoded.id

    return next()
  })
}

module.exports = {
  required: authRequired,
  optional: authOptional
}