const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    if (process.env.NODE_ENV === 'production') {
      await queryInterface.sequelize.query(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1000`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Favorite_id_seq" RESTART WITH 1000`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Property_id_seq" RESTART WITH 1000`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "PropertyImage_id_seq" RESTART WITH 1000`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "PropertyVisit_id_seq" RESTART WITH 1000`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Rental_id_seq" RESTART WITH 1000`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1000`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Visit_id_seq" RESTART WITH 1000`)
    } else {
      await queryInterface.sequelize.query(`ALTER TABLE Address AUTO_INCREMENT=1000`)
      await queryInterface.sequelize.query(`ALTER TABLE Favorite AUTO_INCREMENT=1000`)
      await queryInterface.sequelize.query(`ALTER TABLE Property AUTO_INCREMENT=1000`)
      await queryInterface.sequelize.query(`ALTER TABLE PropertyImage AUTO_INCREMENT=1000`)
      await queryInterface.sequelize.query(`ALTER TABLE PropertyVisit AUTO_INCREMENT=1000`)
      await queryInterface.sequelize.query(`ALTER TABLE Rental AUTO_INCREMENT=1000`)
      await queryInterface.sequelize.query(`ALTER TABLE User AUTO_INCREMENT=1000`)
      await queryInterface.sequelize.query(`ALTER TABLE Visit AUTO_INCREMENT=1000`)
    }
  },

  down: async (queryInterface, Sequelize) => { 
    if (process.env.NODE_ENV === 'production') {
      await queryInterface.sequelize.query(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Favorite_id_seq" RESTART WITH 1`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Property_id_seq" RESTART WITH 1`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "PropertyImage_id_seq" RESTART WITH 1`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "PropertyVisit_id_seq" RESTART WITH 1`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Rental_id_seq" RESTART WITH 1`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`)
      await queryInterface.sequelize.query(`ALTER SEQUENCE "Visit_id_seq" RESTART WITH 1`)
    } else {
      await queryInterface.sequelize.query(`ALTER TABLE Address AUTO_INCREMENT=1`)
      await queryInterface.sequelize.query(`ALTER TABLE Favorite AUTO_INCREMENT=1`)
      await queryInterface.sequelize.query(`ALTER TABLE Property AUTO_INCREMENT=1`)
      await queryInterface.sequelize.query(`ALTER TABLE PropertyImage AUTO_INCREMENT=1`)
      await queryInterface.sequelize.query(`ALTER TABLE PropertyVisit AUTO_INCREMENT=1`)
      await queryInterface.sequelize.query(`ALTER TABLE Rental AUTO_INCREMENT=1`)
      await queryInterface.sequelize.query(`ALTER TABLE User AUTO_INCREMENT=1`)
      await queryInterface.sequelize.query(`ALTER TABLE Visit AUTO_INCREMENT=1`)
    }
  }
}


