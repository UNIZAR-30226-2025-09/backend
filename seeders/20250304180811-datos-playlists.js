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
      name: "Album extremoduro",
      user_id: null,
      artist_id: 10,
      description: "",
      type: "public",
      typeP: "album",
      front_page: "playlist_images/PopConÑ.png"
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