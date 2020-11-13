'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Image', [
      // Property 1
      {
        path: "property1_img1.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property1_img2.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property1_img3.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property1_img4.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 2
      {
        path: "property2_img1.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property2_img2.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property2_img3.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property2_img4.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 3
      {
        path: "property3_img1.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property3_img2.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property3_img3.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property3_img4.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 4
      {
        path: "property4_img1.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property4_img2.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property4_img3.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property4_img4.jpg",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Image', null, {});
  }
}
