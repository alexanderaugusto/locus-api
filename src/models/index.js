const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const db = {}

const sequelize = new Sequelize(dbConfig)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

try {
  sequelize.authenticate()
  console.log('Database connection has been established successfully:', `${dbConfig.dialect}`)
} catch (err) {
  console.error('Unable to connect to the database:', err)
}

module.exports = db
