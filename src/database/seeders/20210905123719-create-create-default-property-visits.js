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
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 2
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 3
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 4
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 5
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 6
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 7
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 8
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 9
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 10
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 11
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 12
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 13
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Property 14
      {
        weekday: "monday",
        time: "08:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "09:30:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "10:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "13:45:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "14:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "monday",
        time: "16:20:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "08:30:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "09:45:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "10:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "11:10:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "13:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "14:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "15:30:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "tuesday",
        time: "16:45:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "08:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "09:30:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "10:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "11:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "14:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "15:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "wednesday",
        time: "16:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "08:30:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "09:15:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "10:20:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "11:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "13:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "15:30:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "thursday",
        time: "17:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "09:30:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "11:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "12:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:00:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weekday: "friday",
        time: "15:20:00",
        property_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PropertyVisit', null, {});
  }
}
