'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('playlist', [
      {
        name: "Rock Clásico",
        user_id: 1,
        artist_id: 1,
        description: "Las mejores canciones de rock de los 80s y 90s.",
        type: "public",
        front_page: "http://localhost:5001/images/p1.png"
      },
      {
        name: "Fiesta Latina",
        user_id: 2,
        artist_id: 2,
        description: "Reggaetón, salsa y merengue para una fiesta increíble.",
        type: "public",
        front_page: "http://localhost:5001/images/p1.png"
      },
      {
        name: "Relax & Chill",
        user_id: 3,
        artist_id: null,
        description: "Música tranquila para estudiar o relajarse.",
        type: "private",
        front_page: "http://localhost:5001/images/p2.png"
      },
      {
        name: "Indie Vibes",
        user_id: 4,
        artist_id: null,
        description: "Descubre lo mejor del indie alternativo.",
        type: "public",
        front_page: "http://localhost:5001/images/p2.png"
      },
      {
        name: "Workout Mix",
        user_id: 5,
        artist_id: null,
        description: "Las canciones más motivadoras para entrenar.",
        type: "public",
        front_page: "http://localhost:5001/images/Bad-Bunny.png"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('playlist', null, {});
  }
};
