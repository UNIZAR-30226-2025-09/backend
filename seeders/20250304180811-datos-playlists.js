/**
 * Inserta registros de playlists en la base de datos.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('playlist', [
    //playlists oficiales Vibra
    {
      name: "Rock Español",
      user_id: null,
      artist_id: null,
      description: "Lo mejor del rock de aquí, como Robe con Leiva.",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/rockEspanol.png"
    },
    {
      name: "Los 2000 España",
      user_id: null,
      artist_id: null,
      description: "Lo mejor de la primera década del milenio.",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/Los2000Espana.png"

    },
    {
      name: "Éxitos España",
      user_id: null,
      artist_id: null,
      description: "Los hits de ahora en la playlist más grande de España.",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/exitosEspana.png"
    },
    {
      name: "temardos",
      user_id: null,
      artist_id: null,
      description: "Los temas que mas pegan en las fiestas",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/temardos.png"
    },
    {
      name: "FINO",
      user_id: null,
      artist_id: null,
      description: "Fino y elegante, como Feid.",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/FINO.png"
    },
    {
      name: "Que te den",
      user_id: null,
      artist_id: null,
      description: "Despechás y despechaos: esta es vuestra lista. ¡Gritadlo!",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/queteden.png"
    },
    {
      name: "BARRAS",
      user_id: null,
      artist_id: null,
      description: "La calle suena así.",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/BARRAS.png"
    },
    {
      name: "Pop con Ñ",
      user_id: null,
      artist_id: null,
      description: "Lo mejor del pop en español.",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/PopConÑ.png"
    },
    {
      name: "Bachata y Flamenco",
      user_id: null,
      artist_id: null,
      description: "La fusión perfecta. Disfruta de canciones de ambos estilos para que el arte recorra tu cuerpo",
      type: "public",
      typeP: "Vibra",
      front_page: "playlist_images/bachataFlamenco.png"
    },
    {
      name: "Sempre Cor Deluxe",
      user_id: null,
      artist_id: 35,
      description: "Sempre Cor Deluxe",
      type: "public",
      typeP: "album",
      front_page: "playlist_images/sempreCorDeluxe.jpeg"
    },
    {
      name: "Sempre Cor",
      user_id: null,
      artist_id: 35,
      description: "Sempre Cor",
      type: "public",
      typeP: "album",
      front_page: "playlist_images/sempreCor.jpeg"
    },
    {
      name: "MOR, No Le Temas a La Oscuridad",
      user_id: null,
      artist_id: 37,
      description: "",
      type: "public",
      typeP: "album",
      front_page: "playlist_images/mornoletemas.jpeg"
    },
     {
       name: "Radio la Colifata Presenta",
       user_id: null,
       artist_id: 18,
       description: "Simplemente el Canto del Loco",
       type: "public",
       typeP: "album",
       front_page: "playlist_images/radioLoco.jpeg"
     },
     {
       name: "Un alumno más",
       user_id: null,
       artist_id: 23,
       description: "",
       type: "public",
       typeP: "album",
       front_page: "playlist_images/unalumnoMas.jpeg"
     },{
       name: "Lo mas lejos a tu lado",
       user_id: null,
       artist_id: 11,
       description: "",
       type: "public",
       typeP: "album",
       front_page: "playlist_images/laCasaPorElTejado.png"
     },{
       name: "Real Hasta La Muerte",
       user_id: null,
       artist_id: 12,
       description: "",
       type: "public",
       typeP: "album",
       front_page: "playlist_images/rhlm.jpeg"
     },{
       name: "El Madrileño",
       user_id: null,
       artist_id: 13,
       description: "",
       type: "public",
       typeP: "album",
       front_page: "playlist_images/elMadrileno.jpeg"
     },{
        name: "Por la boca vive el pez",
        user_id: null,
        artist_id: 11,
        description: "",
        type: "public",
        typeP: "album",
        front_page: "playlist_images/meEquivocariaOtraVez.png"
     },{
        name: "Vivir para contarlo",
        user_id: null,
        artist_id: 38,
        description: "",
        type: "public",
        typeP: "album",
        front_page: "playlist_images/vivirPC.jpeg"
     },{
        name: "El Círculo",
        user_id: null,
        artist_id: 16,
        description: "",
        type: "public",
        typeP: "album",
        front_page: "playlist_images/elCirculo.jpeg"
     }
  ], {});
}

/**
 * Elimina los registros de playlists insertados en la migración `up`.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('playlist', null, {});
}