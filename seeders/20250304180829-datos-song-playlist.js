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
    { song_id: 70, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 71, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 72, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 73, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 74, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 75, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 76, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 77, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 78, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 79, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 80, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 81, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 82, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 83, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 84, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 85, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 86, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 66, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 67, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 68, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 69, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 65, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 50, playlist_id: 5, date: new Date("2025-03-27") },
    { song_id: 54, playlist_id: 5, date: new Date("2025-03-27") },

    //Que te den
    { song_id: 37, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 38, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 39, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 40, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 41, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 45, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 46, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 47, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 51, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 56, playlist_id: 6, date: new Date("2025-03-27") },
    { song_id: 60, playlist_id: 6, date: new Date("2025-03-27") },

    //BARRAS
    { song_id: 26, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 37, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 38, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 32, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 39, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 40, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 41, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 45, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 46, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 28, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 31, playlist_id: 7, date: new Date("2025-03-27") },
    { song_id: 33, playlist_id: 7, date: new Date("2025-03-27") },

    //PopConÑ
    { song_id: 2, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 5, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 6, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 7, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 8, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 10, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 12, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 13, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 14, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 15, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 16, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 49, playlist_id: 8, date: new Date("2025-03-27") },
    { song_id: 64, playlist_id: 8, date: new Date("2025-03-27") },

    //Flamenco y Bachata
    { song_id: 42, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 36, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 35, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 34, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 1, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 52, playlist_id: 9, date: new Date("2025-03-27") },
    { song_id: 58, playlist_id: 9, date: new Date("2025-03-27") },

    

    //Album Sempre cor
    { song_id: 45, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 46, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 47, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 48, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 49, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 50, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 51, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 52, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 53, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 54, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 55, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 56, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 57, playlist_id: 11, date: new Date("2025-04-25") },
    { song_id: 58, playlist_id: 11, date: new Date("2025-04-25") },

    //Album Sempre cor deluxe
    { song_id: 59, playlist_id: 10, date: new Date("2025-04-25") },
    { song_id: 60, playlist_id: 10, date: new Date("2025-04-25") },
    { song_id: 61, playlist_id: 10, date: new Date("2025-04-25") },
    { song_id: 62, playlist_id: 10, date: new Date("2025-04-25") },
    { song_id: 63, playlist_id: 10, date: new Date("2025-04-25") },
    { song_id: 64, playlist_id: 10, date: new Date("2025-04-25") },

    //Album Mor no lo temas a la oscuridad
    { song_id: 70, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 71, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 72, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 73, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 74, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 75, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 76, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 77, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 78, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 79, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 80, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 81, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 82, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 83, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 84, playlist_id: 12, date: new Date("2025-04-25") },
    { song_id: 85, playlist_id: 12, date: new Date("2025-04-25") },

    // Album El Canto del Loco
    { song_id: 7, playlist_id: 13, date: new Date("2025-05-02") },
    { song_id: 8, playlist_id: 13, date: new Date("2025-05-02") },
    { song_id: 9, playlist_id: 13, date: new Date("2025-05-02") },
    { song_id: 87, playlist_id: 13, date: new Date("2025-05-02") },
    { song_id: 88, playlist_id: 13, date: new Date("2025-05-02") },
    { song_id: 89, playlist_id: 13, date: new Date("2025-05-02") },
    
    // Album Melendi
    { song_id: 15, playlist_id: 14, date: new Date("2025-05-02") },
    { song_id: 90, playlist_id: 14, date: new Date("2025-05-02") },
    { song_id: 91, playlist_id: 14, date: new Date("2025-05-02") },
    { song_id: 92, playlist_id: 14, date: new Date("2025-05-02") },
    
    // Album Fito
    { song_id: 11, playlist_id: 15, date: new Date("2025-05-02") },
    { song_id: 12, playlist_id: 15, date: new Date("2025-05-02") },

    // Album Fito (Por la boca vive el pez)
    { song_id: 19, playlist_id: 18, date: new Date("2025-05-02") },
    { song_id: 93, playlist_id: 18, date: new Date("2025-05-02") },
    { song_id: 94, playlist_id: 18, date: new Date("2025-05-02") },
    
    // Album Anuel
    { song_id: 30, playlist_id: 16, date: new Date("2025-05-02") },
    { song_id: 31, playlist_id: 16, date: new Date("2025-05-02") },
    { song_id: 32, playlist_id: 16, date: new Date("2025-05-02") },
    { song_id: 95, playlist_id: 16, date: new Date("2025-05-02") },
    { song_id: 96, playlist_id: 16, date: new Date("2025-05-02") },
    { song_id: 97, playlist_id: 16, date: new Date("2025-05-02") },
    
    // Album CTangana
    { song_id: 34, playlist_id: 17, date: new Date("2025-05-02") },
    { song_id: 35, playlist_id: 17, date: new Date("2025-05-02") },
    { song_id: 99, playlist_id: 17, date: new Date("2025-05-02") },
    { song_id: 100, playlist_id: 17, date: new Date("2025-05-02") },
    { song_id: 101, playlist_id: 17, date: new Date("2025-05-02") },

    // Album Violadores (VV)
    { song_id: 103, playlist_id: 19, date: new Date("2025-05-02") },
    { song_id: 104, playlist_id: 19, date: new Date("2025-05-02") },
    { song_id: 105, playlist_id: 19, date: new Date("2025-05-02") },

    // Album Kase.O
    { song_id: 40, playlist_id: 20, date: new Date("2025-05-02") },
    { song_id: 41, playlist_id: 20, date: new Date("2025-05-02") },
    { song_id: 106, playlist_id: 20, date: new Date("2025-05-02") },
    { song_id: 107, playlist_id: 20, date: new Date("2025-05-02") }

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