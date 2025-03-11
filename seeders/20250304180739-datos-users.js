import bcrypt from 'bcryptjs';

/**
 * Inserta usuarios de prueba en la base de datos con contraseñas hasheadas.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function up(queryInterface, Sequelize) {
  const saltRounds = 10;

  await queryInterface.bulkInsert('users', [
    {
      nickname: "rocklover",
      password: await bcrypt.hash("password123", saltRounds), // Contraseña hasheada
      mail: "rocklover@example.com",
      style_fav: "Rock",
      is_premium: true
    },
    {
      nickname: "latinoheat",
      password: await bcrypt.hash("securepass", saltRounds),
      mail: "latinoheat@example.com",
      style_fav: "Reggaetón",
      is_premium: false
    },
    {
      nickname: "chillvibes",
      password: await bcrypt.hash("chill123", saltRounds),
      mail: "chillvibes@example.com",
      style_fav: "Lo-Fi",
      is_premium: true
    },
    {
      nickname: "indieworld",
      password: await bcrypt.hash("indiepass", saltRounds),
      mail: "indieworld@example.com",
      style_fav: "Indie",
      is_premium: false
    },
    {
      nickname: "fitbeats",
      password: await bcrypt.hash("fitmusic", saltRounds),
      mail: "fitbeats@example.com",
      style_fav: "Electrónica",
      is_premium: true
    },
    {
      nickname: "test",
      password: await bcrypt.hash("123456", saltRounds), // Se hashea también para evitar problemas
      mail: "test@email.com",
      style_fav: "test",
      is_premium: true
    }
  ], {});
}

/**
 * Elimina todos los usuarios insertados en la migración `up`.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {});
}