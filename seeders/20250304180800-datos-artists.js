/**
 * Inserta registros de artistas en la base de datos.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('artist', [
    {
      name: "The Beatles",
      bio: "Banda de rock británica formada en Liverpool en 1960, considerada una de las más influyentes de la historia.",
      photo: "artists_images/beatles.png"
    },
    {
      name: "Queen",
      bio: "Banda de rock británica liderada por Freddie Mercury, famosa por canciones como 'Bohemian Rhapsody' y 'We Will Rock You'.",
      photo: "artists_images/queen.png"
    },
    {
      name: "Coldplay",
      bio: "Banda británica de rock alternativo con un sonido melódico y letras profundas, conocida por 'Yellow' y 'Fix You'.",
      photo: "artists_images/coldplay.png"
    },
    {
      name: "Eminem",
      bio: "Rapper y productor estadounidense, considerado uno de los mejores MCs de la historia del hip-hop.",
      photo: "artists_images/eminem.png"
    },
    {
      name: "Shakira",
      bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'.",
      photo: "artists_images/shakira.png"
    },
    {
      name: "Bad Bunny",
      bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'.",
      photo: "artists_images/badBunny.png"
    },
    {
      name: "Daddy Yankee",
      bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'.",
      photo: "artists_images/daddyYankee.png"
    },
    {
      name: "Aitana",
      bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'.",
      photo: "artists_images/aitana.png"
    },
    {
      name: "Bad Gyal",
      bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'.",
      photo: "artists_images/badGyal.png"
    },
    {
      name: "Extremoduro",
      bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'.",
      photo: "artists_images/extremoDuro.png"
    },
    {
      name: "Fito y Fitipaldis",
      bio: "Cantante colombiana de pop y música latina, famosa por su energía en el escenario y éxitos como 'Hips Don't Lie'.",
      photo: "artists_images/fitoFitipaldis.png"
    }
  ], {});
}

/**
 * Elimina los registros de artistas insertados en la migración `up`.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('artist', null, {});
}