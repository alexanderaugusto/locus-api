const { User, Property, Image, Address, Sequelize } = require('../models')
const Yup = require('yup')
const mailer = require('../config/mailer')
const axios = require('axios')

module.exports = {
  create: async (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.description = 'Endpoint to create a new property'

    const { user_id, files = [] } = req
    let { title, description, price, bedrooms, bathrooms, area, place, garage = 0, animal, type, address } = req.body

    try {
      address = JSON.parse(address)
    } catch (err) {
      console.error(err)
    }

    const { street, neighborhood, number, city, state, country, zipcode } = address

    function fixedEncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    }

    const addressToGeolocation = fixedEncodeURIComponent(number + ' ' + street + ', ' + city + ', ' + state + ', ' + country)

    async function getGeolocation() {
      try {
        const response = await axios.get('http://api.positionstack.com/v1/forward?access_key=a7c028b5f424c9fbd4048fcff15261cf&query=' + addressToGeolocation);
        
        geolocation = {
          'latitude': response.data['data'][0].latitude,
          'longitude': response.data['data'][0].longitude,
        }

        return geolocation

      } catch (e) {
        console.error(e)
        return false
      }
    }

    const addressGeolocation = await getGeolocation()

    let latitude =  addressGeolocation.latitude.toString();
    let longitude = addressGeolocation.longitude.toString();

    if (addressGeolocation == false){
      latitude = 'not found',
      longitude = 'not found'
    }

    const propertyData = { user_id, title, description, price, bedrooms, bathrooms, area, place, garage, animal, type }
    const addressData = { street, neighborhood, number, city, state, country, zipcode, latitude, longitude }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().optional(),
      price: Yup.number().required(),
      bedrooms: Yup.number().optional(),
      bathrooms: Yup.number().optional(),
      area: Yup.number().optional(),
      place: Yup.number().optional(),
      animal: Yup.boolean().optional(),
      type: Yup.string().required().oneOf(["Apartamento", "Casa", "Casa de Condomínio"])
    })

    await schema.validate(propertyData, {
      abortEarly: false
    })

    const createdAddress = await Address.create(addressData)
    propertyData.address_id = createdAddress.id

    const property = await Property.create(propertyData)

    property.dataValues.address = createdAddress

    if (!files.length) {
      return res.status(201).json({ ...property.dataValues, images: [] })
    } else {
      const images = files.map((file) => {
        return {
          path: file.key,
          property_id: property.id
        }
      })

      const createdImages = await Image.bulkCreate(images)
      property.dataValues.images = createdImages
    }

    return res.status(201).json(property)
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

    await Property.update(data, { where: { id: property_id, user_id } })

    return res.status(204).json()
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
      subject: 'IMovel - Um usuário tem interesse em seu imóvel',
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