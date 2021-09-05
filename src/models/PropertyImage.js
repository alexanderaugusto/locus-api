module.exports = (sequelize, DataTypes) => {
  const PropertyImage = sequelize.define('PropertyImage', {
    path: DataTypes.STRING
  })

  PropertyImage.associate = (models) => {
    PropertyImage.belongsTo(models.Property, { foreignKey: 'property_id', as: 'property' })
  }

  return PropertyImage
}