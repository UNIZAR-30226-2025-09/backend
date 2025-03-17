export default {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('song_artist', [
            { song_id: 1, artist_id: 1 },
            { song_id: 1, artist_id: 2 },
            { song_id: 2, artist_id: 3 },
            { song_id: 3, artist_id: 1 },
            { song_id: 4, artist_id: 4 },
            { song_id: 5, artist_id: 2 },
            { song_id: 5, artist_id: 3 },
            { song_id: 6, artist_id: 5 },
            { song_id: 7, artist_id: 6 },
            { song_id: 8, artist_id: 7 }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('song_artist', null, {});
    }
};
