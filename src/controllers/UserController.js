const { User, Property, Visit } = require('../models')
const Yup = require('yup')
const deleteFile = require('../utils/deleteFile')

module.exports = {
  create: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to create a new user'

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
        description: 'Este email já foi cadastrado anteriormente.'
      })
    }

    return res.status(201).json(user)
  },

  schedule_visit: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint schedule visit to user'

    const { user_id } = req
    const { property_id, date } = req.body

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

    const visit = await Visit.create({ user_id, property_id, date })

    return res.status(201).json(visit)
  },

  list: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to list an authenticated user'

    const { user_id } = req

    const user = await User.findByPk(user_id)

    return res.status(200).json(user)
  },

  list_properties: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to list user properties'

    const user_id = req.params.user_id || req.user_id

    const user = await User.findByPk(user_id)
    if (!user) {
      return res.status(404).json({
        cod: 404,
        description: "Usuário não encontrado."
      })
    }

    const userProperties = await Property.findAll({
      where: { user_id },
      include: [{ association: 'images' }, { association: 'owner' }, { association: 'address' }]
    })

    return res.status(200).json(userProperties)
  },

  list_favorites: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint list user favorite properties'

    const { user_id } = req

    const user = await User.findByPk(user_id, {
      include: {
        association: 'favorites', through: { attributes: [] },
        include: [{ association: 'images' }, { association: 'owner' }, { association: 'address' }]
      }
    })

    if (!user) {
      return res.status(404).json({
        cod: 404,
        description: "Usuário não encontrado."
      })
    }

    return res.status(200).json(user.favorites)
  },

  list_visits: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint list user visits'

    const { user_id } = req

    const user = await User.findByPk(user_id)
    if (!user) {
      return res.status(404).json({
        cod: 404,
        description: "Usuário não encontrado."
      })
    }

    const userVisits = await Visit.findAll({
      where: { user_id }
    })

    const propertiesId = userVisits.map(visit => visit.property_id)
    const properties = await Property.findAll({
      where: { id: propertiesId },
      include: { association: 'images' }
    })

    const visits = userVisits.map(visit => {
      const property = properties.find(property => property.id === visit.property_id)
      return { ...visit.toJSON(), property }
    })

    return res.status(200).json(visits)
  },

  update: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to update an user'

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

    await User.update(data, { where: { id: user_id } })

    return res.status(204).json()
  },

  update_image: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to update user avatar'

    const { user_id } = req
    const { key: avatar } = req.file || { key: undefined }

    const user = await User.findByPk(user_id)

    const data = {
      avatar
    }

    const schema = Yup.object().shape({
      avatar: Yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    await User.update(data, { where: { id: user_id } })

    if (avatar && user.avatar !== 'default-avatar.png') {
      deleteFile('user/' + user.avatar)
    }

    if (avatar) {
      return res.status(200).json({ avatar })
    }

    return res.status(204).json()
  },

  delete: async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to delete an authenticated user'

    const { user_id } = req

    const user = await User.findByPk(user_id)

    await User.destroy({ where: { id: user_id } })

    if (user.avatar !== 'default-avatar.png') {
      deleteFile('user/' + user.avatar)
    }

    return res.status(204).json()
  }
}