/**
 * Inserta registros en la tabla `song_playlist`.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('song_playlist', [
      //Rock Español
    { song_id: 3, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 10, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 5, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 11, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 17, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 18, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 19, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 20, playlist_id: 1, date: new Date("2025-03-25") },
    { song_id: 21, playlist_id: 1, date: new Date("2025-03-25") },

      //Los 2000 España
    { song_id: 1, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 2, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 3, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 5, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 6, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 7, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 8, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 9, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 10, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 11, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 12, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 13, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 14, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 15, playlist_id: 2, date: new Date("2025-03-23") },
    { song_id: 16, playlist_id: 2, date: new Date("2025-03-23") },

    //Exitos España
    { song_id: 22, playlist_id: 3, date: new Date("2025-03-25") },
    { song_id: 23, playlist_id: 3, date: new Date("2025-03-25") },
    { song_id: 24, playlist_id: 3, date: new Date("2025-03-25") },
    { song_id: 25, playlist_id: 3, date: new Date("2025-03-25") },
    { song_id: 26, playlist_id: 3, date: new Date("2025-03-25") },
    { song_id: 27, playlist_id: 3, date: new Date("2025-03-25") },
    { song_id: 28, playlist_id: 3, date: new Date("2025-03-25") },
    { song_id: 29, playlist_id: 3, date: new Date("2025-03-25") },

    //temardos
    { song_id: 4, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 22, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 25, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 23, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 27, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 30, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 32, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 33, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 31, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 43, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 37, playlist_id: 4, date: new Date("2025-03-27") },
    { song_id: 28, playlist_id: 4, date: new Date("2025-03-27") },

    //FINO

    //Que te den

    //BARRAS
    { song_id: 26, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 37, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 38, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 32, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 39, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 40, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 41, playlist_id: 7, date: new Date("2025-03-27") },

    //PopConÑ

    //Flamenco y Bachata
    { song_id: 42, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 36, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 35, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 34, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id:  1, playlist_id: 9, date: new Date("2025-03-27") },

    //Prueba album extremo duro
    { song_id: 18, playlist_id: 10, date: new Date("2025-03-25") },

    //Album Sempre cor
    { song_id: 45, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 46, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 47, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 48, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 49, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 50, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 51, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 52, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 53, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 54, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 55, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 56, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 57, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 58, playlist_id: 12, date: new Date("2025-04-25") },

    //Album Sempre cor deluxe
    { song_id: 59, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 60, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 61, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 62, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 63, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 64, playlist_id: 11, date: new Date("2025-04-25") }

  ], {});
}

/**
 * Elimina los registros insertados en la tabla `song_playlist`.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('song_playlist', null, {});
}