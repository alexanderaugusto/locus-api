'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        id: 1,
        email: 'imovelapp2020@outlook.com',
        password: '$2a$08$/udQ0MAv9Dn10OyORzqCmeYoghTEDxlun42aOWb7UhKkUnRKlMmwy', // !IMovel123App
        name: 'Equipe IMovel',
        cpf: '111.111.111.05',
        phone: '(35) 99999-9999',
        avatar: 'default-avatar.png',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
}
