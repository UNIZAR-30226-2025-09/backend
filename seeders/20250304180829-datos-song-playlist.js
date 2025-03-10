'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('song_playlist', [
      { song_id: 1, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 2, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 3, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 4, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 5, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 6, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 7, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 8, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 9, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 10, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 11, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 12, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 13, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 14, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 15, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 16, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 17, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 18, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 19, playlist_id: 1 , date: new Date("2024-06-01") },
      { song_id: 20, playlist_id: 1 , date: new Date("2024-06-01") },

      { song_id: 1, playlist_id: 2 , date: new Date("2024-05-03") },
      { song_id: 2, playlist_id: 2 , date: new Date("2024-06-01") },
      { song_id: 3, playlist_id: 2 , date: new Date("2024-07-02")},
      { song_id: 4, playlist_id: 2 , date: new Date("2024-07-02")},
      { song_id: 5, playlist_id: 2 , date: new Date("2024-07-02")},

      { song_id: 1, playlist_id: 3 , date: new Date("2024-05-03") },
      { song_id: 2, playlist_id: 3 , date: new Date("2024-06-01") },
      { song_id: 3, playlist_id: 3 , date: new Date("2024-07-02")},
      { song_id: 4, playlist_id: 3 , date: new Date("2024-07-02")},
      { song_id: 5, playlist_id: 3 , date: new Date("2024-07-02")},

      { song_id: 1, playlist_id: 4 , date: new Date("2024-05-03") },
      { song_id: 2, playlist_id: 4 , date: new Date("2024-06-01") },
      { song_id: 3, playlist_id: 4 , date: new Date("2024-07-02")},
      { song_id: 4, playlist_id: 4 , date: new Date("2024-07-02")},
      { song_id: 5, playlist_id: 4 , date: new Date("2024-07-02")},

      { song_id: 1, playlist_id: 5 , date: new Date("2024-05-03") },
      { song_id: 2, playlist_id: 5 , date: new Date("2024-06-01") },
      { song_id: 3, playlist_id: 5 , date: new Date("2024-07-02")},
      { song_id: 4, playlist_id: 5 , date: new Date("2024-07-02")},
      { song_id: 5, playlist_id: 5 , date: new Date("2024-07-02")},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('song_playlist', null, {});
  }
};
