const { verifyJwt } = require('../utils/auth')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      cod_return: 401,
      message: 'Você precisa estar autenticado para realizar esta operação.'
    })
  }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) {
    return res.status(401).send({
      cod_return: 401,
      message: 'O token de autenticação possui erros.'
    })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({
      cod_return: 401,
      message: 'O token de autenticação possui formato inválido.'
    })
  }

  verifyJwt(token, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        cod_return: 401,
        message: 'Sua sessão expirou! Faça o login novamente para continuar acessando.'
      })
    }

    req.user_id = decoded.id

    return next()
  })
}