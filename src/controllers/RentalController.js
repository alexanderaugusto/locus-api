const { User, Property } = require('../models')

module.exports = {
  add: async (req, res) => {
    const { user_id } = req
    const { property_id } = req.params

    const user = await User.findByPk(user_id)
    if (!user) {
      return res.status(400).json({
        cod: 400,
        msg: 'Este usuário não existe na base de dados.'
      })
    }

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(400).json({
        cod: 400,
        msg: 'Este imóvel não existe na base de dados.'
      })
    }

    user.addRental(property)
      .then((rental) => {
        if (!rental) {
          return res.status(400).json({
            cod: 400,
            msg: 'Ocorreu um erro ao alugar este imóvel para o usuário.'
          })
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao alugar este imóvel para o usuário. Por favor, tentar novamente.'
        })
      })
  },

  list: async (req, res) => {
    const { user_id: id } = req

    User.findByPk(id, { include: { association: 'rentals', through: { attributes: [] } } })
      .then((user) => {
        if (!user) {
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos listar os alugéis do usuário! Por favor, verifique os dados fornecidos e tente novamente.'
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

  delete: async (req, res) => {
    const { user_id } = req
    const { property_id } = req.params

    const user = await User.findByPk(user_id)
    if (!user) {
      return res.status(400).json({
        cod: 400,
        msg: 'Este usuário não existe na base de dados.'
      })
    }

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(400).json({
        cod: 400,
        msg: 'Este imóvel não existe na base de dados.'
      })
    }

    user.removeRental(property)
      .then((deleted) => {
        if (!deleted) {
          return res.status(400).json({
            cod: 400,
            msg: 'O usuário não tem este imóvel alugado.'
          })
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao apagar o imóvel dos aluguéis do usuário. Por favor, tentar novamente.'
        })
      })
  }
}