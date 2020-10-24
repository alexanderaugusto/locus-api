const { User, Property, Image } = require('../models')
const Yup = require('yup')

module.exports = {
  create: async (req, res) => {
    const { user_id, files = [] } = req
    const {
      title,
      description,
      street,
      neighborhood,
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

    const data = {
      user_id,
      title,
      description,
      street,
      neighborhood,
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
    }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().optional(),
      street: Yup.string().required(),
      neighborhood: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      country: Yup.string().required(),
      price: Yup.number().required(),
      bedrooms: Yup.number().optional(),
      bathrooms: Yup.number().optional(),
      area: Yup.number().optional(),
      place: Yup.number().optional(),
      animal: Yup.boolean().optional(),
      type: Yup.string().required().oneOf(["Apartamento", "Casa", "Casa de Condomínio"])
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const property = await Property.create(data)

    if (!files.length) {
      return res.json({ ...property.dataValues, images: [] })
    }

    const images = files.map((file) => {
      return {
        path: file.key,
        property_id: property.id
      }
    })

    const createdImages = Image.bulkCreate(images)

    return res.json({ ...property.dataValues, images: createdImages })
  },

  list: async (req, res) => {
    const { user_id } = req.params || req

    const properties = await Property.findAll({ where: { user_id }, include: { association: 'images' } })

    return res.json(properties)
  },

  update: async (req, res) => {
    const { user_id } = req
    const { property_id } = req.params
    const {
      title,
      description,
      animal,
      street,
      neighborhood,
      city,
      state,
      country,
      price,
      bedrooms,
      bathrooms,
      area,
      place,
      type
    } = req.body

    const data = {
      title,
      description,
      street,
      neighborhood,
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
    }

    const schema = Yup.object().shape({
      title: title === undefined ? null : Yup.string().required(),
      description: description === undefined ? null : Yup.string().required(),
      street: street === undefined ? null : Yup.string().required(),
      neighborhood: neighborhood === undefined ? null : Yup.string().required(),
      city: city === undefined ? null : Yup.string().required(),
      state: state === undefined ? null : Yup.string().required(),
      country: country === undefined ? null : Yup.string().required(),
      price: price === undefined ? null : Yup.number().required(),
      bedrooms: bedrooms === undefined ? null : Yup.number().required(),
      bathrooms: bathrooms === undefined ? null : Yup.number().required(),
      area: area === undefined ? null : Yup.number().required(),
      place: place === undefined ? null : Yup.number().required(),
      animal: animal === undefined ? null : Yup.boolean().required(),
      type: type === undefined ? null : Yup.string().required().oneOf(["Apartamento", "Casa", "Casa de Condomínio"])
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const [updated] = await Property.update(data, { where: { id: property_id, user_id } })

    return res.status(204).json()
  },

  delete: async (req, res) => {
    const { user_id } = req
    const { property_id } = req.params

    const deleted = await Property.destroy({ where: { id: property_id, user_id } })

    return res.status(204).json()
  },

  list_all: async (req, res) => {
    const properties = await Property.findAll({ include: { association: 'images' } })

    return res.json(properties)
  },
}