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
      bio: "Artista puertorriqueño de trap y reguetón, conocido por su estilo innovador y éxitos como \"Tití Me Preguntó\".",
      photo: "artists_images/badBunny.png"
    },
    {
      name: "Daddy Yankee",
      bio: "Pionero del reguetón puertorriqueño, reconocido mundialmente por temas como \"Gasolina\" y su gran influencia en el género.",
      photo: "artists_images/daddyYankee.png"
    },
    {
      name: "Aitana",
      bio: "Cantante y compositora española de pop, surgida de Operación Triunfo, con baladas y ritmos modernos como \"Teléfono\".",
      photo: "artists_images/aitana.png"
    },
    {
      name: "Bad Gyal",
      bio: "Cantante catalana de dancehall, trap y reguetón, famosa por su estilo atrevido y éxitos como \"Fiebre\".",
      photo: "artists_images/badGyal.png"
    },
    {
      name: "Extremoduro",
      bio: "Mítica banda española de rock transgresivo, conocida por sus letras poéticas y actitud rebelde.",
      photo: "artists_images/extremoDuro.png"
    },
    {
      name: "Fito y Fitipaldis",
      bio: "Grupo español liderado por Fito Cabrales, con un estilo que fusiona rock, blues y pop en canciones emotivas.",
      photo: "artists_images/fitoFitipaldis.png"
    },
    {
      name: "Anuel AA",
      bio: "Rapero y cantante puertorriqueño, figura clave del trap latino con letras crudas y temas como \"Secreto\".",
      photo: "artists_images/anuelAA.png"
    },
    {
      name: "C. Tangana",
      bio: "Artista madrileño versátil, mezcla rap, flamenco y música urbana, destacado por su disco \"El Madrileño\".",
      photo: "artists_images/cTangana.png"
    },
    {
      name: "Camaron",
      bio: "Leyenda del flamenco español, revolucionó el género con su voz única y colaboraciones con guitarristas como Paco de Lucía.",
      photo: "artists_images/camaron.png"
    },
    {
      name: "FERNANDOCOSTA",
      bio: "Rapero español con un estilo callejero y directo, conocido por su energía y letras crudas.",
      photo: "artists_images/fernandoCosta.png"
    },
    {
      name: "KASE.O",
      bio: "Considerado uno de los mejores raperos en español, miembro de Violadores del Verso, con letras profundas y poéticas.",
      photo: "artists_images/kaseo.png"
    },
    {
      name: "Plan B",
      bio: "Dúo puertorriqueño de reguetón conocido por sus armonías vocales y temas como \"Es un secreto\".",
      photo: "artists_images/planB.png"
    },
    {
      name: "El Canto del Loco",
      bio: "Banda española de pop rock conocida por su energía juvenil y éxitos como 'Zapatillas' o 'La madre de José'.",
      photo: "artists_images/elCantoDelLoco.png"
    },
    {
      name: "Andy y Lucas",
      bio: "Dúo gaditano de pop flamenco que se hizo famoso por baladas emotivas como 'Son de amores'.",
      photo: "artists_images/andyYLucas.png"
    },
    {
      name: "Jarabe de Palo",
      bio: "Grupo español liderado por Pau Donés, conocido por su fusión de rock y ritmos latinos en temas como 'La Flaca'.",
      photo: "artists_images/jarabeDePalo.png"
    },
    {
      name: "Chayanne",
      bio: "Cantante puertorriqueño de pop latino y baladas, ídolo de varias generaciones con éxitos como 'Torero'.",
      photo: "artists_images/chayanne.png"
    },
    {
      name: "Estopa",
      bio: "Dúo español de hermanos con un estilo que mezcla rumba y rock, conocidos por 'La raja de tu falda'.",
      photo: "artists_images/estopa.png"
    },
    {
      name: "Melendi",
      bio: "Cantautor asturiano con evolución del pop rock al pop melódico, famoso por temas como 'Caminando por la vida'.",
      photo: "artists_images/melendi.png"
    },
    {
      name: "Dani Martín",
      bio: "Exvocalista de El Canto del Loco, solista de pop rock con letras íntimas y personales como 'Cero'.",
      photo: "artists_images/daniMartin.png"
    },
    {
      name: "Nena Daconte",
      bio: "Proyecto musical español de pop con letras melancólicas y melodías pegadizas como 'Tenía tanto que darte'.",
      photo: "artists_images/nenaDaconte.png"
    },
    {
      name: "La Fuga",
      bio: "Banda española de rock urbano con letras directas y potentes como 'Pa'quí pa'llá'.",
      photo: "artists_images/laFuga.png"
    },
    {
      name: "Leiva",
      bio: "Cantautor madrileño y exmiembro de Pereza, reconocido por su estilo rock-pop elegante y lírico.",
      photo: "artists_images/leiva.png"
    },
    {
      name: "Quevedo",
      bio: "Cantante y compositor canario que revolucionó la escena urbana con temas como 'Quédate' junto a Bizarrap.",
      photo: "artists_images/quevedo.png"
    },
    {
      name: "FloyyMenor",
      bio: "Joven promesa de la música urbana latina, conocido por su energía fresca y colaboraciones virales.",
      photo: "artists_images/floyyMenor.png"
    },
    {
      name: "Gabry Ponte",
      bio: "DJ y productor italiano de música electrónica, famoso por su trabajo con Eiffel 65 y temas como 'Dragostea Din Tei (Remix)'.",
      photo: "artists_images/gabryPonte.png"
    },
    {
      name: "JC Reyes",
      bio: "Cantante sevillano de trap y flamenco urbano, conocido por su estilo callejero y letras viscerales.",
      photo: "artists_images/jcReyes.png"
    },
    {
      name: "Morad",
      bio: "Rapero español de origen marroquí con letras realistas y ritmos pegadizos, popular por su autenticidad.",
      photo: "artists_images/morad.png"
    },
    {
      name: "Los del Rio",
      bio: "Dúo sevillano mundialmente famoso por su hit bailable 'Macarena', ícono de los 90.",
      photo: "artists_images/losDelRio.png"
    },
    {
      name: "Yapi",
      bio: "Artista emergente del género urbano español, destacando por su estilo desenfadado y sonidos actuales.",
      photo: "artists_images/yapi.png"
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