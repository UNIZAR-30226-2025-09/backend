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
      {
        name: 'La vereda de la puerta de atras',
        duration: 243,
        lyrics: 'Si no fuera porque hice colocado\n' +
            'El camino de tu espera\n' +
            'Me habría desconectado\n' +
            'Condenado\n' +
            'A mirarte desde fuera\n' +
            'Y dejar que te tocara el Sol\n' +
            '\n' +
            'Y si fuera\n' +
            'Mi vida una escalera\n' +
            'Me la he pasado entera\n' +
            'Buscando el siguiente escalón\n' +
            'Convencido\n' +
            'Que estás en el tejado\n' +
            'Esperando a ver si llego yo\n' +
            '\n' +
            'Y dejar de lado la vereda de la puerta de atrás\n' +
            'Por donde te vi marchar\n' +
            'Como una regadera que la hierba hace que vuelva a brotar\n' +
            'Y ahora es todo campo ya\n' +
            '\n' +
            'Sus soldados\n' +
            'Son flores de madera\n' +
            'Y mi ejército no tiene\n' +
            'Bandera, es solo un corazón\n' +
            'Condenado\n' +
            'A vivir entre maleza\n' +
            'Sembrando flores de algodón\n' +
            '\n' +
            'Si me espera\n' +
            'La muerte traicionera\n' +
            'Y antes de repartirme\n' +
            'Del todo, me veo en un cajón\n' +
            'Que me entierren\n' +
            'Con la picha por fuera\n' +
            'Pa\' que se la coma un ratón\n' +
            '\n' +
            'Y muere a todas horas gente dentro de mi televisor\n' +
            'Quiero oír alguna canción\n' +
            'Que no hable de sandeces y que diga que no sobra el amor\n' +
            'Y que empiece en sí y no en do\n' +
            '\n' +
            'Y dejar de lado la vereda de la puerta de atrás\n' +
            'Por donde te vi marchar\n' +
            'Como una regadera que la hierba hace que vuelva a brotar\n' +
            'Y ahora es todo campo ya\n' +
            '\n' +
            'Dices que a veces no comprendes qué dice mi voz\n' +
            '¿Cómo quieres que esté dentro de tu ombligo?\n' +
            'Si entre los dedos se me escapa volando una flor\n' +
            'Y ella solita va marcando el camino\n' +
            '\n' +
            'Dices que a veces no comprendes qué dice mi voz\n' +
            '¿Cómo quieres que yo sepa lo que digo?\n' +
            'Si entre los dedos se me escapa volando una flor\n' +
            'Y yo la dejo que me marque el camino'
            ,
        photo_video: 'hotel.jpg',
        url_mp3: 'songs/La vereda de la puerta de atras extremoduro.mp3'
      },
      {
        name: 'BAILE INolVIDABLE',
        duration: 367,
        lyrics: 'Pensaba que contigo iba a envejecer\n' +
            'En otra vida, en otro mundo, podrá ser\n' +
            'En esta, solo queda irme un día\n' +
            'Y solamente verte en el atardecer\n' +
            '\n' +
            'Si me ven solo y triste, no me hablen\n' +
            'Si me ven solo y triste, soy culpable\n' +
            'La vida es una fiesta que un día termina\n' +
            'Y fuiste tú mi baile inolvidable\n' +
            '\n' +
            'Y fuiste tú mi baile inolvidable\n' +
            'Eh-eh, eh-eh\n' +
            'Eh-eh, eh-eh\n' +
            '\n' +
            '(Mientras uno está vivo)\n' +
            '(Uno debe amar lo más que pueda)\n' +
            '\n' +
            'Pensaba que contigo iba a envejecer\n' +
            'En otra vida, en otro mundo, podrá ser\n' +
            'En esta, solo queda irme un día\n' +
            'Y ver pa\'l cielo a ver si te veo caer\n' +
            '\n' +
            'Si me ven solo y triste, no me hablen\n' +
            'Si me ven solo y triste, soy culpable\n' +
            'La vida es una fiesta que un día termina\n' +
            'Y fuiste tú mi baile inolvidable\n' +
            '\n' +
            'No, no te puedo olvidar\n' +
            'No, no te puedo borrar\n' +
            'Tú me enseñaste a querer\n' +
            'Me enseñaste a bailar\n' +
            '\n' +
            'No, no te puedo olvidar\n' +
            'No, no te puedo borrar\n' +
            'Tú me enseñaste a querer\n' +
            'Me enseñaste a bailar\n' +
            '\n' +
            'Yeah-yeah-yeah-yeah, ey\n' +
            'Dime cómo le hago pa\' olvidarte\n' +
            'Hay un paso nuevo que quiero enseñarte\n' +
            'En las noche\', ya ni puedo dormir\n' +
            'Lo que hago es soñarte\n' +
            '\n' +
            'No, no te puedo olvidar\n' +
            'No, no te puedo borrar\n' +
            'Tú me enseñaste a querer\n' +
            'Me enseñaste a bailar\n' +
            '\n' +
            'Como tú me besabas\n' +
            'Como yo te lo hacía\n' +
            'Como tú me mirabas\n' +
            'Bellaquito, me ponía\n' +
            '\n' +
            'Se siente feo no tenerte cerquita\n' +
            'La nueva mama bien, pero no es tu boquita\n' +
            'Mi diabla, mi ángel, mi loquita\n' +
            'Mi diabla, mi ángel, mi loquita, ey\n' +
            '\n' +
            'Esto suena cabrón\n' +
            'Vamo\' a hacerlo otra ve\'\n' +
            'Como anoche, como anoche\n' +
            '\n' +
            'Tan-tan, ta-na-na, ta-na-na\n' +
            'Aprieta, chamaquito, aprieta\n' +
            '\n' +
            '(¡Ahí, ahí, ahí, vamo\' allá!)\n' +
            '\n' +
            'No, no te puedo olvidar\n' +
            'No, no te puedo borrar\n' +
            'Tú me enseñaste a querer\n' +
            'Me enseñaste a bailar\n' +
            '\n' +
            'Ay, yo con cualquiera me puedo acostar\n' +
            'Pero no con cualquiera quiero despertar\n' +
            'Solo con usted, con usted\n' +
            'Yo bailo con usted, na\' más con usted\n' +
            'Un beso donde estés, donde estés, bebé\n' +
            '\n' +
            'No, no te puedo olvidar\n' +
            'No, no te puedo borrar\n' +
            'Tú me enseñaste a querer\n' +
            'Me enseñaste a bailar\n' +
            '\n' +
            'Y yo tenía muchas novia\'\n' +
            'Pero como tú, ninguna\n' +
            'Ya no tengo mi Sol, me paso en la Luna\n' +
            'Si te pienso, me tiro de una\n' +
            '\n' +
            'Eh-eh, mi diabla, mi ángel, mi loquita\n' +
            'Mi diabla, mi ángel, mi loquita, eh-eh',
        photo_video: 'shape.jpg',
        url_mp3: 'BAILE INoLVIDABLE (Letra).mp3'
      },
      {
        name: 'Smells Like Teen Spirit',
        duration: 301,
        lyrics: 'Load up on guns, bring your friends...',
        photo_video: 'teen_spirit.jpg',
        url_mp3: 'https://example.com/teen_spirit.mp3'
      },
      {
        name: 'Imagine',
        duration: 187,
        lyrics: 'Imagine there’s no heaven, it’s easy if you try...',
        photo_video: 'imagine.jpg',
        url_mp3: 'https://example.com/imagine.mp3'
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('song', null, {});
  }
};