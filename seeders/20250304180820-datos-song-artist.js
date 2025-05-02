export default {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('song_artist', [
            { song_id: 1, artist_id: 19 }, //ANDY
            { song_id: 2, artist_id: 33 }, //LOS DE RI0
            { song_id: 3, artist_id: 10 }, //EXTREMO
            { song_id: 4, artist_id: 6 },  //BAD BUNNY
            { song_id: 5, artist_id: 20 }, //JARABE
            { song_id: 6, artist_id: 21 }, //CHAYANNE
            { song_id: 7, artist_id: 18 }, //CANTO LOCO
            { song_id: 7, artist_id: 24 }, //DANI MARTIN
            { song_id: 8, artist_id: 18 }, //CANTO LOCO
            { song_id: 8, artist_id: 24 }, //DANI MARTIN
            { song_id: 9, artist_id: 18 }, //CANTO LOCO
            { song_id: 9, artist_id: 24 }, //DANI MARTIN
            { song_id: 10, artist_id: 22 }, //ESTOPA
            { song_id: 11, artist_id: 11 }, //FITO
            { song_id: 12, artist_id: 11 }, //FITO
            { song_id: 13, artist_id: 23 }, //MELENDI
            { song_id: 14, artist_id: 23 }, //MELENDI
            { song_id: 15, artist_id: 23 }, //MELENDI
            { song_id: 16, artist_id: 25 }, //NENA DACONTE
            { song_id: 17, artist_id: 24 }, //DANI MARTIN
            { song_id: 18, artist_id: 10 }, //EXTREMO
            { song_id: 19, artist_id: 11 }, //FITO
            { song_id: 20, artist_id: 26 }, //LA FUGA
            { song_id: 21, artist_id: 27 }, //LEIVA
            { song_id: 22, artist_id: 28 }, //QUEVEDO
            { song_id: 23, artist_id: 29 }, //FLOYMENOR
            { song_id: 24, artist_id: 30 }, //PONTE (EXOTICA)
            { song_id: 25, artist_id: 31 }, //JCREYES
            { song_id: 26, artist_id: 32 }, //MORAD
            { song_id: 27, artist_id: 28 }, //QUEVEDO
            { song_id: 28, artist_id: 34 }, //YAPI(DONDE TE ESCONDES)
            { song_id: 29, artist_id: 9 }, //BAD GYAL
            { song_id: 30, artist_id: 12 }, //ANUEL
            { song_id: 31, artist_id: 12 }, //ANUEL
            { song_id: 32, artist_id: 12 }, //ANUEL
            { song_id: 33, artist_id: 6 }, //BAD BUNNY
            { song_id: 34, artist_id: 13 }, //CTANGANA
            { song_id: 35, artist_id: 13 }, //CTANGANA
            { song_id: 36, artist_id: 14 }, //CAMARON
            { song_id: 37, artist_id: 15 }, //FCOSTA
            { song_id: 38, artist_id: 15 }, //FCOSTA
            { song_id: 39, artist_id: 15 }, //FCOSTA
            { song_id: 40, artist_id: 16 }, //KASEO
            { song_id: 41, artist_id: 16 }, //KASEO
            { song_id: 42, artist_id: 14 }, //CAMARON
            { song_id: 43, artist_id: 17 } //PLANB
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('song_artist', null, {});
    }
};
