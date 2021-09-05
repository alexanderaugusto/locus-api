'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PropertyImage', [
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
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property2_img2.jpg",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property2_img3.jpg",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property2_img4.jpg",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 3
      {
        path: "property3_img1.jpg",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property3_img2.jpg",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property3_img3.jpg",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property3_img4.jpg",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 4
      {
        path: "property4_img1.jpg",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property4_img2.jpg",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property4_img3.jpg",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property4_img4.jpg",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 5
      {
        path: "property5_img1.jpg",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property5_img2.jpg",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property5_img3.jpg",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property5_img4.jpg",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 6
      {
        path: "property6_img1.jpg",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property6_img2.jpg",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property6_img3.jpg",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property6_img4.jpg",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property6_img5.jpg",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property6_img6.jpg",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 7
      {
        path: "property7_img1.jpg",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property7_img2.jpg",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property7_img3.jpg",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property7_img4.jpg",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property7_img5.jpg",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 8
      {
        path: "property8_img1.jpg",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property8_img2.jpg",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 9
      {
        path: "property9_img1.jpg",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property9_img2.jpg",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property9_img3.jpg",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 10
      {
        path: "property10_img1.jpg",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property10_img2.jpg",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property10_img3.jpg",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 11
      {
        path: "property11_img1.jpg",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property11_img2.jpg",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property11_img3.jpg",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property11_img4.jpg",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property11_img5.jpg",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 12
      {
        path: "property12_img1.jpg",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property12_img2.jpg",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property12_img3.jpg",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 13
      {
        path: "property13_img1.jpg",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property13_img2.jpg",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 14
      {
        path: "property14_img1.jpg",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property14_img2.jpg",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property14_img3.jpg",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        path: "property14_img4.jpg",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PropertyImage', null, {});
  }
}
