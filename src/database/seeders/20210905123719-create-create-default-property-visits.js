'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PropertyVisit', [
      // Property 1
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 2
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 3
      {
        weekday: "wednessday",
        time: "10:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 4
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 5
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 6
      {
        weekday: "saturday",
        time: "13:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 7
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 8
      {
        weekday: "tuesday",
        time: "15:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 9
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 10
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 11
      {
        weekday: "friday",
        time: "18:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 12
      {
        weekday: "saturday",
        time: "08:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 13
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 14
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PropertyVisit', null, {});
  }
}
