module.exports = (sequelize, DataTypes) => {
  const Visit = sequelize.define('Visit', {
    time: DataTypes.DATE
  })

  return Visit
}