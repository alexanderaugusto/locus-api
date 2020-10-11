const fs = require('fs')
const path = require('path')

const cloudinary = require('../config/cloudinary')

module.exports = (file) => {
  if (process.env.STORAGE_TYPE === 'local') {
    const pathname = path.resolve(__dirname, '../../tmp/uploads/' + file)
    if (!pathname)
      return

    fs.unlink(pathname, (err) => {
      if (err) {
        console.error(err)
        return
      }
    })
  }else{
    cloudinary.uploader.destroy(file.split('.').slice(0, -1).join('.'), (err, result) => console.log(err, result))
  }
}