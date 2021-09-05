module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('PropertyVisit', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      weekday: {
        type: Sequelize.STRING,
        allowNull: false
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      property_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Property', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PropertyVisit')
  }
}
