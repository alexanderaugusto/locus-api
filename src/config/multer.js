const multer = require('multer')
const path = require('path')
const mkdirp = require('mkdirp')
const crypto = require('crypto')
const cloudinary = require('./cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storageTypes = {
  local: (folder) => multer.diskStorage({
    destination: (req, file, cb) => {
      const directory = path.resolve(__dirname, "../../tmp/uploads" + folder)
      mkdirp(directory, (err) => cb(err, directory))
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err)
          cb(err)

        file.id = hash.toString("hex")
        file.key = `${file.id}-${file.originalname}`

        cb(null, file.key)
      })
    }
  }),
  cloudinary: (folder) => new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'locus/' + folder.replace('/', ''),
      public_id: (req, file) => {
        const hash = crypto.randomBytes(16).toString('hex')
        const filename = `${hash}-${file.originalname}`
        file.key = filename

        return filename.split('.').slice(0, -1).join('.')
      }
    }
  })
}

module.exports = (folder) => {
  const size = 30 // 30 MB

  return {
    dest: path.resolve(__dirname, "../../tmp/uploads"),
    storage: storageTypes[process.env.STORAGE_TYPE || "local"](folder),
    limits: {
      fileSize: size * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "image/jpeg",
        "image/jpg",
        "image/pjpeg",
        "image/png",
        "image/webp"
      ]

      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true)
      } else {
        cb(new Error("Nosso sistema não aceita arquivos com extensão " + file.mimetype))
      }
    }
  }
}