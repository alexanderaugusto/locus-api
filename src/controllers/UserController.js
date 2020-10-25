const { User } = require('../models')
const Yup = require('yup')
const deleteFile = require('../utils/deleteFile')

module.exports = {
  create: async (req, res) => {
    const { email, password, name, cpf, phone } = req.body
    const { key: avatar } = req.file || { key: 'default-avatar.png' }

    const data = {
      email,
      password,
      name,
      cpf,
      phone,
      avatar
    }

    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      phone: Yup.string().required(),
      avatar: Yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: data
    })

    if (!created) {
      return res.status(409).json({
        cod: 409,
        msg: 'Este email já foi cadastrado anteriormente.'
      })
    }

    return res.json(user)
  },

  list: async (req, res) => {
    const { user_id } = req

    const user = await User.findByPk(user_id)

    return res.json(user)
  },

  update: async (req, res) => {
    const { user_id } = req
    const { name, cpf, phone } = req.body
    
    const data = {
      name,
      cpf,
      phone
    }

    const schema = Yup.object().shape({
      name: name === undefined ? null : Yup.string().required(),
      cpf: cpf === undefined ? null : Yup.string().required(),
      phone: phone === undefined ? null : Yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const [updated] = await User.update(data, { where: { id: user_id } })

    return res.status(204).json()
  },

  update_image: async (req, res) => {
    const { user_id } = req
    const { key: avatar } = req.file || { key: undefined }

    const user = await User.findByPk(user_id)
    
    const data = {
      avatar,
    }

    const schema = Yup.object().shape({
      avatar: Yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const [updated] = await User.update(data, { where: { id: user_id } })

    if (avatar && user.avatar !== 'default-avatar.png') {
      deleteFile('user/' + user.avatar)
    }

    if (avatar) {
      return res.json({ avatar })
    }

    return res.status(204).json()
  },

  delete: async (req, res) => {
    const { user_id } = req

    const user = await User.findByPk(user_id)
    
    const deleted = await User.destroy({ where: { id: user_id } })

    if (user.avatar !== 'default-avatar.png') {
      deleteFile('user/' + user.avatar)
    }

    return res.status(204).json()
  }
}