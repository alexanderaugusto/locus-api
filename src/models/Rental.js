module.exports = (sequelize, DataTypes) => {
  const Rental = sequelize.define('Rental', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  })

  return Rental
}