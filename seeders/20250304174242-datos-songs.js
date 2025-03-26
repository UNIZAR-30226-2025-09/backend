'use strict';

import fs from "fs";
import path from "path";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('song', [
      {
        name: 'Tanto La Queria',
        duration: 218,
        lyrics: '¿Por qué eres tan hermosa y a la vez tan difícil?\n' +
            '¿Por qué la vida pasa y pasa y te quiero a mi vera?\n' +
            'Si me trataste como a un juguete sucio y abandonado\n' +
            'Si no comprendes que el amar es algo más que besarnos\n' +
            '\n' +
            'Envidio a todo aquel que el amor ha encontrado\n' +
            'Que lo mío no es ir de flor en flor, que de eso ya me he cansado\n' +
            'Solo quería adornar las noches con tu cara morena\n' +
            'Y decirte que hay corazones que no huyen de la tormenta\n' +
            '\n' +
            'A veces la miro y lloro y lloro\n' +
            'Pensando que pudo y no fue al final\n' +
            'Ver a las nubes, tapar las estrellas\n' +
            'Estrellas que solo te quieren mirar\n' +
            '\n' +
            'Porque eres la cuna que mece sin nada\n' +
            'Porque eres la lluvia que no hace mojar\n' +
            'Sin ti yo veía tardes de historias\n' +
            'Historias que nunca quise ver acabar\n' +
            '\n' +
            'Tanto la quería, tanto que yo\n' +
            'Por ella moría, eso bien lo sabe Dios\n' +
            'Ella es la reina de mi inspiración\n' +
            'Por la que yo sufro, la musa de mi amor\n' +
            '\n' +
            'Busco en el recuerdo y no encuentro mi pasado\n' +
            'Las campanas y más campanas que mi alma ha escuchado\n' +
            'Tú sabes bien que a la última frontera te hubiera llevado\n' +
            'Que los senderos de la vida hay que cogerlos con dos manos\n' +
            '\n' +
            'A veces la miro y lloro y lloro\n' +
            'Pensando que pudo y no fue al final\n' +
            'Ver a las nubes, tapar las estrellas\n' +
            'Estrellas que solo te quieren mirar\n' +
            '\n' +
            'Porque eres la cuna que mece sin nada\n' +
            'Porque eres la lluvia que no hace mojar\n' +
            'Sin ti yo veía tardes de historias\n' +
            'Historias que nunca quise ver acabar\n' +
            '\n' +
            'Tanto la quería, tanto que yo\n' +
            'Por ella moría, eso bien lo sabe Dios\n' +
            'Ella es la reina de mi inspiración\n' +
            'Por la que yo sufro, la musa de mi amor\n' +
            '\n' +
            'Tanto la quería, tanto que yo\n' +
            'Por ella moría, eso bien lo sabe Dios\n' +
            'Ella es la reina de mi inspiración\n' +
            'Por la que yo sufro, la musa de mi amor\n' +
            '\n' +
            'Tanto la quería, tanto, tanto la quería\n' +
            'Que por ella moría, ay por ella yo moría\n' +
            'Ella es la reina, reina de mi reina\n' +
            'Por la que yo sufro',
        photo_video: "songs_images/tantoLaQueria.png",
        url_mp3: 'songs/Andy & Lucas - Tanto La Queria (Videoclip) [b81kOviE7EI].mp3',
          type: "sencillo",
          genre: 'Flamenco'

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
        photo_video: "songs_images/macarena.png",
        url_mp3: 'songs/Los Del Rio - Macarena (Bayside Boys Remix).mp3',
          type: "sencillo",
          genre: 'Pop'
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
          photo_video: "songs_images/laVereda.png",
        url_mp3: 'songs/La vereda de la puerta de atras extremoduro.mp3',
          type: "album",
          genre: 'Rock'
      },
      {
        name: 'BAILE INoLVIDABLE',
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
          photo_video: "songs_images/baileInolvidable.png",
        url_mp3: 'songs/Bad Bunny - BAILE INoLVIDABLE (Letra).mp3',
          type: "album",
          genre: 'Reggaeton'
      },
      {
        name: 'La Flaca',
        duration: 269,
        lyrics: 'En la vida, conocí\n' +
            'Mujer igual a la flaca\n' +
            'Coral negro de la Habana\n' +
            'Tremendísima mulata\n' +
            'Cien libras de piel y hueso\n' +
            'Cuarenta kilos de salsa\n' +
            'Y, en la cara, dos soles\n' +
            'Que, sin palabras, hablan\n' +
            'Que, sin palabras, hablan\n' +
            '\n' +
            'La flaca duerme de día\n' +
            'Dice que así el hambre engaña\n' +
            'Y cuando cae la noche\n' +
            'Baja a bailar a la tasca\n' +
            'Y bailar y bailar\n' +
            'Y tomar y tomar\n' +
            'Una cerveza tras otra\n' +
            'Pero ella nunca engorda\n' +
            'Pero ella nunca engorda\n' +
            '\n' +
            'Por un beso de la flaca, daría lo que fuera\n' +
            'Por un beso de ella, aunque solo uno fuera\n' +
            'Por un beso de la flaca, daría lo que fuera\n' +
            'Por un beso de ella, aunque solo uno fuera\n' +
            '\n' +
            'Aunque solo uno fuera\n' +
            '\n' +
            'Mojé mis sábanas blancas\n' +
            'Como dice la canción\n' +
            'Recordando las caricias\n' +
            'Que me brindó el primer día\n' +
            'Y enloquezco de ganas\n' +
            'De dormir a su ladito\n' +
            'Porque, Dios, que esta flaca\n' +
            'A mí me tiene loquito, oh\n' +
            'A mí me tiene loquito\n' +
            '\n' +
            'Por un beso de la flaca, yo daría lo que fuera\n' +
            'Por un beso de ella, aunque solo uno fuera\n' +
            'Por un beso de la flaca, yo daría lo que fuera\n' +
            'Por un beso de ella, aunque solo uno fuera\n' +
            '\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            '\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            '\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            '\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            '\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera\n' +
            'Aunque solo uno fuera',
        photo_video: "songs_images/laFlaca.png",
        url_mp3: 'songs/Jarabe De Palo - La Flaca (Videoclip Oficial).mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'Torero',
        duration: 220,
        lyrics: 'De lunes a domingo, voy desesperado\n' +
            'El corazón prendido allí en el calendario\n' +
            'Buscándote y buscando como un mercenario\n' +
            'Tú dime donde estás que yo no te he encontrado\n' +
            '\n' +
            'Las manecillas giran, yo voy al contrario\n' +
            'Bebiéndome la vida a sorbos y a tragos\n' +
            'Me diste así de frente, qué tremendo impacto\n' +
            'Para unirme a tu mirada, dime\n' +
            '\n' +
            'Si hay que ser torero, poner el alma en el ruedo\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (¡olé!)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'Si hay que ser torero, poner el alma en el ruedo\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (¡olé!)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'Y te cuentan que ya me vieron solitario en un callejón\n' +
            'Que ya no duermo y desvarío, que el humor ya me cambió\n' +
            'Y tú, ¿por dónde estás?, que mi presión ya no me va\n' +
            'Te buscaré, vuelve conmigo, y que tú no sabes\n' +
            '\n' +
            'Que yo te necesito como el perro al amo\n' +
            'Que si tú no respondes, aquí todo es caos\n' +
            'Me diste así de frente, qué tremendo impacto\n' +
            'Para unirme a tu mirada, dime\n' +
            '\n' +
            'Si hay que ser torero, poner el alma en el ruedo\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (¡olé!)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'Si hay que ser torero, poner el alma en el ruedo\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (¡olé!)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'En noviembre hasta enero, sí que te necesito\n' +
            'Ay, de junio a febrero, quiero que estés conmigo\n' +
            'Y, en marzo, el amor, en diciembre, tú y yo\n' +
            'No importa, mi amada\n' +
            '\n' +
            'Si hay, si hay que ser torero, poner el alma en el ruedo\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (¡olé!)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'Si hay que ser torero (torero), poner el alma en el ruedo (torero)\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (torero)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'Si hay que ser torero, poner el alma en el ruedo\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (¡olé!)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'Si hay que ser torero, poner el alma en el ruedo\n' +
            'No importa lo que se venga pa\' que sepas que te quiero\n' +
            'Como un buen torero (¡olé!)\n' +
            'Me juego la vida por ti\n' +
            '\n' +
            'Si hay que ser torero',
        photo_video: "songs_images/torero.png",
        url_mp3: 'songs/Chayanne - Torero (Vídeo Oficial) [GuZzuQvv7uc].mp3',
          type: "sencillo",
          genre: 'Pop'
      },
      {
        name: 'Besos',
        duration: 147,
        lyrics: 'Hey, entiende, por qué\n' +
            'Has salido a la calle tú tan fresco\n' +
            'Y dime por qué\n' +
            'Te has tirado tres horas en el espejo\n' +
            'Pa ponerte guapo pa ligar\n' +
            'Para ir a la calle y no piensas\n' +
            'Que eso ya da igual\n' +
            'Que ya no vas a impresionar\n' +
            'Que lo bueno y lo que importa está en los besos\n' +
            '\n' +
            'Y eso es lo que quiero, besos\n' +
            'Que todas las mañanas me despierten de esos\n' +
            'Que sea por la tarde y siga habiendo besos\n' +
            'Y luego por la noche hoy me den más besos pa cenar\n' +
            '\n' +
            'Y dime por qué\n' +
            'Tú hoy te echas mil cremas por el cuerpo\n' +
            'Si no se te ven\n' +
            'Y se te han olvidado los sentimientos\n' +
            'Tienes que empezar por resolver\n' +
            'Lo que tienes dentro\n' +
            'Y no piensas casi en los demás\n' +
            'Qué más dará si mal o bien\n' +
            'Mucho metrosexual y faltan besos\n' +
            '\n' +
            'Y eso es lo que quiero, besos\n' +
            'Que todas las mañanas me despierten de esos\n' +
            'Que sea por la tarde y siga habiendo besos\n' +
            'Y luego por la noche hoy me den más besos pa cenar\n' +
            '\n' +
            'Y eso es lo que quiero, besos\n' +
            'Que todas las mañanas me despierten de esos\n' +
            'Que sea por la tarde y siga habiendo besos\n' +
            'Y luego por la noche hoy me den más besos pa cenar\n' +
            '\n' +
            'Y párate a ver\n' +
            'Que los que ya te quieren no miran eso\n' +
            'Sólo quieren ver ese guiño de ojos\n' +
            'Sin complejos',
        photo_video: "songs_images/besos.png",
        url_mp3: 'songs/El Canto del Loco - Besos [mzSI1oUXYxs].mp3',
          type: "sencillo",
          genre: 'Pop'
      },
      {
        name: 'Peter Pan',
        duration: 286,
        lyrics: 'Un día llega a mí la calma\n' +
            'Mi Peter Pan hoy amenaza\n' +
            'Aquí hay poco que hacer\n' +
            '\n' +
            'Me siento como en otra plaza\n' +
            'En la de estar solito en casa\n' +
            'Será culpa de tu piel\n' +
            '\n' +
            'Será que me habré hecho mayor\n' +
            'Que algo nuevo ha tocado este botón\n' +
            'Para que Peter se largue\n' +
            '\n' +
            'Y tal vez viva ahora mejor\n' +
            'Más agusto y más tranquilo en mi interior\n' +
            'Que campanilla te cuide y te guarde\n' +
            '\n' +
            'A veces gritas desde el cielo\n' +
            'Queriendo destrozar mi calma\n' +
            'Vas persiguiendo como un trueno\n' +
            'Para darme ese relámpago azul\n' +
            '\n' +
            'Ahora me gritas desde el cielo\n' +
            'Pero te encuentras con mi alma\n' +
            'Conmigo ya no intentes nada\n' +
            'Parece que el amor me calma, me calma\n' +
            '\n' +
            'Si te llevas mi niñez\n' +
            'Llevate la parte que me sobre a mí\n' +
            'Si te marchas viviré con la paz que necesito y tanto ansié\n' +
            '\n' +
            'Pasó un buen día junto a mí\n' +
            'Parecía que quería quedarse aquí\n' +
            'No había manera de echarle\n' +
            '\n' +
            'Si Peter no se quiere ir\n' +
            'La soledad después querrá vivir en mí\n' +
            'La vida tiene sus fases, sus fases\n' +
            '\n' +
            'A veces gritas desde el cielo\n' +
            'Queriendo destrozar mi calma\n' +
            'Vas persiguiendo como un trueno\n' +
            'Para darme ese relámpago azul\n' +
            '\n' +
            'Ahora me gritas desde el cielo\n' +
            'Pero te encuentras con mi alma\n' +
            'Conmigo ya no intentes nada\n' +
            'Parece que el amor me calma\n' +
            '\n' +
            'Y a veces gritas desde el cielo\n' +
            'Queriendo destrozar mi calma\n' +
            'Vas persiguiendo como un trueno\n' +
            'Para darme ese relámpago azul\n' +
            '\n' +
            'Ahora me gritas desde el cielo\n' +
            'Pero te encuentras con mi alma\n' +
            'Conmigo ya no intentes nada\n' +
            'Parece que el amor me calma, me calma\n' +
            '\n' +
            'Cuando te marches creceré\n' +
            'Recorriendo tantas partes que olvidé\n' +
            'Llegó mi tiempo, ya lo ves\n' +
            'Tengo paz y es el momento de crecer\n' +
            'Si te marchas viviré\n' +
            'Con la paz que necesito y tanto ansié\n' +
            '\n' +
            'Espero que no vuelva más\n' +
            'Que se quede tranquilito como está\n' +
            'Que él ya tuvo bastante\n' +
            'Fue un tiempo para no olvidar\n' +
            'La zona mala quiere ahora descansar\n' +
            'Que campanilla te cuide, y te guarde',
        photo_video: "songs_images/peterPan.png",
        url_mp3: 'songs/El Canto del Loco - Peter Pan [rCxLx_3T5GE].mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'Zapatillas',
        duration: 171,
        lyrics: 'Estoy cansado de salir de noche y ver siempre la misma gente\n' +
            'Estoy flipando de que la gente se invente, cuente y luego reinvente\n' +
            'Apoltronado en el sofá de mi casa, vente se está caliente\n' +
            'Amaestrados vamos al mismo sitio todos aunque luego ni entres\n' +
            'Alucinando de que me miren de arriba a bajo como un delincuente\n' +
            'Intoxicado de que me pongan esa puta música indiferente\n' +
            '\n' +
            'Quiero entrar en tu garito con zapatillas\n' +
            'Que no me miren mal al pasar\n' +
            'Estoy cansado de siempre lo mismo\n' +
            'La misma historia, y quiero cambiar\n' +
            'Me da pena tanta tontería\n' +
            'Quiero un poquito de normalidad\n' +
            'Pero a ver, mírame, y dime tronco, no veo ni un sitio y no puedo aparcar\n' +
            '\n' +
            'Estoy muy harto de que me digan: \'Si no estás en lista no puedes pasar\n' +
            'Sólo entran cuatro, tenemos zona supermegaguay y nunca la verás\'\n' +
            'Abarrotado, hay aforo limitado y ahora toca esperar\n' +
            'Y, y, nos han multado y tu coche se lo ha llevado la grúa municipal\n' +
            '\n' +
            'Quiero entrar en tu garito con zapatillas\n' +
            'Que no me miren mal al pasar\n' +
            'Estoy cansado de siempre lo mismo\n' +
            'La misma historia, y quiero cambiar\n' +
            'Me da pena tanta tontería\n' +
            'Quiero un poquito de normalidad\n' +
            'Pero a ver, mírame, y dime tronco, no veo ni un sitio y no puedo aparcar\n' +
            '\n' +
            'Ya has aparcado el coche y ahora busca lo del ticket de la hora\n' +
            'Y cuando vuelvas a ponerlo, te habrán puesto una receta de recuerdo\n' +
            '\n' +
            'Quiero entrar en tu garito con zapatillas\n' +
            'Que no me miren mal al pasar\n' +
            'Estoy cansado de siempre lo mismo\n' +
            'La misma historia, y quiero cambiar\n' +
            'Me da pena tanta tontería\n' +
            'Quiero un poquito de normalidad\n' +
            'Pero a ver, mírame, y dime tronco, no veo ni un sitio\n' +
            'Quiero entrar en tu garito con zapatillas\n' +
            'Que no me miren mal al pasar\n' +
            'Estoy cansado de siempre lo mismo\n' +
            'La misma historia, quiero cambiar\n' +
            'Me da pena tanta tontería\n' +
            'Quiero un poquito de normalidad\n' +
            'Pero a ver, mírame, y dime tronco, no veo ni un sitio y no puedo aparcar',
        photo_video: "songs_images/zapatillas.png",
        url_mp3: 'songs/El Canto del Loco - Zapatillas (Videoclip) [nHxam-MQg-o].mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'Como Camaron',
        duration: 307,
        lyrics: 'Superior a mí\n' +
            'Es la fuerza que me lleva\n' +
            'En el pulso que mantengo\n' +
            'Con la oscuridad que tiñen\n' +
            'De oscuro tus ojos negros\n' +
            '\n' +
            'Y qué me cuentas del tiempo\n' +
            'Que pasa en tu pestañeo\n' +
            'Y que me trae por esta calle\n' +
            'De amargura y de lamento\n' +
            '\n' +
            'Que yo sé que la sonrisa\n' +
            'Que se dibuja en mi cara\n' +
            'Tiene que ver con la brisa\n' +
            'Que abanica tu mirada\n' +
            '\n' +
            'Tan despacio y tan deprisa\n' +
            'Tan normal y tan extraña\n' +
            'Yo me parto la camisa\n' +
            'Como Camarón\n' +
            '\n' +
            'Tú me rompes las entrañas\n' +
            'Me trepas como una araña\n' +
            'Bebes del sudor que empaña\n' +
            'El cristal de mi habitación\n' +
            '\n' +
            'Y después, por la mañana\n' +
            'Despierto y no tengo alas\n' +
            'Llevo diez horas durmiendo\n' +
            'Y mi almohada está empapada\n' +
            '\n' +
            'Todo había sido un sueño\n' +
            'Muy real y muy profundo\n' +
            'Tus ojos no tienen dueño\n' +
            'Porque no son de este mundo\n' +
            '\n' +
            'Que no te quiero mirar\n' +
            'Pero es que cierro los ojos\n' +
            'Y hasta te veo por dentro\n' +
            'Te veo en un lado y en otro\n' +
            'En cada foto, en cada espejo\n' +
            '\n' +
            'Y en las paredes del metro\n' +
            'Y en los ojos de la gente\n' +
            'Hasta en la sopa más caliente\n' +
            'Loco, yo me estoy volviendo\n' +
            '\n' +
            'Que yo sé que la sonrisa\n' +
            'Que se dibuja en mi cara\n' +
            'Tiene que ver con la brisa\n' +
            'Que abanica tu mirada\n' +
            '\n' +
            'Tan despacio y tan deprisa\n' +
            'Tan normal y tan extraña\n' +
            'Yo me parto la camisa\n' +
            'Como Camarón\n' +
            '\n' +
            'Tú me rompes las entrañas\n' +
            'Me trepas como una araña\n' +
            'Bebes del sudor que empaña\n' +
            'El cristal de mi habitación\n' +
            '\n' +
            'Y después por la mañana\n' +
            'Despierto y no tengo alas\n' +
            'Llevo diez horas durmiendo\n' +
            'Y mi almohada está empapada\n' +
            '\n' +
            'Todo había sido un sueño\n' +
            'Muy real y muy profundo\n' +
            'Tus ojos no tienen dueño\n' +
            'Porque no son de este mundo\n' +
            '\n' +
            'Y, a veces, me confundo\n' +
            'Y pico a tu vecina\n' +
            'Esa del segundo\n' +
            'Que vende cosa fina\n' +
            'Y, a veces, te espero\n' +
            'En el bar de la esquina\n' +
            'Con la mirada fija en tu portería\n' +
            '\n' +
            'Y, a veces, me como\n' +
            'De un boca\'o el mundo\n' +
            'Y, a veces, te siento\n' +
            'Y, a veces, te tumbo\n' +
            'A veces, te leo un beso en los labios\n' +
            'Y, como yo no me atrevo\n' +
            'Me corto y me abro\n' +
            '\n' +
            'Que yo sé que la sonrisa\n' +
            'Que se dibuja en mi cara\n' +
            'Tiene que ver con la brisa\n' +
            'Que abanica tu mirada\n' +
            '\n' +
            'Tan despacio y tan deprisa\n' +
            'Tan normal y tan extraña\n' +
            'Yo me parto la camisa\n' +
            'Como Camarón\n' +
            '\n' +
            'Tú me rompes las entrañas\n' +
            'Me trepas como una araña\n' +
            'Bebes del sudor que empaña\n' +
            'El cristal de mi habitación\n' +
            '\n' +
            'Y después por la mañana\n' +
            'Despierto y no tengo alas\n' +
            'Llevo diez horas durmiendo\n' +
            'Y mi almohada está empapada\n' +
            '\n' +
            'Todo había sido un sueño\n' +
            'Muy real y muy profundo\n' +
            'Tus ojos no tienen dueño\n' +
            'Porque no son de este mundo',
        photo_video: "songs_images/estopa.png",
        url_mp3: 'songs/Estopa - Como Camaron (Videoclip) [JmP89cIGJZM].mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'La casa por el tejado',
        duration: 243,
        lyrics: 'Ahora sí\n' +
            'Parece que ya empiezo a entender\n' +
            'Las cosas importantes aquí\n' +
            'Son las que están detrás de la piel\n' +
            '\n' +
            'Y todo lo demás\n' +
            'Empieza donde acaban mis pies\n' +
            'Después de mucho tiempo aprendí\n' +
            'Que hay cosas que es mejor no aprender\n' +
            '\n' +
            'El colegio poco me enseñó\n' +
            'Si es por esos libros, nunca aprendo\n' +
            '\n' +
            'A coger el cielo con las manos\n' +
            'A reír y a llorar lo que te canto\n' +
            'A coser mi alma rota\n' +
            'A perder el miedo a quedar como un idiota\n' +
            '\n' +
            'Y a empezar la casa por el tejado\n' +
            'A poder dormir, cuando tú no estás a mi lado\n' +
            'Menos mal que fui un poco granuja\n' +
            'Todo lo que sé, me lo enseñó una bruja\n' +
            '\n' +
            'Ruinas\n' +
            '¿No ves que, por dentro, estoy en ruinas?\n' +
            'Mi cigarro va quemando el tiempo\n' +
            'Tiempo que se convirtió en ceniza\n' +
            'Raro\n' +
            'No digo diferente, digo raro\n' +
            'Ya no sé si el mundo está al revés\n' +
            'O soy yo el que está cabeza abajo\n' +
            '\n' +
            'El colegio poco me enseñó\n' +
            'Si es por el maestro, nunca aprendo\n' +
            '\n' +
            'A coger el cielo con las manos\n' +
            'A reír y a llorar lo que te canto\n' +
            'A coser mi alma rota\n' +
            'A perder el miedo a quedar como un idiota\n' +
            '\n' +
            'Y a empezar la casa por el tejado\n' +
            'A poder dormir, cuando tú no estás a mi lado\n' +
            'Menos mal que fui un poco granuja\n' +
            'Todo lo que sé me lo enseñó una bruja\n' +
            '\n' +
            'Y en el sur de tu cuerpo sé dónde ir (no estás)\n' +
            'Yo sé que esa estúpida sonrisa (no estás)\n' +
            'Que mi cara refleja (no estás)\n' +
            'Los días de lluvia y tormenta (no estás)\n' +
            'Como colgados a mal (no estás)\n' +
            '\n' +
            'Seré un pobre infeliz\n' +
            'Si me falta el jardín de las delicias y to\' (no estás)\n' +
            'Bajo tu falda aunque, sé de buena tinta (no estás)\n' +
            'Que no es solo para mí (no estás)\n' +
            'Cuentan maravillas, mis amigos, de ti (no estás a mi lado)\n' +
            '\n' +
            'No estás a mi lado\n' +
            'No estás a mi lado\n' +
            'No estás a mi lado\n' +
            '(No estás a mi lado)\n' +
            '\n' +
            'No estás a mi lado\n' +
            'No estás a mi lado\n' +
            '(No estás a mi lado)\n' +
            'No estás a mi lado\n' +
            '(No estás a mi lado)\n' +
            'No estás a mi lado\n' +
            'No estás a mi lado\n' +
            '(No estás a mi lado)\n' +
            'No estás a mi lado\n' +
            '(No estás a mi lado)\n' +
            'No estás a mi lado\n' +
            '(No estás a mi lado)',
        photo_video: "songs_images/laCasaPorElTejado.png",
        url_mp3: 'songs/Fito & Fitipaldis - La casa por el tejado (Videoclip oficial) [8qz8FqmTsJY].mp3',
          type: "album",
          genre: 'Rock'
      },
      {
        name: 'Soldadito marinero',
        duration: 431,
        lyrics: 'Él camina despacito que las prisas no son buenas\n' +
            'En su brazo dobladita, con cuidado la chaqueta\n' +
            'Luego pasa por la calle dónde los chavales juegan\n' +
            'Él también quiso ser niño pero le pilló la guerra\n' +
            '\n' +
            'Soldadito marinero conociste a una sirena\n' +
            'De esas que dicen te quiero si ven la cartera llena\n' +
            'Escogiste a la más guapa y a la menos buena\n' +
            'Sin saber como ha venido te ha cogido la tormenta\n' +
            '\n' +
            'Él quería cruzar los mares y olvidar a su sirena\n' +
            'La verdad, no fue difícil cuando conoció a Mariela\n' +
            'Que tenía los ojos verdes y un negocio entre las piernas\n' +
            'Hay que ver que puntería, no te arrimas a una buena\n' +
            '\n' +
            'Soldadito marinero conociste a una sirena\n' +
            'De esas que dicen te quiero si ven la cartera llena\n' +
            'Escogiste la más guapa y a la menos buena\n' +
            'Sin saber como ha venido te ha cogido la tormenta\n' +
            '\n' +
            'Después de un invierno malo, una mala primavera\n' +
            'Dime por que estas buscando una lágrima en la arena\n' +
            'Después de un invierno malo, una mala primavera\n' +
            '\n' +
            'Dime por que estas buscando una lágrima en la arena\n' +
            'Después de un invierno malo, una mala primavera\n' +
            'Dime por que estas buscando una lágrima en la arena\n' +
            'Después de un invierno malo',
        photo_video: "songs_images/soldaditoMarinero.png",
        url_mp3: 'songs/Fito & Fitipaldis - Soldadito marinero (Videoclip oficial) [GxQjx7FkmNA].mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'Barbie de extrarradio',
        duration: 224,
        lyrics: 'En la guerra, como en el amor\n' +
            'Todo vale y siempre queda un perdedor\n' +
            'Normalmente, pierde el que quiere más\n' +
            'Al igual que en una mesa de blackjack\n' +
            '\n' +
            'Me olvidaré de tu amor de garrafón\n' +
            'Me olvidaré de tus besos de Judas\n' +
            'Hoy, voy a darle a mi pobre corazón\n' +
            'Un par de capas de alguna pintura\n' +
            '\n' +
            'Que borre las humedades\n' +
            'Que le han dejado tus recuerdos\n' +
            '\n' +
            'Tú subes como la marea\n' +
            'Yo bajo como la tensión\n' +
            'Pa\' mi, es como un rompecabezas\n' +
            'Lo que, pa\' ti, cae de cajón\n' +
            '\n' +
            'Yo tengo arrugas en el alma\n' +
            'Tú, piedras en el corazón\n' +
            'Mis sentimientos van en chándal\n' +
            'Y los tuyos visten de Dior\n' +
            '\n' +
            'Una taza de fe, por favor\n' +
            'Para este desnatado corazón\n' +
            'Que poco a poco se desangra\n' +
            'Barbie de extrarradio\n' +
            '\n' +
            'Hoy, las penas, como la pasión\n' +
            'Duran poco y dejan siempre un mal sabor\n' +
            'Una mezcla entre sal y limón\n' +
            'Exprimido en mi marchito corazón\n' +
            '\n' +
            'Me olvidaré de tu amor de garrafón\n' +
            'Me olvidaré de tus besos de Judas\n' +
            'Hoy voy a darle a mi pobre corazón\n' +
            'Un par de capas de alguna pintura\n' +
            '\n' +
            'Que borre las humedades\n' +
            'Que le han dejado tus recuerdos\n' +
            '\n' +
            'Tú subes como la marea\n' +
            'Yo bajo como la tensión\n' +
            'Pa\' mi, es como un rompecabezas\n' +
            'Lo que, pa\' ti, cae de cajón\n' +
            '\n' +
            'Yo tengo arrugas en el alma\n' +
            'Tú, piedras en el corazón\n' +
            'Mis sentimientos van en chándal\n' +
            'Y los tuyos visten de Dior\n' +
            '\n' +
            'Una taza de fe, por favor\n' +
            'Para este desnatado corazón\n' +
            'Que poco a poco se desangra\n' +
            'Barbie de extrarradio\n' +
            '\n' +
            'Y de quererte\n' +
            'Pasé mis años olvidado en una trampa\n' +
            'Para ratones, en la que tú eras el queso\n' +
            'Tú con carrera en el amor\n' +
            'Y yo en primero de la ESO\n' +
            'Pa\' estudiar el primer beso que me diste\n' +
            '\n' +
            'Y ahora te digo que no tienes corazón\n' +
            'Que no me dejas elección\n' +
            'Que nuestra relación fue un chiste\n' +
            'Querida Barbie de extrarradio\n' +
            'Corre, tu Ken te está esperando',
        photo_video: "songs_images/barbieDeExtrarradio.png",
        url_mp3: 'songs/Melendi - Barbie de extrarradio (Videoclip Oficial) [f41rIgQF-Mw].mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'Caminando Por La Vida',
        duration: 203,
        lyrics: 'Huele a aire de primavera\n' +
            'Tengo alergia en el corazón\n' +
            'Voy cantando por la carretera\n' +
            'De copiloto llevo al Sol\n' +
            '\n' +
            'Y a mí no me hace falta estrella\n' +
            'Que me lleve hasta tu portal\n' +
            'Como ayer estaba borracho\n' +
            'Fui tirando migas de pan\n' +
            '\n' +
            'Voy caminando por la vida\n' +
            'Sin pausa, pero sin prisa\n' +
            'Procurando no hacer ruido, vesti\'o con una sonrisa\n' +
            'Sin complejo ni temores\n' +
            'Canto rumba\' de colore\'\n' +
            'Y el llorar no me hace daño siempre y cuando tú no llore\', ay\n' +
            'Siempre y cuando tú no llore\', ay\n' +
            '\n' +
            'Y el Milindri a mí me llaman\n' +
            'En el mundillo calé\n' +
            'Porque al coger mi guitarra\n' +
            'Se me van solo\' lo\' pie\'\n' +
            '\n' +
            'Y este año le pido al cielo (ay, vámonos)\n' +
            'La salud del anterior\n' +
            'No necesito dinero\n' +
            'Voy sobra\'o en el amor\n' +
            '\n' +
            'Voy caminando por la vida\n' +
            'Sin pausa, pero sin prisa\n' +
            'Procurando no hacer ruido, vesti\'o con una sonrisa\n' +
            'Sin complejo ni temores\n' +
            'Canto rumba\' de colore\'\n' +
            'Y el llorar no me hace daño siempre y cuando tú no llore\', ay\n' +
            'Siempre y cuando tú no llore\', ay\n' +
            '\n' +
            'Y no quiero amores\n' +
            'No correspondidos\n' +
            'No quiero guerras\n' +
            'No quiero amigos\n' +
            'Que no me quieran sin mis galones\n' +
            '\n' +
            'No me tires flores\n' +
            'Ni falsas miradas de inexpresión\n' +
            'Que no dicen nada\n' +
            'Del corazón que me las propone\n' +
            'Porque\n' +
            '\n' +
            'Voy caminando por la vida\n' +
            'Sin pausa, pero sin prisa\n' +
            'Procurando no hacer ruido vesti\'o con una sonrisa\n' +
            'Sin complejo ni temores\n' +
            'Canto rumba\' de colore\'\n' +
            'Y el llorar no me hace daño siempre y cuando tú no llore\', ay\n' +
            'Siempre y cuando tú no llore\', ay\n' +
            '\n' +
            'Siempre y cuando tú no llore\'\n' +
            'Siempre que no me abandone\'\n' +
            'Siempre que de tu mirada\n' +
            'Vea salir los corazone\'\n' +
            '\n' +
            'Siempre y cuando tú no llore\'\n' +
            'Siempre que no me abandone\'\n' +
            'Siempre que con tu palabra\n' +
            'Calme todo\' mis temore\'\n' +
            '\n' +
            'Siempre y cuando tú no llore\'\n' +
            'No llore\'\n' +
            'No llore\'',
        photo_video: "songs_images/caminandoPorLaVida.png",
        url_mp3: 'songs/Melendi - Caminando Por La Vida (Videoclip Oficial) [eznXJEjvHbk].mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'Un Violinista En Tu Tejado',
        duration: 243,
        lyrics: 'Eres tan dura\n' +
            'Como la piedra de mi mechero\n' +
            'Me asaltan dudas\n' +
            'De si te quiero\n' +
            '\n' +
            'Eres tan fría\n' +
            'Ay, como el agua\n' +
            'Que baja libre de la montaña\n' +
            '\n' +
            'Y no lo entiendo\n' +
            'Fue tan efímero\n' +
            'El caminar de tu dedo en mi espalda, dibujando un corazón\n' +
            '\n' +
            'Y pido al cielo que sepa comprender\n' +
            'Estos ataques de celos\n' +
            'Que me entran si yo no te vuelvo a ver\n' +
            '\n' +
            'Le pido a la Luna que alumbre tu vida\n' +
            'La mía hace ya tiempo que yace fundida\n' +
            'Con lo que me cuesta querer solo a ratos\n' +
            'Mejor no te quiero, será más barato\n' +
            '\n' +
            'Cansado de ser el triste violinista que está en tu tejado\n' +
            'Tocando pa\'l inglés, siempre desafinado\n' +
            '\n' +
            'Eres tan tenue\n' +
            'Como la luz que alumbra en mi vida\n' +
            'La más madura fruta prohibida\n' +
            '\n' +
            'Tan diferente\n' +
            'Y parecida\n' +
            'A la tormenta que se llevó mi vida\n' +
            '\n' +
            'Y no lo entiendo\n' +
            'Fue tan efímero\n' +
            'El caminar de tu dedo en mi espalda dibujando un corazón\n' +
            '\n' +
            'Y pido al cielo que sepa comprender\n' +
            'Estos ataques de celos\n' +
            'Que me entran si yo no te vuelvo a ver\n' +
            '\n' +
            'Le pido a la Luna que alumbre tu vida\n' +
            'La mía hace ya tiempo que yace fundida\n' +
            'Con lo que me cuesta querer solo a ratos\n' +
            'Mejor no te quiero será más barato\n' +
            '\n' +
            'Cansado de ser el triste violinista que está en tu tejado\n' +
            'Tocando pa\'l inglés, siempre desafinado\n' +
            '\n' +
            'Le pido a la Luna que alumbre tu vida\n' +
            'La mía hace ya tiempo que yace fundida\n' +
            'Con lo que me cuesta querer solo a ratos\n' +
            'Mejor no te quiero será más barato\n' +
            '\n' +
            'Cansado de ser el triste violinista que está en tu tejado\n' +
            'Tocando pa\'l inglés, siempre desafinado\n' +
            '\n' +
            'Y mientras rebusco en tu basura\n' +
            'Nos van creciendo los enanos\n' +
            'De este circo que un día montamos\n' +
            '\n' +
            'Pero que no quepa duda\n' +
            'Muy pronto estaré liberado\n' +
            'Porque el tiempo todo lo cura\n' +
            'Porque un clavo saca otro clavo\n' +
            '\n' +
            'Siempre desafinado\n' +
            'Y mientras rebusco en tu basura\n' +
            'Nos van creciendo los enanos\n' +
            'De este circo que un día montamos\n' +
            '\n' +
            'Pero que no quepa duda',
        photo_video: "songs_images/unViolinistaEnTuTejado.png",
        url_mp3: 'songs/Melendi - Un Violinista En Tu Tejado [eJbIMODHIdw].mp3',
          type: "album",
          genre: 'Pop'
      },
      {
        name: 'En Que Estrella Estara',
        duration: 145,
        lyrics: 'He creado un ángel verde y gris\n' +
            'Que se pasea de noche, no lo puedo ver\n' +
            'Está donde la luz que dicen que hay\n' +
            'Donde terminan los sueños de la realidad\n' +
            'Donde se escapan los niños, si no quieres más\n' +
            'Donde se ahogan los gritos de mi mitad\n' +
            '\n' +
            'He creado un ángel verde y gris\n' +
            'A veces le hablo bajito por si está\n' +
            'Le busco por la calle al caminar\n' +
            'A veces le echo de menos, si tú no estás\n' +
            'A veces tengo que hacer de tripas corazón\n' +
            'A veces tengo que huir, porque no puedo más\n' +
            '\n' +
            '¿En qué estrella estará? Para cuidar de él\n' +
            'Me pasaré la vida sin dormir\n' +
            '¿En qué estrella estará mi dulce corazón?\n' +
            '¿Por qué me roba la vida la razón?\n' +
            'Dime quién vendrá a ocupar su lugar\n' +
            '¿Por qué mis sueños se rompen de golpe?\n' +
            '\n' +
            '¿Dónde terminan los sueños de la realidad?\n' +
            '¿Dónde se ahogan los gritos de mi mitad?\n' +
            '¿En qué estrella estará? (Ah, ¿en qué estrella estará?)\n' +
            '\n' +
            '¿En qué estrella estará? Para cuidar de él\n' +
            'Me pasaré la vida sin dormir\n' +
            '¿En qué estrella estará mi dulce corazón?\n' +
            '¿Por qué me roba la vida la razón?\n' +
            'Dime quién vendrá a ocupar su lugar\n' +
            '¿Por qué mis sueños se rompen de golpe?\n' +
            '\n' +
            '¿En qué estrella estará? Para cuidar de él\n' +
            'Me pasaré la vida sin dormir\n' +
            '¿En qué estrella estará mi dulce corazón?\n' +
            '¿Por qué me roba la vida la razón?\n' +
            'Dime quién vendrá a ocupar su lugar\n' +
            '¿Por qué mis sueños se rompen de golpe?\n' +
            'Quiero irme con él',
        photo_video: "songs_images/enQueEstrellaEstara.png",
        url_mp3: 'songs/Nena Daconte - En Que Estrella Estara [qZ1H-e8Z-LY].mp3',
          type: "album",
          genre: 'Rock'
      },
      {
        name: 'El Último Día de Nuestras Vidas',
        duration: 234,
        lyrics: 'Hoy es el último día de nuestra vida\n' +
            'Hoy es el último día de nuestras vidas\n' +
            '\n' +
            'Vamos a dormir en París\n' +
            'Que saquen Dom Pérignon, faire l\'amour en Hotel Costes\n' +
            'Quiero recorrer Nueva York, emborracharme en Berlín\n' +
            'Que no se acabe esta noche\n' +
            '\n' +
            'Quiero que te vuelvas loca\n' +
            'Y que te toques mientras yo conduzco un 911\n' +
            'De camino por la costa oeste\n' +
            'Y parar en una playa en Pebbles Beach\n' +
            '\n' +
            'Vámonos a dar la vuelta al mundo\n' +
            'Vamos a olvidarnos de todo Madrid\n' +
            'Vamos a inventarnos que hoy sea el último\n' +
            'El último día de nuestra vida aquí\n' +
            '\n' +
            'Vámonos a dar la vuelta al mundo\n' +
            'Quiero que te olvides, solo piensa en ti\n' +
            'Vamos a reírnos del futuro\n' +
            'Que esto sea lo que quede por vivir\n' +
            '\n' +
            'Yo quiero poder engordar, que tú lo hagas también\n' +
            'Que las siluetas no importen\n' +
            'Yo quiero una vida normal, que no queramos pasar\n' +
            'Si no te sale, te jodes\n' +
            '\n' +
            'Quiero que te vuelvas loca\n' +
            'Y que te toques mientras yo conduzco un 911\n' +
            'De camino por la costa oeste\n' +
            'Y parar en una playa en Pebbles Beach\n' +
            '\n' +
            'Vámonos a dar la vuelta al mundo\n' +
            'Vamos a olvidarnos de todo Madrid\n' +
            'Vamos a inventarnos que hoy sea el último\n' +
            'El último día de nuestra vida aquí\n' +
            '\n' +
            'Vámonos a dar la vuelta al mundo\n' +
            'Quiero que te olvides, solo piensa en ti\n' +
            'Vamos a reírnos del futuro\n' +
            'Que esto sea lo que quede por vivir\n' +
            '\n' +
            'Hoy es el último día de nuestra vida\n' +
            'Hoy es el último día de nuestras vidas\n' +
            '\n' +
            'Hoy es el último día de nuestra vida\n' +
            'Hoy es el último día de nuestras vidas\n' +
            '\n' +
            'Porque hoy es el último día de nuestras vidas\n' +
            'Porque hoy es el último día de nuestras vidas\n' +
            'De nuestras vidas, de nuestras vidas\n' +
            'Porque hoy es el último día de nuestras vidas',
          photo_video: "songs_images/ultimoDiaVidas.png",
          url_mp3: 'songs/Dani Martin - El Último Día de Nuestras Vidas (Video Oficial) [Zj2p3njVgng].mp3',
          type: "sencillo",
          genre: 'Pop'
      },
      {
        name: 'So Payaso',
        duration: 282,
        lyrics: 'Puede que me deje llevar\n' +
            'Puede que levante la voz\n' +
            'Puede que me arranque sin más\n' +
            'A ver que me dice después\n' +
            '\n' +
            'Quiero ser tu perro fiel\n' +
            'Tu esclavo sin rechistar\n' +
            'Que luego me desato y verás\n' +
            'A ver que me dice después\n' +
            '\n' +
            'So payaso\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy descolorío\n' +
            'La empiezo a besar\n' +
            'A ver que me dice después\n' +
            'So cretino\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy desconocío\n' +
            'Empiezo a pensar\n' +
            'A ver que me dice después\n' +
            '\n' +
            'Acercate y ya verás\n' +
            'Que no sé cómo hacerlo peor\n' +
            'Despacito pero mu\' mal\n' +
            'A ver que me dice después\n' +
            '\n' +
            'Hago casas de cartón\n' +
            'Ayer bebí hasta jurar\n' +
            'Pero hoy no me levanta ni Dios\n' +
            'A ver que me dice después\n' +
            '\n' +
            'So payaso\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy descolorío\n' +
            'La empiezo a besar\n' +
            'A ver que me dice después\n' +
            'So cretino\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy desconocío\n' +
            'Empiezo a pensar\n' +
            'A ver que me dice después\n' +
            '\n' +
            'A ver que me dice después\n' +
            'So payaso\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy descolorío\n' +
            'La empiezo a besar\n' +
            'A ver que me dice después\n' +
            'So cretino\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy desconocío\n' +
            'Empiezo a pensar\n' +
            'A ver que me dice después\n' +
            '\n' +
            'So payaso\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy descolorío\n' +
            '\n' +
            'So cretino\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy desconocío\n' +
            '\n' +
            'So payaso\n' +
            'Y me tiemblan los pies\n' +
            'A su lado\n' +
            'Me dice que estoy descolorío',
            photo_video: "songs_images/soPayaso.png",
            url_mp3: 'songs/Extremoduro - So Payaso (Video) [1D3tSv9LQlE].mp3',
            type: "album",
            genre: 'Rock'
      },
      {
        name: 'Me equivocaría otra vez',
        duration: 303,
        lyrics: 'Se torció el camino, tú ya sabes que no puedo volver\n' +
            'Son cosas del destino, siempre me quiere morder\n' +
            'El horizonte se confunde con un negro telón\n' +
            'Y puede ser como decir que se acabó la función\n' +
            '\n' +
            'Ha sido divertido, me equivocaría otra vez\n' +
            'Quisiera haber querido lo que no he sabido querer\n' +
            'Quieres bailar conmigo, puede que te pise los pies\n' +
            'No soñaré solo porque me he queda\'o dormido\n' +
            '\n' +
            'No voy a despertarme porque salga el Sol\n' +
            'Ya sé llorar una vez por cada vez que río\n' +
            'No sé restar\n' +
            'No sé restar tu mitad a mi corazón\n' +
            '\n' +
            'Puede ser que la respuesta sea no preguntarse por qué\n' +
            'Perderse por los bares donde se bebe sin sed\n' +
            'Virgen de la locura, nunca más te voy a rezar\n' +
            'Que me he enterado de los pecados que me quieres quitar\n' +
            '\n' +
            'Será más divertido cuando no me toque perder\n' +
            'Sigo apostando al 5, y cada 2 por 3, sale 6\n' +
            'Yo bailaría contigo, pero es que estoy sordo de un pie\n' +
            'No soñaré solo porque me he queda\'o dormido\n' +
            '\n' +
            'No voy a despertarme porque salga el Sol\n' +
            'Ya sé llorar una vez por cada vez que río\n' +
            'No sé restar\n' +
            'No sé restar tu mitad a mi corazón\n' +
            '\n' +
            'Ha sido divertido, me equivocaría otra vez\n' +
            'Quisiera haber querido lo que no he sabido querer\n' +
            'Quieres bailar conmigo, puede que te pise los pies\n' +
            'No soñaré solo porque me he queda\'o dormido\n' +
            '\n' +
            'No voy a despertarme porque salga el Sol\n' +
            'Ya sé llorar una vez por cada vez que río\n' +
            'No sé restar\n' +
            'No sé restar tu mitad a mi corazón\n' +
            'No sé restar tu mitad a mi corazón\n' +
            'No sé restar tu mitad a mi corazón',
        photo_video: "songs_images/meEquivocariaOtraVez.png",
        url_mp3: 'songs/Fito & Fitipaldis - Me equivocaría otra vez (Videoclip oficial) [HjF3E2zGNkg].mp3',
          type: "album",
          genre: 'Rock'
      },
      {
        name: 'Buscando en la basura',
        duration: 214,
        lyrics: 'Triste,\n' +
            'Como el perro en la autopista;\n' +
            'Como una tortuga con prisa;\n' +
            'como una monja en un burdel.\n' +
            '\n' +
            'Solo,\n' +
            'Como cuando tu te fuiste:\n' +
            'Como cuando no te rozan\n' +
            'Unos labios de mujer.\n' +
            '\n' +
            'Hoy me he vuelto a ver...\n' +
            '\n' +
            'Absurdo,\n' +
            'Como un domingo por la tarde;\n' +
            'Como las balas por el aire;\n' +
            'Como el puto despertador.\n' +
            '\n' +
            'Inútil,\n' +
            'Como los besos que no diste;\n' +
            'Como un cuerpo que se viste\n' +
            'Cuando me desnudo yo.\n' +
            '\n' +
            'Y ahora que voy mas solo que la luna\n' +
            'Negociando gasolina para este amanecer.\n' +
            'Ya ves, voy buscando en la basura\n' +
            'Unos labios que me digan: "esta noche quédate".\n' +
            '\n' +
            'Como un borracho en el desierto;\n' +
            'Como una princesa en el metro;\n' +
            'Como un reo sin voz.\n' +
            '\n' +
            'Como una navidad sin techo;\n' +
            'Como un delfín en el mar muerto;\n' +
            'Como la lagrima que moja tu colchón.\n' +
            '\n' +
            'Vacío,\n' +
            'Como el corazón del rico;\n' +
            'Como el bolsillo del mendigo;\n' +
            'Como los besos de alquiler.\n' +
            '\n' +
            'Confuso,\n' +
            'Como una noche sin abrigo;\n' +
            'Como las frases que ya no te escribo\n' +
            'Pa´ que vuelvas otra vez.',
        photo_video: "songs_images/buscandoBasura.png",
        url_mp3: 'songs/La Fuga - Buscando en la basura (video clip) [SE4SmL_SWU8].mp3',
          type: "album",
          genre: 'Rock'
      },
      {
        name: 'Caída Libre',
        duration: 224,
        lyrics: 'Y sé que solo estoy mirando de otra forma\n' +
            'Que voy a darle vuelta a nuestras sombras mientras busco el modo\n' +
            'De remontar el vuelo\n' +
            'Robe, ahí te mando el pedacito nuevo\n' +
            'Incluyendo el verbo remontar, que es lo que a ti te gustaba\n' +
            'A ver como te suena\n' +
            'Un besito, chao\n' +
            '\n' +
            'Si encontrara silencio en mi ruido mental\n' +
            'Dormiría diez días y un año\n' +
            'Si avistara la causa de mi tempestad\n' +
            'Me pondría a chillar como un gallo\n' +
            '\n' +
            'Hoy, hasta las moscas me pasan de largo\n' +
            '¿Será que algo les huele mal?\n' +
            'El griterío de mis pensamientos a toda velocidad\n' +
            'Hasta los huevos de esperar un milagro\n' +
            'Cansado de avanzar marcha atrás\n' +
            '\n' +
            'Me tomo la pastilla roja\n' +
            'Bebo 0.0, me alimento bien\n' +
            'Hay un millón de muebles que mover\n' +
            'Y no sé detrás de cuál está lo que he perdido\n' +
            '\n' +
            'Todo tiene luz de probador\n' +
            'Ya no me reconozco y me importa bien poco\n' +
            'En cuanto me dé un rayo de Sol\n' +
            'Voy a hacerme una foto en un fotomatón\n' +
            '\n' +
            '¿Quién es que llama a mi cabeza a todas horas?\n' +
            '¿Que puede remendar todas las hojas que han caído al suelo\n' +
            'Como un árbol en invierno?\n' +
            'Y sé que solo estoy mirando de otra forma\n' +
            'Que voy a dar la vuelta a nuestra sombra mientras busco el modo\n' +
            'De remontar el vuelo\n' +
            '\n' +
            'A veces, hago maniobras\n' +
            'Para retomarlo donde lo dejé\n' +
            'Hay demasiados frentes a la vez\n' +
            'Y no consigo ver quién coño es el enemigo\n' +
            '\n' +
            'Todo tiene luz de probador\n' +
            'Ya no me reconozco y me importa bien poco\n' +
            'En cuanto me dé un rayo de Sol\n' +
            'Voy a hacerme una foto\n' +
            '\n' +
            'Todo tiene luz de probador\n' +
            'Ya no me reconozco y me importa bien poco\n' +
            'En cuanto me dé un rayo de Sol\n' +
            'Voy a hacerme una foto en un fotomatón',
        photo_video: "songs_images/caidaLibre.png",
        url_mp3: 'songs/Leiva - Caída Libre (Video Oficial) ft. Robe [wFUU00eY1Rc].mp3',
          type: "sencillo",
          genre: 'Rock'
      },
      {
        name: 'Still Luvin',
        duration: 246,
        lyrics: 'Ey, nunca leí este mensaje, lo perdí entre tanto texto\n' +
            'Lo siento por haber tarda\'o en contestar tres meses, diez días y seis horas\n' +
            'Y sé que ahora está un poco fuera de contexto\n' +
            'Pero es que estaban poniendo tu canción favorita en la emisora\n' +
            '\n' +
            'Pensé que tendrían otros tonos si algún día te hacía una canción\n' +
            'Unos acordes más tristes y contar cómo fue mi versión\n' +
            'Y aunque te sigo echando de menos, y quitaste nuestras fotos del salón\n' +
            'No consigo odiarte, no tengo motivo, no tengo otra opción\n' +
            '\n' +
            'Duermo en tu la\'o de la cama cuando estoy con otra pa\' que no se sientan especiales, a\n' +
            'Ellas tampoco les importa, solo me dejan una nota con sus redes sociales, no\n' +
            'Sé si quieren que les siga o que les hable, pero no sabes que les vale\n' +
            'Si mi algoritmo está empeñado en que tú eres la correcta\n' +
            '\n' +
            'Y viendo tu foto me duele todo\n' +
            'Ahora me acuesto solo, despierto solo, cocino solo\n' +
            'Recojo solo, veo pelis solo, hago todo solo\n' +
            'La única vez que no estoy solo es cuando veo mi reflejo en el disco de oro\n' +
            'Sabes que me blindé, pero no muy bien del todo\n' +
            '\n' +
            'Pero I still lovin\' you\n' +
            'Lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'I-I-I-I keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            '\n' +
            'Ey, he vuelto a ver tu tatuaje, aunque esta vez en otro cuerpo\n' +
            'Y no pude evitar el parar y pensar en cómo te irá ahora\n' +
            'Siempre me cruzo a tu amiga, y cada vez que me la encuentro\n' +
            'Siento que me has olvida\'o, y por cómo me mira, sé que ya no me odia\n' +
            '\n' +
            'Este mensaje no tiene un motivo, borro y escribo, borro y escribo (mierda)\n' +
            'Esto solo me pasa contigo, te lo juro, está el gato de testigo\n' +
            'Y ya que estamos, si tienes tiempo, a ver si vienes a recoger tu abrigo\n' +
            'Yo sigo soltero, pero tranquila, prometo portarme como es debido\n' +
            '\n' +
            'La yaya se acuerda de poco, pero siempre me saca tu nombre\n' +
            'Siempre le gustaste pa\' mí porque estás desde que éramos pobres, y\n' +
            'La vecina se mudó, la nueva te caería mejor, oh, oh\n' +
            'Ahora, a veces, por error, siguen llegando tus cartas al buzón\n' +
            '\n' +
            '(Todavía) me quito tu anillo cuando estoy con otra, me lo pongo en la intimidad\n' +
            '(Porque yo) borré nuestras fotos del iPhone, pero hice una copia de seguridad\n' +
            'Ayer, olí tu perfume mientras andábamos por la ciudad\n' +
            'Y le dije a los míos: Está todo bien, pero a mí no me puedo engañar\n' +
            '\n' +
            'Aunque no es lo mismo sin ti\n' +
            'Me río, imaginándonos discutir\n' +
            'Me suelo decir\n' +
            'Que no, pero sí\n' +
            '\n' +
            'Baby, I still lovin\' you\n' +
            'Lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'I-I-I-I keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            '\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'Keep lovin\' you\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'Keep lovin\' you\n' +
            '\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'Keep lovin\' you\n' +
            'I keep lovin\', lovin\'\n' +
            'Keep lovin\', lovin\'\n' +
            'Keep on lovin\', lovin\' you\n' +
            'Keep lovin\' you',
        photo_video: 'songs_images/stillLuvin.png',
        url_mp3: 'songs/Delaossa, Quevedo - Still Luvin [gUyeDnATsAs].mp3',
          type: "sencillo",
          genre: 'Reggaeton'
      },
      {
          name: 'Peligrosa',
          duration: 136,
          lyrics: 'Mira esa nena, la que va pasando\n' +
              'Me gusta el cortecito que le está dando\n' +
              'Conmigo, ella se escapó\n' +
              'Peligrosa como mi Glock\n' +
              '\n' +
              'Mira esa nena, la que va pasando\n' +
              'Me gusta el cortecito que le está dando\n' +
              'Conmigo, ella se escapó\n' +
              'Peligrosa como mi Glock\n' +
              '\n' +
              'La nena me sigue, es la sensación del bloque\n' +
              'Yo quiero con ella hasta que la micro choque\n' +
              'Tú tranquila, las puerta\' bajan a tope\n' +
              'Pide lo que quiera\', que lo que quiero yo\n' +
              '\n' +
              'Es ponértelo, chiquitita como mi Glock\n' +
              'Se conecta como un peine de 30 a la Glock\n' +
              'Conmigo, ella se escapó\n' +
              'Nena, dale, mueve ese toto\n' +
              '\n' +
              'Y, ma, déjate llevar\n' +
              'En la discoteca, qué rica muñeca\n' +
              'Y, ma, déjate llevar\n' +
              'En la discoteca, se puso coqueta\n' +
              '\n' +
              'Mira esa nena, la que va pasando\n' +
              'Me gusta el cortecito que le está dando\n' +
              'Conmigo, ella se escapó\n' +
              'Peligrosa como mi Glock\n' +
              '\n' +
              'Mira esa nena, la que va pasando\n' +
              'Me gusta el cortecito que le está dando\n' +
              'Conmigo, ella se escapó\n' +
              'Peligrosa como mi Glock\n' +
              '\n' +
              'Ah, y peligrosa como una glopeta\n' +
              'La mandé pa\' que se haga completa\n' +
              'Mamita, que tu culo es la meta\n' +
              'Y tú está\' esperando a que te lo meta\n' +
              '\n' +
              'Ah-ah, ah-ah, está esperando a que se lo meta\n' +
              'Ah-ah, ah-ah, está esperando a que se lo meta\n' +
              'Ma, está esperando a que se lo meta\n' +
              'Ma, está esperando a que se lo meta',
          photo_video: 'songs_images/peligrosa.png',
          url_mp3: 'songs/FloyyMenor - Peligrosa (Video Oficial) [LW5oQl0CxdQ].mp3',
          type: "sencillo",
          genre: 'Reggaeton'
      },
      {
          name: 'Exotica',
          duration: 121,
          lyrics: 'Hoy somo\' tú y yo, mmh\n' +
              'Llévame al cielo, eh, eh, eh\n' +
              'Soy todo tuyo, mmh\n' +
              'De cien hasta cero\n' +
              '\n' +
              'Quiero quedarme aquí, aunque solo sea ilusión\n' +
              'Mi cora vuelva a latir por ti, eh\n' +
              'Quiero quedarme aquí, aunque solo sea ilusión\n' +
              'Mi cora vuelva a latir por ti\n' +
              '\n' +
              'Ella es exótica, mueve su cuerpo natural\n' +
              'Su mirada hipnótica, quiere ser una santa-ta-ta\n' +
              'Exótica, una diosa tan criminal\n' +
              'Labios saben a tropical, quiere ser una santa-ta-ta\n' +
              'Ella es exótica, mueve su cuerpo natural\n' +
              'Sua mirada hipnótica, quiere ser una santa-ta-ta\n' +
              'Exótica, una diosa tan criminal\n' +
              'Labios saben a tropical, quiere ser una santa-ta-ta\n' +
              '\n' +
              'Me asesinaste, mmh\n' +
              'Con tu mirada me mataste, oh\n' +
              'Ojos diamante\', mmh\n' +
              'Se hace la interesante, eh\n' +
              '\n' +
              'Quiero quedarme aquí, aunque solo sea ilusión\n' +
              'Mi cora vuelva a latir por ti, eh\n' +
              'Quiero quedarme aquí, aunque solo sea ilusión\n' +
              'Mi cora vuelva a latir por ti\n' +
              '\n' +
              'Ella es exótica, mueve su cuerpo natural\n' +
              'Su mirada hipnótica, quiere ser una santa-ta-ta\n' +
              'Exótica, una diosa tan criminal\n' +
              'Labios saben a tropical, quiere ser una santa-ta-ta\n' +
              'Ella es exótica, mueve su cuerpo natural\n' +
              'Su mirada hipnótica, quiere ser una santa-ta-ta\n' +
              'Exótica, una diosa tan criminal\n' +
              'Labios saben a tropical, quiere ser una santa-ta-ta',
          photo_video: 'songs_images/exotica.png',
          url_mp3: 'songs/Gabry Ponte - Exotica (Official Visualizer) [afUaGspU528].mp3',
          type: "sencillo",
          genre: 'Reggaeton'
      },
      {
          name: 'NINFO',
          duration: 180,
          lyrics: '(UVE)\n' +
              '\n' +
              'Tú \'tá aquí en mi cama, tu novio te llama\n' +
              'De mí, no diga\' na\', ay, dile que lo ama\'\n' +
              '(Ay, dile que lo ama\')\n' +
              '(Young Gipsy, mami, ah)\n' +
              '\n' +
              'Es una ninfo, está caliente y quiere a toda hora\n' +
              'Qué rico, sabe a mora, lo hacemos sin demora\n' +
              'Soy un adicto al sexo, viene siendo mi doctora\n' +
              'Cuando el toto le llora, si le meto, le empeora\n' +
              '\n' +
              'Una maníatica, conmigo, se volvió una ninfo\n' +
              'Ante\' de conocerme, ya sabía de mí la info\n' +
              'La recojo despué\' \'e la uni, le quito el unifo\n' +
              'Tiene el culo gigante como pa\' ponerla en four\n' +
              '\n' +
              'Va full de comfort, compra los perfume Tom Ford, Ford\n' +
              'No ando en una Ford, la recojo y quito el control, -trol\n' +
              'Nos vamo\' a vapor, los botines son Christian Dior\n' +
              'Bajan las gotas de sudor, dile que te lo hago mejor\n' +
              '\n' +
              'Baby, soy ninfómana, te como hasta la novia\n' +
              'El sexo e\' sin asco, yo a na\' le tengo fobia\n' +
              'Chingo más cabrón en rola en vez de naturola\n' +
              'Perra como Toki, asfíxiate en esta popola, eh, yeah\n' +
              '\n' +
              'No me digas si te va\' a venir, quiero que sea sorpresa\n' +
              'Las pierna\' en tus hombro\', yo al frente de ti\n' +
              'Me tiene\' esposá\', como presa\n' +
              '\n' +
              'Escúpeme, escúpeme, escúpeme\n' +
              'Dámelo, sígueme, ahórcame\n' +
              'Escúpeme, escúpeme, escúpeme\n' +
              'Quiero que en la cara ver tus bebé\'\n' +
              '\n' +
              'Soy una ninfo, estoy caliente, quiero a toda hora\n' +
              'Qué rico, sabe a mora, lo hacemo\' sin demora\n' +
              'Dos adicto\' al sexo que se chingan rico en rola\n' +
              'Cuando el toto me llora, lo mete y veo la gloria\n' +
              '\n' +
              'Então brisa, bandida, na condição e no cordão que tá valendo uns K\n' +
              'Suas amiga invejosa de cota, hoje comenta e fala: Olha onde ele tá\n' +
              'Na calmaria, seguindo minha vida tranquila, azar e bem rica (yeah)\n' +
              'Por dentro, a minha alma grita por tanta coisa que eu tive que passar\n' +
              '\n' +
              'Mudei minha vida, tô mais diferente\n' +
              'Elas gosta, encosta, quer aventurar\n' +
              'Na madruga, ela liga pros linha de frente (pros linha de frente)\n' +
              'Tô pegando suas amiga e deixando minha marca\n' +
              '\n' +
              'Tô com a mídia na minha mão, com esforço e respeito\n' +
              'Mas, zé, cê vê direito, pr\'ocês não se estrepar\n' +
              'Subindo o voucher da loirinha na foto com pretos\n' +
              'Zé polva fala mesmo, vai ter que me aturar\n' +
              '\n' +
              'Tô com a mídia na minha mão, com esforço e respeito\n' +
              'Mas, zé, cê vê direito, pr\'ocês não se estrepar\n' +
              'Subindo o voucher da loirinha na foto com pretos\n' +
              'Zé polva fala mesmo, vai ter que me aturar',
          photo_video: 'songs_images/ninfo.png',
          url_mp3: 'songs/JC REYES - NINFO FT DE LA ROSE & MC MENOR JP [AheqpcOwNP4].mp3',
          type: "sencillo",
          genre: 'Reggaeton'
      },
      {
          name: 'SE FUE',
          duration: 175,
          lyrics: 'Ey, eh, I love you\n' +
              '\'Tá bajito, eh\n' +
              'Uh-uh, Morad\n' +
              'Uh-uh-ah\n' +
              '\n' +
              'Todo\' nacemo\' para morir\n' +
              'Pero mientras viva, quiero estar bien, eh\n' +
              'Y yo que muero por ti, pero dime que sabe él\n' +
              'No quiero ruina, pero si se va, te juro que voy a por ti\n' +
              'Si me entero que él te hace llorar, no lo voy a permitir\n' +
              '\n' +
              'Tranquilo, en la mía, gastándomelo\n' +
              'Ahora me están escuchando hasta en Chile\n' +
              'Uy, vamo\' pa\'rriba como lo\' misile\'\n' +
              'No\' escapamo\' en un Lambo como lo\' dealer\n' +
              '\n' +
              'Manos arriba, esto es un atraco\n' +
              'Tе quitan del medio si tú erе\' un sapo\n' +
              'Me llevo a tu jamba sin ser el guapo\n' +
              'Esto pa\' la\' bitchie\', también pa\' los capo\'\n' +
              '\n' +
              'Pero también me caí, eh\n' +
              'Tirando pa\'lante, joseando sin miedo a morir\n' +
              'No llevo chaleco porque la mama ora por mí\n' +
              'Dime si me paso a por ti, a por ti\n' +
              '\n' +
              'Espera, espera, para, para, para un momento\n' +
              'Cámbiame el flow que esto ya lo he partí\'o\n' +
              'Díselo tú, Morad\n' +
              '\n' +
              'Dicen que se fue con otro, no sé\n' +
              'Y no lo pensé, se fue to\' vola\'o\n' +
              'Se escuchan rumores que tú tienes otro al la\'o\n' +
              'Pero él no te mira como en el tiempo te he mira\'o\n' +
              '\n' +
              'Se escucha por ahí que tú estás con un capo\n' +
              'Y yo no soy sapo, si quiere\' lo tapo\n' +
              'Vámono\' a un lugar lejano y me escapo\n' +
              'Pasamo\' un buen rato, no solo un relato\n' +
              '\n' +
              'Yo te iba a buscar tranquilo en la moto\n' +
              'Así no hacen foto\' ni mucho alboroto\n' +
              '\n' +
              'Tú e-, tú e-, tú ere\' mala, pero a rato\'\n' +
              'Ese nunca ha sido de malo\n' +
              'Si ese e\' malo, pues yo lo mato\n' +
              '\n' +
              'No me mido, no me igualo\n' +
              'No lo cojo si es un atasco\n' +
              'No lo cojo si es un atasco\n' +
              'Jugando como poli\' y caco\'\n' +
              'Me tiene fundí\'o el casco\n' +
              '\n' +
              '¿Qué tú quiere\'?\n' +
              'Dime en el tiempo que tú quiere\'\n' +
              'Si no te llamo, tú te muere\'\n' +
              'Y si te llamo, tú te altera\' (dice\')\n' +
              '\n' +
              '¿Qué tú quiere\'?\n' +
              'Dime en el tiempo que tú quiere\'\n' +
              'Si no te llamo, tú te muere\'\n' +
              'Y si te llamo, tú te altera\', ah\n' +
              '\n' +
              'Dicen que se fue con otro, no sé\n' +
              'Y no lo pensé, se fue to\' vola\'o\n' +
              'Se escuchan rumores que tú tienes otro al la\'o\n' +
              'Pero él no te mira como en el tiempo te he mira\'o',
          photo_video: 'songs_images/seFue.png',
          url_mp3: 'songs/Moncho Chavea, Morad - SE FUE [Db3Wpr0NMMY].mp3',
          type: "sencillo",
          genre: 'Rap'
      },
      {
          name: 'MR. MOONDIAL',
          duration: 170,
          lyrics: 'Mami, lo que hacemos los dos, nadie lo sabe\n' +
              'Nos comemos los dos como dos animales\n' +
              'Quevedo, cántale\n' +
              '\n' +
              '¿En serio, aquí, bebé? Si nos están mirando\n' +
              'Normal que tu amiga siempre te esté increpando\n' +
              'Te escapas por la noche y yo siempre me hago el blando\n' +
              'Le cae y en mi casa termina hiperventilando\n' +
              '\n' +
              'Dime de dónde saliste, no te había visto jamás\n' +
              'Me llama cuando debería estar en la universidad\n' +
              'Si me dices tu nombre, porfa, dime la verdad\n' +
              'Que aunque no me lo aprenda, te lo juro disimulo\n' +
              '\n' +
              'Todas las veces que haga falta y te llamo mi amor o baby\n' +
              'Y con tal de ver esas nalgas (eh-eh)\n' +
              'De nuevo, yo llego si me llamas\n' +
              'Manda ubi a cualquier hora que yo me cuelo en tu cama\n' +
              'Ah, ah (ah, ah)\n' +
              '\n' +
              'Cuando nadie nos ve, soy tu otra mitad\n' +
              'Y cuando estoy a tus pies, no vuelves a llamar\n' +
              'Y mientras dura, novios solo cuando estamo\' a oscuras\n' +
              'Y aunque siempre quiero más\n' +
              '\n' +
              'Cuando nadie nos ve, soy tu otra mitad\n' +
              'Y cuando estoy a tus pies, no vuelves a llamar\n' +
              'Y mientras dura, novios solo cuando estamo\' a oscuras\n' +
              'Y aunque siempre quiero más\n' +
              '\n' +
              'Ella me mira, she\'s looking at me\n' +
              'Y yo le leo los ojos y siento su vibra, que quiere ser mía (quiere ser mía)\n' +
              'I can see it in her eyes, I can feel it in her bad, that she wanna be mine (that she wanna be mine)\n' +
              'She sees I have moves, she sees what I do, but love is planned (love is planned)\n' +
              'Todo tiene su tiempo y tiene su momento, is all about timing (is all about timing)\n' +
              '\n' +
              'Tú va\' a hacer lo tuyo, yo hago lo mío, let\'s keep it real (let\'s keep it real)\n' +
              'Estamos tranquilos, lo hacemos todo, pero somos amigos (somos amigos)\n' +
              'Cuando nadie nos ve, nos vamos de Miami a Madrid en el jet\n' +
              'Nos comimos los tres, jajaja, tú sabes lo que es, dale\n' +
              '\n' +
              'Mami, lo que hacemos los dos nadie lo sabe (sí, oh-oh)\n' +
              'Nos comemos los dos como dos animales (yeah)\n' +
              '\n' +
              'De nuevo, yo llego si me llamas\n' +
              'Manda ubi a cualquier hora que yo me cuelo en tu cama\n' +
              'Ah, ah\n' +
              '\n' +
              'Cuando nadie nos ve, soy tu otra mitad\n' +
              'Y cuando estoy a tus pies, no vuelves a llamar\n' +
              'Y mientras dura, novios solo cuando estamo\' a oscuras\n' +
              'Y aunque siempre quiero más\n' +
              '\n' +
              'Cuando nadie nos ve, soy tu otra mitad\n' +
              'Y cuando estoy a tus pies, no vuelves a llamar\n' +
              'Y mientras dura (mientras dura), novios solo cuando estamo\' a oscuras\n' +
              'Y aunque siempre quiero más',
          photo_video: 'songs_images/mrMoondial.png',
          url_mp3: 'songs/MR. MOONDIAL - Quevedo ft. Pitbull (Visualizer) ｜ BUENAS NOCHES [-ZcNkX1ax80].mp3',
          type: "sencillo",
          genre: 'Reggaeton'
      },
      {
          name: 'DONDE TE ESCONDES',
          duration: 144,
          lyrics: '(Te juro que loco me va a volver-ver)\n' +
              '(Me paso to\' el día pensando)\n' +
              '\n' +
              'Dime qué va a pasar\n' +
              '¿Ahora, qué vamo\' a hacer?\n' +
              'Tú que no me paras de provocar\n' +
              'Y yo que no paro pensándote\n' +
              '\n' +
              'Y yo actúo como si nada\n' +
              'Pero cada vez que salgo buscándote\n' +
              'Tú me tiene\' la mente muy mal, mal\n' +
              'Et dans mon cœur, ça me fait ram-pam-pam\n' +
              '\n' +
              'Yo no quiero a otra gyal, yo te quiero a ti, siendo sincero\n' +
              'Me da igual que escriban y llamen, a ti yo te pongo primero\n' +
              'La forma en que lo mueve\', mami, me tiene en desespero\n' +
              'Esos movimiento\' salvaje\', buscando que yo quede enfermo\n' +
              '\n' +
              'Dime cuándo te vuelvo a ver, ah-eh\n' +
              'Desde esa noche, yo te desgrabé\n' +
              'Dime lo que tengo qué hacer, ah-eh\n' +
              'Para que vuelva a pasar otra ve\'\n' +
              '\n' +
              'Me tiene mal, no lo percibe\'\n' +
              'Pensando en caerle a dónde vive\'\n' +
              'No sé si mis carta\' las recibe\'\n' +
              'Tampoco sé lo que te cohíbe\'\n' +
              '\n' +
              '¿Dónde te esconde\'? ¿Dónde?\n' +
              'Mando tres texto\', ni siquiera los responde\'\n' +
              'Tené\' ojito\' de china y el pelo blonde\n' +
              'Le dije: Mami, wine up, y lo empezó a mover\n' +
              '\n' +
              'Te juro que loco me va a volver\n' +
              'Yo no sé, conmigo, qué quiere hacer\n' +
              'Me paso to\' el día pensando\n' +
              'Tú me tienes atrapa\'o en el ayer\n' +
              '\n' +
              '(¿Dónde te esconde\'? ¿Dónde?)\n' +
              '(Mando tres texto\', ni siquiera los responde\')\n' +
              '(Tené\' ojito\' de china y el pelo blonde)\n' +
              '(Le dije: Mami, wine up, y lo empezó a mover)\n' +
              '\n' +
              'Yo no quiero a otra gyal, yo te quiero a ti, siendo sincero\n' +
              'Me da igual que escriban y llamen, a ti yo te pongo primero\n' +
              'La forma en que lo mueve\', mami, me tiene en desespero\n' +
              'Esos movimiento\' salvaje\', buscando que yo quede enfermo',
          photo_video: 'songs_images/dondeEscondes.png',
          url_mp3: 'songs/Yapi - DONDE TE ESCONDES？ (Video Oficial) [BPUFjunmNtU].mp3',
          type: "sencillo",
          genre: 'Pop'
      },
      {
          name: 'Angelito',
          duration: 137,
          lyrics: 'Baby girl\n' +
              'Tengo una historia pa\' contarte, pero que yo solo sé\n' +
              'Let me know\n' +
              'Dime si hay amor de tu parte, no soy lo que conocés\n' +
              '\n' +
              'Bebé, no diré nada\n' +
              'De la ciudad, yo escapaba\n' +
              'Aquí en la isla relajada\n' +
              'Yo lo enrolaba, él me besaba\n' +
              '\n' +
              'Yo, tu angelito, me pongo a volar\n' +
              'Quemando como si fuera rasta\n' +
              'Se te notan ganas de hacerme disfrutar\n' +
              'De mirarme, tú no te cansas\n' +
              '\n' +
              'Ven, ven, ven, mai\n' +
              'Ven, nadie toca a mi gyal\n' +
              'Ella quiere un real love gangsta\n' +
              'Té algo diferent, algo especial\n' +
              'Pa\' mirarte a vos, no me cansa\n' +
              '\n' +
              'Aunque el reloj tarde\n' +
              'Tengo love para vos, mami, sos arte\n' +
              'Tiene un don, prende un blunt, ya ni comparte\n' +
              'Mami, yo tengo una historia para contarte\n' +
              'Pero es de a dos, mami, sos parte\n' +
              '\n' +
              'Con poquito, puedo enamorarte\n' +
              'Cuando te vi, tu actitud, me gustaste\n' +
              'Bailando, no evito pegarme\n' +
              'Con los demás, no logro conectarme\n' +
              '\n' +
              'Yo, tu angelito, me pongo a volar\n' +
              'Quemando como si fuera rasta\n' +
              'Se te notan ganas de hacerme disfrutar\n' +
              'De mirarme, tú no te cansas\n' +
              '\n' +
              'Ven, ven, ven, mai\n' +
              'Ven, nadie toca a mi gyal\n' +
              'Ella quiere un real love gangsta\n' +
              'Té algo diferent, algo especial (rrah)\n' +
              'Pa\' mirarte a vos, no me cansa (yeah)\n' +
              '\n' +
              'Fue perfecto desde que me probaste\n' +
              '(Hoy voy a buscarte, baby girl) yeah-yeah-yeah-yeah-yeah\n' +
              'Después de eso, querías segunda parte\n' +
              'Y yo no quería idealizarte\n' +
              '\n' +
              'Estábamo\' de party por Jamaica (yeah)\n' +
              'Todos bailan (ah)\n' +
              'Mucho whisky, muchos blone\', nada cambia\n' +
              'La gente pide ploh-ploh, pide fire, ah\n' +
              'Yo llego, te doy un beso, mami, no hay má\'\n' +
              '\n' +
              'Yo, tu angelito, me pongo a volar\n' +
              'Quemando como si fuera rasta\n' +
              'Se te notan ganas de hacerme disfrutar\n' +
              'De mirarme, tú no te cansas\n' +
              '\n' +
              'Ven, ven, ven, mai\n' +
              'Ven, nadie toca a mi gyal\n' +
              'Ella quiere un real love gangsta (soy tu real love gangsta)\n' +
              'Té algo diferent, algo especial (yes, sir)\n' +
              'Pa\' mirarte a vos, no me cansa\n' +
              '\n' +
              'TR1, ma\', Bad Gyal\n' +
              '¿Cómo dice, pai?',
          photo_video: 'songs_images/angelito.png',
          url_mp3: 'songs/Bad Gyal, Trueno - Angelito.mp3',
          type: "sencillo",
          genre: 'Pop'
      },
      // ABDEL: Completar
      {
          name: 'El Manual',
          duration: 210,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/Anuel AA - El Manual (Audio Oficial) [70RraHwxgU4].mp3',
          genre: 'Trap'
      },
      {
          name: 'Hipocrita',
          duration: 192,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/Anuel AA - Hipócrita feat. Zion (Audio) [J8gcGyYxDbo].mp3',
          genre: 'Trap'
      },
      {
          name: '47 (Remix)',
          duration: 517,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/Anuel x Nengo Flow, Los G4 - 47 (Remix) ft. Bad Bunny, Darell,  Farruko, Sinfónico, Casper [Audio] [yIpxrDfX6ek].mp3',
          genre: 'Trap'
      },
      {
          name: 'Me acostumbre',
          duration: 270,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/Arcángel, Bad Bunny - Me Acostumbré (Video Oficial) [xKKeqlBQ3Js].mp3',
          genre: 'Trap'
      },
      {
          name: 'Muriendo De Envidia',
          duration: 181,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/C. Tangana, Eliades Ochoa - Muriendo De Envidia [HfkjnAv_uRE].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'Tu Me Dejaste De Querer',
          duration: 197,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/C. Tangana, Niño de Elche, La Hungara - Tú Me Dejaste De Querer [ltmO9XQVdSg].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'Como el agua',
          duration: 224,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/Como el agua - Camarón [bKoWfso2_EY].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'MALAMANERA',
          duration: 191,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/FERNANDOCOSTA - MALAMANERA (PROD. GABRIEL ESCOBAR) ｜ VIDEOCLIP [JVUrmC8_6sA].mp3',
          genre: 'Rap'
      },
      {
          name: 'NARCOLEPSIA',
          duration: 152,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/FERNANDOCOSTA - NARCOLEPSIA (PROD. CHICHOBEATS) [OSAMpZ5A4xQ].mp3',
          genre: 'Rap'
      },
      {
          name: 'OYE',
          duration: 154,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/FERNANDOCOSTA FT DOLLAR SELMOUNI - OYE (Videoclip Oficial) [P0z55sXBW7w].mp3',
          genre: 'Rap'
      },
      {
          name: 'PAVOS REALES',
          duration: 272,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/KASE.O - 08. PAVOS REALES con HERMANO L, SHABU ONE SHANT y MCKLOPEDIA Prod. CRUDO MEANS RAW & KASE.O [AdBfUTsMhMI].mp3',
          genre: 'Rap'
      },
      {
          name: 'REPARTIENDO ARTE',
          duration: 281,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/KASE.O - REPARTIENDO ARTE (Videoclip Oficial) [1vbZMpRTT5M].mp3',
          genre: 'Rap'
      },
      {
          name: 'LA LEYENDA DEL TIEMPO',
          duration: 221,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/LA LEYENDA DEL TIEMPO - CAMARON DE LA ISLA [MrUWtOtfwDw].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'Mi Vecinita',
          duration: 183,
          lyrics: 'Letra en desarrollo...',
          photo_video: 'default-song.jpg',
          url_mp3: 'songs/Plan B - Mi Vecinita [SB8-YY2DyHI].mp3',
          genre: 'Reggaeton'
      }
    ], {});
}

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {Sequelize} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("song", null, {});
}