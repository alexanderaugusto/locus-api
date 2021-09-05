const axios = require('axios')

exports.getGeolocation = async (addrress) => {
  const addressToGeolocation = addrress.number + ' ' + addrress.street + ', ' + addrress.city + ', ' + addrress.state + ', ' + addrress.country
 
  const addressEncoded = encodeURIComponent(addressToGeolocation).replace(/[!'()*]/g, (c) => {
    return '%' + c.charCodeAt(0).toString(16)
  })

  try {
    const response = await axios.get('http://api.positionstack.com/v1/forward?access_key=a7c028b5f424c9fbd4048fcff15261cf&query=' + addressEncoded)

    return {
      latitude: response.data['data'][0].latitude,
      longitude: response.data['data'][0].longitude
    }
  } catch (e) {
    console.error(e)

    return {
      latitude: null,
      longitude: null
    }
  }
}