const { User, Property } = require('../models')

module.exports = {
  add: async (req, res) => {
    // #swagger.tags = ['Favorite Property']
    // #swagger.description = 'Endpoint to favoite a property'

    const { user_id } = req
    const { property_id } = req.params

    const user = await User.findByPk(user_id)
    if (!user) {
      return res.status(404).json({
        cod: 404,
        description: 'Usuário não encontrado.'
      })
    }

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: 'Usuário não encontrado.'
      })
    }

    await user.addFavorite(property)

    return res.status(204).json()
  },

  delete: async (req, res) => {
    // #swagger.tags = ['Favorite Property']
    // #swagger.description = 'Endpoint delete property from favorites'

    const { user_id } = req
    const { property_id } = req.params

    const user = await User.findByPk(user_id)
    if (!user) {
      return res.status(404).json({
        cod: 404,
        description: 'Usuário não encontrado.'
      })
    }

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: 'IMóvel não encontrado.'
      })
    }

    await user.removeFavorite(property)

    return res.status(204).json()
  },
}