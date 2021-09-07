module.exports = (sequelize, DataTypes) => {
  const Visit = sequelize.define('Visit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    time: DataTypes.DATE
  })

  return Visit
}