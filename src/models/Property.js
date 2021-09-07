module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    area: DataTypes.FLOAT,
    place: DataTypes.INTEGER,
    garage: DataTypes.INTEGER,
    animal: DataTypes.BOOLEAN,
    type: DataTypes.STRING
  })

  Property.associate = (models) => {
    Property.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' })
    Property.belongsTo(models.Address, { foreignKey: 'address_id', as: 'address' })
    Property.belongsToMany(models.User, { foreignKey: 'property_id', through: models.Favorite, as: 'favorite_users' })
    Property.belongsToMany(models.User, { foreignKey: 'property_id', through: models.Rental, as: 'rental_user' })
    Property.belongsToMany(models.User, { foreignKey: 'property_id', through: models.Visit, as: 'schedule_visits' })
    Property.hasMany(models.PropertyImage, { foreignKey: 'property_id', as: 'images' })
    Property.hasMany(models.PropertyVisit, { foreignKey: 'property_id', as: 'visits' })
  }
  
  return Property
}