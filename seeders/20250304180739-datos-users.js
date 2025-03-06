'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10;

    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        nickname: "rocklover",
        password: await bcrypt.hash("password123", saltRounds), // Contraseña hasheada
        mail: "rocklover@example.com",
        style_fav: "Rock",
        is_premium: true
      },
      {
        id: 2,
        nickname: "latinoheat",
        password: await bcrypt.hash("securepass", saltRounds),
        mail: "latinoheat@example.com",
        style_fav: "Reggaetón",
        is_premium: false
      },
      {
        id: 3,
        nickname: "chillvibes",
        password: await bcrypt.hash("chill123", saltRounds),
        mail: "chillvibes@example.com",
        style_fav: "Lo-Fi",
        is_premium: true
      },
      {
        id: 4,
        nickname: "indieworld",
        password: await bcrypt.hash("indiepass", saltRounds),
        mail: "indieworld@example.com",
        style_fav: "Indie",
        is_premium: false
      },
      {
        id: 5,
        nickname: "fitbeats",
        password: await bcrypt.hash("fitmusic", saltRounds),
        mail: "fitbeats@example.com",
        style_fav: "Electrónica",
        is_premium: true
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
