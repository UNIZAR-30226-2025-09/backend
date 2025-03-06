'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artist', [
      {
        id: 1,
        name: "The Beatles",
        bio: "Banda de rock británica formada en Liverpool en 1960, considerada una de las más influyentes de la historia."
      },
      {
        id: 2,
        name: "Queen",
        bio: "Banda de rock británica liderada por Freddie Mercury, famosa por canciones como 'Bohemian Rhapsody' y 'We Will Rock You'."
      },
      {
        id: 3,
        name: "Coldplay",
        bio: "Banda británica de rock alternativo con un sonido melódico y letras profundas, conocida por 'Yellow' y 'Fix You'."
      },
      {
        id: 4,
        name: "Eminem",
        bio: "Rapper y productor estadounidense, considerado uno de los mejores MCs de la historia del hip-hop."
      },
      {
        id: 5,
        name: "Shakira",
        bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'."
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artist', null, {});
  }
};
