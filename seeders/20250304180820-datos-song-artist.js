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
            { song_id: 87, artist_id: 18 }, //CANTO LOCO
            { song_id: 87, artist_id: 24 }, //DANI MARTIN
            { song_id: 88, artist_id: 18 }, //CANTO LOCO
            { song_id: 88, artist_id: 24 }, //DANI MARTIN
            { song_id: 89, artist_id: 18 }, //CANTO LOCO
            { song_id: 89, artist_id: 24 }, //DANI MARTIN
            { song_id: 9, artist_id: 24 }, //DANI MARTIN
            { song_id: 10, artist_id: 22 }, //ESTOPA
            { song_id: 11, artist_id: 11 }, //FITO
            { song_id: 12, artist_id: 11 }, //FITO
            { song_id: 13, artist_id: 23 }, //MELENDI
            { song_id: 14, artist_id: 23 }, //MELENDI
            { song_id: 15, artist_id: 23 }, //MELENDI
            { song_id: 90, artist_id: 23 }, //MELENDI
            { song_id: 91, artist_id: 23 }, //MELENDI
            { song_id: 92, artist_id: 23 }, //MELENDI
            { song_id: 16, artist_id: 25 }, //NENA DACONTE
            { song_id: 17, artist_id: 24 }, //DANI MARTIN
            { song_id: 18, artist_id: 10 }, //EXTREMO
            { song_id: 19, artist_id: 11 }, //FITO
            { song_id: 93, artist_id: 11 }, //FITO
            { song_id: 94, artist_id: 11 }, //FITO
            { song_id: 20, artist_id: 26 }, //LA FUGA
            { song_id: 21, artist_id: 27 }, //LEIVA
            { song_id: 22, artist_id: 28 }, //QUEVEDO
            { song_id: 23, artist_id: 29 }, //FLOYMENOR
            { song_id: 24, artist_id: 30 }, //PONTE (EXOTICA)
            { song_id: 25, artist_id: 31 }, //JCREYES
            { song_id: 26, artist_id: 32 }, //MORAD
            { song_id: 27, artist_id: 28 }, //QUEVEDO
            { song_id: 108, artist_id: 28 }, //AITANA
            { song_id: 28, artist_id: 34 }, //YAPI(DONDE TE ESCONDES)
            { song_id: 29, artist_id: 9 }, //BAD GYAL
            { song_id: 30, artist_id: 12 }, //ANUEL
            { song_id: 31, artist_id: 12 }, //ANUEL
            { song_id: 32, artist_id: 12 }, //ANUEL
            { song_id: 95, artist_id: 12 }, //ANUEL
            { song_id: 96, artist_id: 12 }, //ANUEL
            { song_id: 97, artist_id: 12 }, //ANUEL
            { song_id: 98, artist_id: 12 }, //ANUEL
            { song_id: 33, artist_id: 6 }, //BAD BUNNY
            { song_id: 34, artist_id: 13 }, //CTANGANA
            { song_id: 35, artist_id: 13 }, //CTANGANA
            { song_id: 99, artist_id: 13 }, //CTANGANA
            { song_id: 100, artist_id: 13 }, //CTANGANA
            { song_id: 101, artist_id: 13 }, //CTANGANA
            { song_id: 102, artist_id: 13 }, //CTANGANA
            { song_id: 36, artist_id: 14 }, //CAMARON
            { song_id: 37, artist_id: 15 }, //FCOSTA
            { song_id: 38, artist_id: 15 }, //FCOSTA
            { song_id: 39, artist_id: 15 }, //FCOSTA
            { song_id: 40, artist_id: 16 }, //KASEO
            { song_id: 41, artist_id: 16 }, //KASEO
            { song_id: 103, artist_id: 16 }, //KASEO
            { song_id: 104, artist_id: 16 }, //KASEO
            { song_id: 105, artist_id: 16 }, //KASEO
            { song_id: 103, artist_id: 38 }, //KASEO
            { song_id: 104, artist_id: 38 }, //KASEO
            { song_id: 105, artist_id: 38 }, //KASEO
            { song_id: 106, artist_id: 16 }, //KASEO
            { song_id: 107, artist_id: 16 }, //KASEO
            { song_id: 42, artist_id: 14 }, //CAMARON
            { song_id: 43, artist_id: 17 }, //PLANB
            { song_id: 45, artist_id: 35 }, //CMARI - INTRO
            { song_id: 46, artist_id: 35 }, //CMARI - 2AM
            { song_id: 47, artist_id: 35 }, //CMARI - IBAN
            { song_id: 48, artist_id: 35 }, //CMARI - BYR
            { song_id: 49, artist_id: 35 }, //CMARI - RICHTER
            { song_id: 50, artist_id: 35 }, //CMARI - SEMPAPA
            { song_id: 51, artist_id: 35 }, //CMARI - TAN LINES
            { song_id: 52, artist_id: 35 }, //CMARI - LA ROPA
            { song_id: 53, artist_id: 35 }, //CMARI - QTALHOY
            { song_id: 54, artist_id: 35 }, //CMARI - CONTACTO
            { song_id: 55, artist_id: 35 }, //CMARI - MIL VECES
            { song_id: 56, artist_id: 35 }, //CMARI - MRF
            { song_id: 57, artist_id: 35 }, //CMARI - DSPB
            { song_id: 58, artist_id: 35 }, //CMARI - MPC
            { song_id: 59, artist_id: 35 }, //CMARI - JUGADOR
            { song_id: 60, artist_id: 35 }, //CMARI - NDF
            { song_id: 61, artist_id: 35 }, //CMARI - BABALA
            { song_id: 62, artist_id: 35 }, //CMARI - 90%
            { song_id: 63, artist_id: 35 }, //CMARI - DIME QUE NO
            { song_id: 64, artist_id: 35 }, //CMARI - +- DURO
            { song_id: 65, artist_id: 35 }, //CMARI & RAUL CLYDE - SOBRENATURAL
            { song_id: 65, artist_id: 36 }, //CMARI & RAUL CLYDE - SOBRENATURAL
            { song_id: 66, artist_id: 36 }, //RAUL CLYDE - DIESEL
            { song_id: 67, artist_id: 36 }, //RAUL CLYDE - TUENTI REMIX
            { song_id: 68, artist_id: 36 }, //RAUL CLYDE - AMOR DE POBREE
            { song_id: 69, artist_id: 36 }, //RAUL CLYDE - COSTABLANCA
            { song_id: 70, artist_id: 37 }, //FEID - FERXXO 30
            { song_id: 71, artist_id: 37 }, //FEID - VOL2
            { song_id: 72, artist_id: 37 }, //FEID - VENTE CONMIGO
            { song_id: 73, artist_id: 37 }, //FEID - NIÑA BONITA
            { song_id: 74, artist_id: 37 }, //FEID - GYP
            { song_id: 75, artist_id: 37 }, //FEID - FERXXO 151
            { song_id: 76, artist_id: 37 }, //FEID - BUBALU
            { song_id: 77, artist_id: 37 }, //FEID - RITMO DE MEDALLO
            { song_id: 78, artist_id: 37 }, //FEID - FERXXO EDITION
            { song_id: 79, artist_id: 37 }, //FEID - NX TX SIENTAS SOLX
            { song_id: 80, artist_id: 37 }, //FEID - LUCES DE TECNO
            { song_id: 81, artist_id: 37 }, //FEID - EY CHORY
            { song_id: 82, artist_id: 37 }, //FEID - VELOCIDAD CRUCERO
            { song_id: 83, artist_id: 37 }, //FEID - ROMANTICO DE LUNES
            { song_id: 84, artist_id: 37 }, //FEID - el unico tema del ferxxo
            { song_id: 85, artist_id: 37 }, //FEID - PRIVILEGIOS
            { song_id: 86, artist_id: 37 }, //FEID - EN LA DE ELLA
            { song_id: 108, artist_id: 8 }, //AITANA
            { song_id: 109, artist_id: 1 }, //BEATLES
            { song_id: 110, artist_id: 3 }, //COLDPLAY
            { song_id: 111, artist_id: 7 }, //DADDY YANKEE
            { song_id: 112, artist_id: 4 }, //EMINEM
            { song_id: 113, artist_id: 2 }, //QUEEN
            { song_id: 114, artist_id: 5 } //SHAKIRA

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('song_artist', null, {});
    }
};
