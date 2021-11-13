const { User } = require('../models')
const { comparePassword, generateJwt } = require('../utils/auth')
const GoogleAuth = require('../config/auth/google')

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

  loginWithGoogle: async (req, res) => {
    // #swagger.tags = ['Auth']
    // #swagger.description = 'Endpoint to do a login with google' 
    const { access_token } = req.body

    GoogleAuth(access_token).get(async (err, response) => {
      if (err) {
        return res.status(403).json({
          cod: 403,
          description: err.message
        })
      } else {
        const data = {
          name: response.data.given_name + ' ' + response.data.family_name,
          email: response.data.email,
          avatar: response.data.picture,
          password: 'google',
          cpf: '',
          is_oauth_user: true
        }

        const user = await User.findOne({ where: { email: data.email } })

        if (!user) {
          const user = await User.create(data)

          delete user.dataValues.password
          user.dataValues.token = generateJwt({ id: user.id })

          return res.status(200).json(user)
        } 
        else if(user.is_oauth_user) {
          await User.update(data, { where: { id: user.id } })

          const userUpdated = await User.findByPk(user.id)

          delete userUpdated.dataValues.password
          userUpdated.dataValues.token = generateJwt({ id: userUpdated.id })

          return res.status(200).json(userUpdated)
        }else{
          return res.status(403).json({
            cod: 403,
            description: 'Já existe um usuário com este email'
          })
        }
      }
    })
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