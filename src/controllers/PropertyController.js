const { User, Property, PropertyImage, PropertyVisit, Address, Sequelize } = require('../models')
const Yup = require('yup')
const mailer = require('../config/mailer')
const { getGeolocation } = require('../utils/functions')
const { STATES, WEEKDAYS } = require('../utils/constants')
const deleteFile = require('../utils/deleteFile')

module.exports = {
  create: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to create a new property'

    const { user_id, files = [] } = req
    let { title, description, price, bedrooms, bathrooms, area, place, garage = 0, animal, type, address = {}, available_times } = req.body
    const { street, neighborhood, number, city, state, country, zipcode } = address

    const propertyData = { user_id, title, description, price, bedrooms, bathrooms, area, place, garage, animal, type }
    const addressData = { street, neighborhood, number, city, state, country, zipcode }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().optional(),
      price: Yup.number().required(),
      bedrooms: Yup.number().optional(),
      bathrooms: Yup.number().optional(),
      area: Yup.number().optional(),
      place: Yup.number().optional(),
      animal: Yup.boolean().optional(),
      type: Yup.string().required().oneOf(["Apartamento", "Casa", "Casa de Condomínio"]),
      address: Yup.object().shape({
        street: Yup.string().required(),
        neighborhood: Yup.string().required(),
        number: Yup.number().optional(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        country: Yup.string().required(),
        zipcode: Yup.string().required()
      })
    })

    await schema.validate({ ...propertyData, address: addressData }, {
      abortEarly: false
    })

    const addressGeolocation = await getGeolocation(address)
    const latitude = addressGeolocation.latitude
    const longitude = addressGeolocation.longitude

    addressData.latitude = latitude
    addressData.longitude = longitude

    const createdAddress = await Address.create(addressData)
    propertyData.address_id = createdAddress.id

    const property = await Property.create(propertyData)
    property.dataValues.address = createdAddress

    const images = files.map((file) => {
      return {
        path: file.key,
        property_id: property.id
      }
    })
    const createdImages = await PropertyImage.bulkCreate(images)
    property.dataValues.images = createdImages

    if (available_times) {
      const visits = []
      Object.entries(available_times).forEach(item => {
        const key = item[0]
        const value = item[1]

        if (["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].includes(key) && value) {
          value.forEach(time => {
            visits.push({
              weekday: key,
              time,
              property_id: property.id
            })
          })
        }
      })
      await PropertyVisit.bulkCreate(visits)
      property.dataValues.visits = available_times
    }

    return res.status(201).json(property)
  },

  add_images: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to add images to property'

    const { files = [] } = req
    const { property_id } = req.params

    const schema = Yup.object().shape({
      files: Yup.array().min(1).required(),
    })

    await schema.validate({ files }, {
      abortEarly: false
    })

    const images = files.map((file) => {
      return {
        path: file.key,
        property_id: property_id
      }
    })

    const createdImages = await PropertyImage.bulkCreate(images)

    return res.status(201).json(createdImages)
  },

  add_visit: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to add available times to property'
    const { property_id } = req.params
    let { weekday, time } = req.body

    const data = {
      weekday,
      time,
      property_id
    }

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    const visit = await PropertyVisit.findOne({ where: { property_id, weekday, time } })
    if (visit) {
      return res.status(409).json({
        cod: 409,
        description: "Horário já cadastrado para essa data."
      })
    }

    const schema = Yup.object().shape({
      weekday: Yup.string().required().oneOf(WEEKDAYS),
      time: Yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const createdVisits = await PropertyVisit.create(data)

    return res.status(201).json(createdVisits)
  },

  list: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to list a property by id'

    const property_id = req.params.property_id

    const property = await Property.findByPk(property_id, {
      include: [{ association: 'images' }, { association: 'owner' }, { association: 'address' }]
    })

    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    return res.status(200).json(property)
  },

  list_visits: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to list property visits'

    const property_id = req.params.property_id

    const property = await Property.findByPk(property_id, {
      include: [{ association: 'visits' }]
    })

    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    const today = new Date()
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset())
    today.setDate(today.getDate() + 1)

    const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const visits = []

    const available_times = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    }

    property.dataValues.visits.forEach(value => {
      available_times[value.weekday].push(value.time)
    })

    while (true) {
      const weekday = weekdays[today.getDay()]

      if (available_times[weekday].length) {
        visits.push({
          weekday,
          date: new Date(today),
          available_times: available_times[weekday]
        })
      }

      today.setDate(today.getDate() + 1)

      if (visits.length >= 9) {
        break
      }
    }

    return res.status(200).json(visits)
  },

  update: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to update a property'

    const { user_id } = req
    const { property_id } = req.params
    const {
      title,
      description,
      animal,
      price,
      bedrooms,
      bathrooms,
      area,
      place,
      garage,
      type
    } = req.body

    const data = {
      title,
      description,
      price,
      bedrooms,
      bathrooms,
      area,
      place,
      garage,
      animal,
      type
    }

    const schema = Yup.object().shape({
      title: title === undefined ? null : Yup.string().required(),
      description: description === undefined ? null : Yup.string().required(),
      price: price === undefined ? null : Yup.number().required(),
      bedrooms: bedrooms === undefined ? null : Yup.number().required(),
      bathrooms: bathrooms === undefined ? null : Yup.number().required(),
      area: area === undefined ? null : Yup.number().required(),
      place: place === undefined ? null : Yup.number().required(),
      garage: garage === undefined ? null : Yup.number().required(),
      animal: animal === undefined ? null : Yup.boolean().required(),
      type: type === undefined ? null : Yup.string().required().oneOf(["Apartamento", "Casa", "Casa de Condomínio"])
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    const [updated] = await Property.update(data, { where: { id: property_id, user_id } })

    if (!updated) {
      return res.status(400).json({
        cod: 400,
        description: "Não foi possível atualizar o imóvel."
      })
    }

    const propertyUpdated = await Property.findByPk(property_id)

    return res.status(200).json(propertyUpdated)
  },

  update_address: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to update a property address'

    const { property_id } = req.params
    const {
      street,
      neighborhood,
      number,
      city,
      state,
      country,
      zipcode
    } = req.body

    const data = {
      street,
      neighborhood,
      number: number !== undefined && parseInt(number, 10),
      city,
      state,
      country,
      zipcode
    }

    const schema = Yup.object().shape({
      street: street === undefined ? null : Yup.string().required(),
      neighborhood: neighborhood === undefined ? null : Yup.string().required(),
      number: number === undefined ? null : Yup.number().required(),
      city: city === undefined ? null : Yup.string().required(),
      state: state === undefined ? null : Yup.string().required().oneOf(STATES),
      country: country === undefined ? null : Yup.string().required(),
      zipcode: zipcode === undefined ? null : Yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    const [updated] = await Address.update(data, { where: { id: property.address_id } })

    if (!updated) {
      return res.status(400).json({
        cod: 400,
        description: "Não foi possível atualizar o endereço."
      })
    }

    const addressUpdated = await Address.findByPk(property.address_id)

    return res.status(200).json(addressUpdated)
  },

  delete: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to delete a property'

    const { user_id } = req
    const { property_id } = req.params

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    await Property.destroy({ where: { id: property_id, user_id } })

    return res.status(204).json()
  },

  delete_visit: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to delete a property visit'

    const { property_id } = req.params
    const { weekday, time } = req.body

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    const visit = await PropertyVisit.findOne({ where: { property_id, weekday, time } })
    if (!visit) {
      return res.status(404).json({
        cod: 404,
        description: "Visita não cadastrada nesse horário."
      })
    }

    await PropertyVisit.destroy({ where: { property_id, weekday, time } })

    return res.status(204).json()
  },

  delete_image: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to delete a property visit'

    const { property_id } = req.params
    const { image_id } = req.body

    const property = await Property.findByPk(property_id)
    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    const image = await PropertyImage.findByPk(image_id)
    if (!image) {
      return res.status(404).json({
        cod: 404,
        description: "Imagem não encontrada."
      })
    }

    const deleted = await PropertyImage.destroy({ where: { id: image_id } })

    if (!deleted) {
      return res.status(400).json({
        cod: 400,
        description: "Não foi possível excluir a imagem."
      })
    }

    deleteFile('property/' + image.path)

    return res.status(204).json()
  },

  list_all: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to list all properties'

    const { user_id } = req
    const { price, bedrooms, bathrooms, area, place, animal, type } = JSON.parse(JSON.stringify(req.query))

    const filter = {
      price: { [Sequelize.Op.between]: price && JSON.parse(JSON.stringify(price)) },
      bedrooms: bedrooms && parseInt(bedrooms, 10),
      bathrooms: bathrooms && parseInt(bathrooms, 10),
      area: { [Sequelize.Op.between]: area && JSON.parse(JSON.stringify(area)) },
      place: place && parseInt(place, 10),
      animal: animal && JSON.parse(animal),
      type: type && JSON.parse(JSON.stringify(type))
    }

    Object.entries(filter).forEach(([key]) => req.query[key] === undefined && delete filter[key])

    const properties = await Property.findAll({
      include: [{ association: 'images' }, { association: 'owner' }, { association: 'address' }],
      where: filter
    })

    let favorites = []

    if (user_id) {
      const user = await User.findByPk(user_id, {
        include: {
          association: 'favorites', through: { attributes: [] },
          include: { association: 'images' }
        }
      })

      favorites = user.favorites
    }

    properties.forEach((property) => {
      if (!favorites.every((favorite) => favorite.id !== property.id)) {
        property.dataValues.favorite = true
      } else {

        property.dataValues.favorite = false
      }
    })

    return res.status(200).json(properties)
  },

  contact: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint enter to enter in contact with property owner'

    const { user_id } = req
    const { property_id } = req.params
    const { message } = req.body

    const user = await User.findByPk(user_id)
    const property = await Property.findByPk(property_id, {
      include: [
        { association: 'images' },
        { association: 'owner' }
      ]
    })

    if (!property) {
      return res.status(404).json({
        cod: 404,
        description: "Imóvel não encontrado."
      })
    }

    const result = await mailer().sendMail({
      to: property.owner.email,
      from: process.env.MAILER_CONTACT_EMAIL,
      subject: 'Locus - Um usuário tem interesse em seu imóvel',
      template: 'contact',
      context: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        title: property.title,
        image: property.images.length ? property.images[0].path : "",
        owner: property.owner.name,
        message
      }
    })

    return res.status(200).json(result)
  }
}