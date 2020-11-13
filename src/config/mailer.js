const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

module.exports = () => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    secure: false,
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: process.env.MAILER_CONTACT_EMAIL,
      pass: process.env.MAILER_CONTACT_PASSWORD
    }
  })

  transporter.use("compile", hbs({
    viewEngine: {
      extName: '.html',
      partialsDir: './src/resources/mail/',
      layoutsDir: './src/resources/mail/',
      defaultLayout: 'contact.html'
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
  }))

  return transporter
}