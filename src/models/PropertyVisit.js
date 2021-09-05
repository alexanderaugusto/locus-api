module.exports = (sequelize, DataTypes) => {
  const PropertyVisit = sequelize.define('PropertyVisit', {
    weekday: DataTypes.STRING,
    time: DataTypes.TIME
  })

  PropertyVisit.associate = (models) => {
    PropertyVisit.belongsTo(models.Property, { foreignKey: 'property_id', as: 'property' })
  }

  return PropertyVisit
}