const { User } = require('../models')
const { comparePassword, generateJwt } = require('../utils/auth')

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body

    let user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(402).json({
        cod: 402,
        message: 'Email ou senha incorretos.'
      })
    }

    if (!await comparePassword(password, user.password)) {
      return res.status(402).json({
        cod: 402,
        message: 'Email ou senha incorretos.'
      })
    }

    delete user.dataValues.password
    user.dataValues.token = generateJwt({ id: user.id })

    return res.json(user)
  }
}