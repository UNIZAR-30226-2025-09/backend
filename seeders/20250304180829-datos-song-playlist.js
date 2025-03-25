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