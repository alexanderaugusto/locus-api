const { User, Property } = require('../models')
const positionStackApi = require('../services/positionStackApi')

module.exports = {
  get_geolocation: async (req, res) => {
    // #swagger.tags = ['Get geolocation'] 
    // #swagger.description = 'Endpoint to get geolocation from address

    const { street, number, neighborhood, city, state, country, zipcode } = req.query

    const config = {
      params: {
        query: `${street} ${number}, ${neighborhood}, ${city}, ${state}, ${country}, ${zipcode}`
      }
    }

    const geolocationResponse = await positionStackApi('/v1/forward', config)

    const geolocation = {
      latitude: geolocationResponse.data.data[0] ? geolocationResponse.data.data[0].latitude : null,
      longitude: geolocationResponse.data.data[0] ? geolocationResponse.data.data[0].longitude : null
    }
    
    return res.status(200).json(geolocation)
  }
}