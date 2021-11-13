const GoogleApi = require('googleapis').google
const OAuth2 = GoogleApi.auth.OAuth2

module.exports = (accessToken) => {
  const oauth2Client = new OAuth2()
  oauth2Client.setCredentials({ access_token: accessToken })
  const oauth2 = GoogleApi.oauth2({
    auth: oauth2Client,
    version: 'v2'
  })
  return oauth2.userinfo
}