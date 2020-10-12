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

    user.addFavorite(property)
      .then((favorite) => {
        if (!favorite) {
          return res.status(400).json({
            cod: 400,
            msg: 'Ocorreu um erro ao adicionar este imóvel como favorito.'
          })
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao adicionar o imóvel como favorito. Por favor, tentar novamente.'
        })
      })
  },

  list: async (req, res) => {
    const { user_id } = req

    User.findByPk(user_id, { include: { association: 'favorites', through: { attributes: [] } } })
      .then((user) => {
        if (!user) {
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

    user.removeFavorite(property)
      .then((deleted) => {
        if (!deleted) {
          return res.status(400).json({
            cod: 400,
            msg: 'O usuário não possui este imóvel como favorito.'
          })
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao apagar o imóvel dos favoritos. Por favor, tentar novamente.'
        })
      })
  },
}