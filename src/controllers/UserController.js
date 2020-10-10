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
    const { user_id: id } = req.params

    User.findByPk(id)
      .then((user) => {
        if(!user){
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

  list_properties: async (req, res) => {
    const { user_id: id } = req.params

    User.findByPk(id, { include: { association: 'properties' } })
      .then((user) => {
        if(!user){
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos listar as propriedades do usuário! Por favor, verifique os dados fornecidos e tente novamente.'
          })
        }

        return res.json(user.properties)
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao listar as propriedades do usuário. Por favor, tentar novamente.'
        })
      })
  },

  list_rentals: async (req, res) => {
    const { user_id: id } = req.params

    User.findByPk(id, { include: { association: 'rentals' } })
      .then((user) => {
        if(!user){
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos listar os aluguéis do usuário! Por favor, verifique os dados fornecidos e tente novamente.'
          })
        }

        return res.json(user.rentals)
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao listar os aluguéis do usuário. Por favor, tentar novamente.'
        })
      })
  },

  list_favorites: async (req, res) => {
    const { user_id: id } = req.params

    User.findByPk(id, { include: { association: 'favorites' } })
      .then((user) => {
        if(!user){
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos listar os favoritos do usuário! Por favor, verifique os dados fornecidos e tente novamente.'
          })
        }

        return res.json(user.favorites)
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao listar as propriedades favoritadas pelo usuário. Por favor, tentar novamente.'
        })
      })
  },

  update: async (req, res) => {
    const { user_id: id } = req.params
    const { name, cpf, phone } = req.body
    const { key: avatar } = req.file || { key: undefined }

    const user = await User.findByPk(id)

    User.update({ name, cpf, phone, avatar }, { where: { id } })
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
          msg: 'Ocorreu um erro inesperado ao atualizar o usuário. Por favor, tentar novamente.'
        })
      })
  },

  delete: async (req, res) => {
    const { user_id: id } = req.params

    const user = await User.findByPk(id)

    User.destroy({ where: { id } })
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