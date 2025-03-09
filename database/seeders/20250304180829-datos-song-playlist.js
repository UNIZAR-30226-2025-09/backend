'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('song_playlist', [
      { song_id: 1, playlist_id: 1 },
      { song_id: 2, playlist_id: 1 },
      { song_id: 3, playlist_id: 1 },
      { song_id: 4, playlist_id: 1 },
      { song_id: 5, playlist_id: 1 },

      { song_id: 1, playlist_id: 2 },
      { song_id: 2, playlist_id: 2 },
      { song_id: 3, playlist_id: 2 },
      { song_id: 4, playlist_id: 2 },
      { song_id: 5, playlist_id: 2 },

      { song_id: 1, playlist_id: 3 },
      { song_id: 2, playlist_id: 3 },
      { song_id: 3, playlist_id: 3 },
      { song_id: 4, playlist_id: 3 },
      { song_id: 5, playlist_id: 3 },

      { song_id: 1, playlist_id: 4 },
      { song_id: 2, playlist_id: 4 },
      { song_id: 3, playlist_id: 4 },
      { song_id: 4, playlist_id: 4 },
      { song_id: 5, playlist_id: 4 },

      { song_id: 1, playlist_id: 5 },
      { song_id: 2, playlist_id: 5 },
      { song_id: 3, playlist_id: 5 },
      { song_id: 4, playlist_id: 5 },
      { song_id: 5, playlist_id: 5 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('song_playlist', null, {});
  }
};
