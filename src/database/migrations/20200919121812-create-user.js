module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      is_oauth_user: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false 
      },
      address_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Address', key: 'id' },
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
    return queryInterface.dropTable('User')
  }
}
