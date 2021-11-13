const auth = require('../utils/auth')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatar: DataTypes.STRING,
    is_oauth_user: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeSave: async (user) => {
        if(user.password){
          user.password = await auth.encryptPassword(user.password)
        }
      }
    }
  })

  User.associate = (models) => {
    User.hasMany(models.Property, { foreignKey: 'user_id', as: 'properties' })
    User.belongsTo(models.Address, { foreignKey: 'address_id', as: 'address' })
    User.belongsToMany(models.Property, { foreignKey: 'user_id', through: models.Favorite, as: 'favorites' })
    User.belongsToMany(models.Property, { foreignKey: 'user_id', through: models.Rental, as: 'rentals' })
    User.belongsToMany(models.Property, { foreignKey: 'user_id', through: models.Visit, as: 'visits' })
  }

  return User
}