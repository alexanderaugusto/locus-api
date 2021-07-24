const { User } = require('../models')
const { comparePassword, generateJwt } = require('../utils/auth')

module.exports = {
  login: async (req, res) => {
    // #swagger.tags = ['Auth']
    // #swagger.description = 'Endpoint to do a login' 
    const { email, password } = req.body

    let user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(403).json({
        cod: 403,
        description: 'Autenticação inválida! E-mail ou senha incorretos.'
      })
    }

    if (!await comparePassword(password, user.password)) {
      return res.status(403).json({
        cod: 403,
        description: 'Autenticação inválida! E-mail ou senha incorretos.'
      })
    }

    delete user.dataValues.password
    user.dataValues.token = generateJwt({ id: user.id })

    return res.status(200).json(user)
  },

  renew_token: async (req, res) => {
    // #swagger.tags = ['Auth']
    // #swagger.description = 'Endpoint to renew user token'

    const { user_id } = req

    let user = await User.findByPk(user_id)

    delete user.dataValues.password
    user.dataValues.token = generateJwt({ id: user_id })

    return res.status(200).json(user)
  }
}