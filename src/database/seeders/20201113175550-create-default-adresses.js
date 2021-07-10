'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Address', [
      {
        id: 1,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 10,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 11,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 12,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 13,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 14,
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Address', null, {});
  }
}
