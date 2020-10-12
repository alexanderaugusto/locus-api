const { User } = require('../models')
const deleteFile = require('../utils/deleteFile')

module.exports = {
  create: async (req, res) => {
    const { email, password, name, cpf, phone } = req.body
    const { key: avatar } = req.file || { key: 'default-avatar.png' }

    User.findOrCreate({
      where: { email },
      defaults: { email, password, name, cpf, phone, avatar }
    })
      .then(([user, created]) => {
        if (!created) {
          return res.status(409).json({
            cod: 409,
            msg: 'Este email já foi cadastrado anteriormente.'
          })
        }

        return res.json(user)
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao cadastrar o usuário. Por favor, tentar novamente.'
        })
      })
  },

  list: async (req, res) => {
    const { user_id } = req

    User.findByPk(user_id)
      .then((user) => {
        if (!user) {
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos listar este usuário! Por favor, verifique os dados fornecidos e tente novamente.'
          })
        }

        return res.json(user)
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao listar o usuário. Por favor, tentar novamente.'
        })
      })
  },

  update: async (req, res) => {
    const { user_id } = req
    const { name, cpf, phone } = req.body

    User.update({ name, cpf, phone }, { where: { id: user_id } })
      .then(([updated]) => {
        if (!updated) {
          return res.status(400).json({
            cod: 400,
            message: 'Os dados fornecidos são inválidos. Por favor, verifique os dados enviados e tente novamente.'
          })
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao atualizar o usuário. Por favor, tentar novamente.'
        })
      })
  },

  update_image: async (req, res) => {
    const { user_id } = req
    const { key: avatar } = req.file || { key: undefined }

    const user = await User.findByPk(user_id)

    User.update({ avatar }, { where: { id: user_id } })
      .then(([updated]) => {
        if (!updated) {
          return res.status(400).json({
            cod: 400,
            message: 'Os dados fornecidos são inválidos. Por favor, verifique os dados enviados e tente novamente.'
          })
        }

        if (avatar && user.avatar !== 'default-avatar.png') {
          deleteFile('user/' + user.avatar)
        }

        if (avatar) {
          return res.json({ avatar })
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao atualizar a imagem do usuário. Por favor, tentar novamente.'
        })
      })
  },

  delete: async (req, res) => {
    const { user_id } = req

    const user = await User.findByPk(user_id)

    User.destroy({ where: { id: user_id } })
      .then((deleted) => {
        if (!deleted) {
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos apagar este usuário. Por favor, tente novamente'
          })
        }

        if (user.avatar !== 'default-avatar.png') {
          deleteFile('user/' + user.avatar)
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao apagar o usuário. Por favor, tentar novamente.'
        })
      })
  }
}