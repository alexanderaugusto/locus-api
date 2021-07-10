module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  })

  Address.associate = (models) => {
    Address.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    Address.belongsTo(models.User, { foreignKey: 'property_id', as: 'property' })
  }
  
  return Address
}