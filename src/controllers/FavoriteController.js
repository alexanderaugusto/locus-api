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

    const favorite = await user.addFavorite(property)

    return res.status(204).json()
  },

  list: async (req, res) => {
    const { user_id } = req

    const user = await User.findByPk(user_id, {
      include: {
        association: 'favorites', through: { attributes: [] },
        include: [{ association: 'images' }, { association: 'owner' }]
      }
    })

    return res.json(user.favorites)
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

    const deleted = await user.removeFavorite(property)

    return res.status(204).json()
  },
}