module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  })

  Address.associate = (models) => {
    Address.hasOne(models.User, { foreignKey: 'address_id', as: 'user' })
    Address.hasOne(models.Property, { foreignKey: 'address_id', as: 'property' })
  }
  
  return Address
}