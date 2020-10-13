const { User, Property, Image } = require('../models')

module.exports = {
  create: async (req, res) => {
    const { user_id, files = [] } = req
    const {
      title,
      description,
      street,
      city,
      state,
      country,
      price,
      bedrooms,
      bathrooms,
      area,
      place,
      animal,
      type
    } = req.body

    console.log(req.body)
    
    Property.create({ user_id, title, description, animal, street, city, state, country, price, bedrooms, bathrooms, area, place, type })
      .then((property) => {
        if (!property) {
          return res.status(400).json({
            cod: 400,
            message: 'Os dados fornecidos são inválidos. Por favor, verifique os dados enviados e tente novamente.'
          })
        }

        if (!files.length) {
          return res.json({ ...property.dataValues, images: [] })
        }

        const images = files.map((file) => {
          return {
            path: file.key,
            property_id: property.id
          }
        })

        Image.bulkCreate(images)
          .then((createdImages) => {
            return res.json({ ...property.dataValues, images: createdImages })
          })
          .catch((err) => {
            return res.json({
              ...property.dataValues,
              images: [],
              message: 'Seu imóvel foi inserido, porém houve um erro ao adicionar as imagens, tente enviá-las novamente.'
            })
          })
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao criar um novo imóvel. Por favor, tentar novamente.'
        })
      })
  },

  list: async (req, res) => {
    const { user_id } = req.params

    User.findByPk(user_id, { include: { association: 'properties' } })
      .then((user) => {
        if (!user) {
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

  update: async (req, res) => {
    const { user_id } = req
    const { property_id } = req.params
    const { title, description, animal, street, city, state, country, price, bedrooms, bathrooms, area, place, type } = req.body

    Property.update({
      title,
      description,
      animal,
      street,
      city,
      state,
      country,
      price,
      bedrooms,
      bathrooms,
      area,
      place,
      type
    }, { where: { id: property_id, user_id } })
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
          msg: 'Ocorreu um erro inesperado ao atualizar o imóvel. Por favor, tentar novamente.'
        })
      })
  },

  delete: async (req, res) => {
    const { user_id } = req
    const { property_id } = req.params

    Property.destroy({ where: { id: property_id, user_id } })
      .then((deleted) => {
        if (!deleted) {
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos apagar este imóvel. Por favor, tente novamente.'
          })
        }

        return res.status(204).json()
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao apagar o imóvel. Por favor, tentar novamente.'
        })
      })
  },

  list_all: async (req, res) => {
    Property.findAll({ include: { association: 'images' } })
      .then((properties) => {
        if (!properties) {
          return res.status(400).json({
            cod: 400,
            message: 'Não conseguimos listar as propriedades! Por favor, verifique os dados fornecidos e tente novamente.'
          })
        }

        return res.json(properties)
      })
      .catch((err) => {
        return res.status(500).json({
          cod: 500,
          msg: 'Ocorreu um erro inesperado ao listar as propriedades. Por favor, tentar novamente.'
        })
      })
  },
}