'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('song', [
      {
        name: 'Sensualidad',
        duration: 319,
        lyrics: 'Trap Kincz, bebé\n' +
            'Yeah, ya, ya, ya, ya\n' +
            '(Ooh, oh-oh)\n' +
            '\n' +
            '[Prince Royce]\n' +
            'Ay, baby, tu sensualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Me tiene al borde de la locura\n' +
            'Y esto no es casualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Te beso y sube la temperatura\n' +
            '\n' +
            'Ay, baby, tu sensualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Me tiene al borde de la locura\n' +
            'Y esto no es casualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Te beso y sube la temperatura\n' +
            '\n' +
            '[Bad Bunny]\n' +
            'Baby, donde tú quieras yo paso a buscarte\n' +
            'Tú espérame afuera, pa\' así no llamarte\n' +
            'No traigas paraguas, como quiera va\' mojarte\n' +
            'La temperatura está pa\' calentarte\n' +
            '\n' +
            '[J Balvin]\n' +
            'Baby, donde tú quieras yo paso a buscarte\n' +
            'Tú espérame afuera, pa\' así no llamarte\n' +
            'No traigas paraguas, como quiera va\' mojarte\n' +
            'La temperatura está pa\' calentarte\n' +
            '\n' +
            '[Bad Bunny]\n' +
            'Hay muchos tras de ti, pero yo siempre gano\n' +
            'La baby está dura y sin el cirujano\n' +
            'Vístete que hoy te voy a buscar temprano\n' +
            'Quiero que to\' nos vean agarrados de mano\n' +
            '\n' +
            'El traje que te compré\n' +
            'Dale póntelo, llegamos después de las tres\n' +
            'Yo no sé si tú mañana me vas a querer\n' +
            'O si después de hoy te vas a perder\n' +
            '\n' +
            'Si no tú me escribes, yo te busco en el Lamborghi\'\n' +
            'Un diablo, un beso de emoji\n' +
            'Yo no sé si tú mañana me vas a querer\n' +
            'O si después de hoy te vas a perder\n' +
            '\n' +
            '[Prince Royce]\n' +
            'Cuando estás en mi habitación, tú sientes conmigo\n' +
            'Como si se paralizara el tiempo\n' +
            'Ya es que mi intención es estar contigo\n' +
            'Y hacerlo hasta dejarte sin aliento\n' +
            '\n' +
            'Cuando estás en mi habitación, tú sientes conmigo\n' +
            'Como si se paralizara el tiempo\n' +
            'Ya es que mi intención es estar contigo\n' +
            'Y hacerlo hasta dejarte sin aliento\n' +
            '\n' +
            '[J Balvin]\n' +
            'Baby, donde tú quieras yo paso a buscarte\n' +
            'Tú espérame afuera, pa\' así no llamarte\n' +
            'No traigas paraguas, como quiera va\' mojarte\n' +
            'La temperatura está pa\' calentarte\n' +
            '\n' +
            '[Bad Bunny]\n' +
            'Baby, donde tú quieras yo paso a buscarte\n' +
            'Tú espérame afuera, pa\' así no llamarte\n' +
            'No traigas paraguas, como quiera va\' mojarte\n' +
            'La temperatura está pa\' calentarte\n' +
            '\n' +
            '[J Balvin]\n' +
            'Yeah\n' +
            'La noche llama, ya me activé\n' +
            'Te sirvo un trago, Buchanan\'s, yeh\n' +
            'Me siento en Victoria, porque ella es un ángel\n' +
            'Como Selena y The Weeknd, como Shakira y Piqué\n' +
            '\n' +
            'Con su hoodie de BAPE, siempre ando en backstage\n' +
            'En Francia ya la conocen, compremos todo Chanel\n' +
            'Ea, porque ella es mi jeva\n' +
            'No me la toquen, porque ella es una fiera\n' +
            '\n' +
            'Ia-ie (ia-ie), ia-ie (ia-ie)\n' +
            'Ella es tan bella, tal como la imaginé\n' +
            'Ia-ie (ia-ie), ia-ie (ia-ie)\n' +
            'Es mi baby, solo yo la puedo tener\n' +
            '\n' +
            '[Prince Royce]\n' +
            'Ay, baby, tu sensualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Me tiene al borde de la locura\n' +
            'Y esto no es casualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Te beso y sube la temperatura\n' +
            '\n' +
            '[J Balvin]\n' +
            'Ay, baby, tu sensualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Me tiene al borde de la locura\n' +
            'Y esto no es casualidad (woa-oh-oh-oh-oh-oh)\n' +
            'Te beso y sube la temperatura\n' +
            '\n' +
            '[Bad Bunny]\n' +
            'Baby, donde tú quieras yo paso a buscarte\n' +
            'Tú espérame afuera, pa\' así no llamarte\n' +
            'No traigas paraguas, como quiera va\' mojarte\n' +
            'La temperatura está pa\' calentarte\n' +
            '\n' +
            'Bad Bunny, baby\n' +
            'Hear this music (leggo\', leggo\')\n' +
            'Prince Royce\n' +
            'J Balvin\n' +
            'Infinity Music\n' +
            '\n' +
            'DJ Luian (¡díselo, Luian!)\n' +
            'Mambo Kingz\n' +
            'Trap Kingz, bebé\n' +
            'Hear this music\n' +
            'Tiempo de Balvin (leggo\', leggo\')\n' +
            '¡Dímelo, Braza!',
        photo_video: 'bohemian.jpg',
        url_mp3: '/songs/Sensualidad - Bad Bunny X Prince Royce X J Balvin X Dj Luian X Mambo Kingz.mp3'
      },
      {
        name: 'Macarena',
        duration: 222,
        lyrics: 'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Macarena tiene un novio que se llama\n' +
            'Que se llama de apellido Vitorino\n' +
            'Que en la jura de bandera del muchacho\n' +
            'Se la dio con dos amigos (¡ay!)\n' +
            '\n' +
            'Macarena tiene un novio que se llama\n' +
            'Que se llama de apellido Vitorino\n' +
            'Y en la jura de bandera del muchacho\n' +
            'Se la dio con dos amigos (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Macarena, Macarena, Macarena\n' +
            'Que te gustan los veranos de Marbella\n' +
            'Macarena, Macarena, Macarena\n' +
            'Que te gusta la movida guerrillera (¡ay!)\n' +
            '\n' +
            '(¡Ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Macarena sueña con el corte inglés\n' +
            'Y se compra los modelos más modernos\n' +
            'Le gustaría vivir en Nueva York\n' +
            'Y ligar un novio nuevo (¡ay!)\n' +
            '\n' +
            'Macarena sueña con el corte inglés\n' +
            'Y se compra los modelos más modernos\n' +
            'Le gustaría vivir en Nueva York\n' +
            'Y ligar un novio nuevo (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Macarena tiene un novio que se llama\n' +
            'Que se llama de apellido Vitorino\n' +
            'Y en la jura de bandera del muchacho\n' +
            'Se la dio con dos amigos (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            '(¡Ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)\n' +
            '\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Que tu cuerpo es pa\' darle alegría y cosa buena\n' +
            'Dale a tu cuerpo alegría, Macarena\n' +
            'Eh, Macarena (¡ay!)',
        photo_video: 'hotel.jpg',
        url_mp3: 'songs/Los Del Rio - Macarena (Bayside Boys Remix).mp3'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('song', null, {});
  }
};