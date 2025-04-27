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
          type: "sencillo",
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
        url_mp3: 'songs/Bad Bunny - BAILE INoLVIDABLE.mp3',
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
          type: "sencillo",
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
          type: "sencillo",
          genre: 'Rock'
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
          genre: 'Pop'
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
          genre: 'Rock'
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
          genre: 'Reggaeton'
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
          genre: 'Reggaeton'
      },
      // ABDEL: Completar
      {
          name: 'El Manual',
          duration: 210,
          lyrics: 'El destino nos hizo conocerno\'\n' +
              'Después de ti ya nada ha sido igual\n' +
              'En el amor ya yo pasé un infierno\n' +
              'Por eso es que es difícil confiar\n' +
              'Nadie va a decirme cómo actuar\n' +
              'Pero pa\' convencerme ya tú sabe\' cómo hablar\n' +
              'Al lugar donde nadie ha podido entrar\n' +
              'Como un tatuaje, de mí no te va\' a borrar\n' +
              'Contigo fluyo y yo sé que soy tuyo\n' +
              'Pues tú me dices cosas que hacen que entierre el orgullo\n' +
              '\n' +
              'Es que tú tiene\' un manual\n' +
              'Pa\' calentar mi piel\n' +
              'Un pacto con mi alma, yo lo sé\n' +
              'Como un desastre natural\n' +
              'No te puedo detener\n' +
              'Bebé, tú me hace\' mal y me hace\' bien\n' +
              'Es que tú tiene\' un manual\n' +
              'Pa\' calentar mi piel\n' +
              'Un pacto con mi alma, yo lo sé\n' +
              'Como un desastre natural\n' +
              'No te puedo detener\n' +
              'Bebé, tú me hace\' mal y me hace\' bien\n' +
              '\n' +
              'La vida me enseñó a desconfiar\n' +
              'El karma existe, no vuelvo a fallar\n' +
              'Me puse pa\' la vuelta y yo ante\' de los 30\n' +
              'Y tú te aparece\' cuando te dejo de buscar\n' +
              'Cara\' vemo\' y corazone\' no sabemo\' \'\n' +
              'Y nunca valoramo\', baby, hasta que no\' perdemo\'\n' +
              'La vida es solo una, no la desaprovechemo\'\n' +
              'Hicimo\' una promesa y me muero si la rompemo\'\n' +
              '\n' +
              'Es que tú tiene\' un manual\n' +
              'Pa\' calentar mi piel\n' +
              'Un pacto con mi alma, yo lo sé\n' +
              'Como un desastre natural\n' +
              'No te puedo detener\n' +
              'Bebé, tú me hace\' mal y me hace\' bien\n' +
              'E-E-es que tú tiene\' un manual\n' +
              'Pa\' calentar mi piel\n' +
              'Un pacto con mi alma, yo lo sé\n' +
              'Como un desastre natural\n' +
              'No te puedo detener\n' +
              'Bebé, tú me hace\' mal y me hace\' bien\n' +
              '\n' +
              'Yo quiero ser tu prisionero\n' +
              '100 años adentro de tu cuerpo, uoh-oh\n' +
              'Tu punto debil es el cuello\n' +
              'Y si me matan, tenme en tu recuerdo, uoh-uah, yeh\n' +
              'Alcohol y playa, yeh\n' +
              'Bebé, trae la toalla porque te va\' a mojar\n' +
              'Y no me refiero al mar\n' +
              'Baby, la vista es roja, yeh-eh\n' +
              'Pero se pone verde cuando empiece\' a tomar\n' +
              'Y te empiece\' a soltar\n' +
              '\n' +
              'Es que tú tiene\' un manual\n' +
              'Pa\' calentar mi piel\n' +
              'Un pacto con mi alma, yo lo sé\n' +
              'Como un desastre natural\n' +
              'No te puedo detener\n' +
              'Bebé, tú me hace\' mal y me hace\' bien\n' +
              'E-E-es que tú tiene\' un manual\n' +
              'Pa\' calentar mi piel\n' +
              'Un pacto con mi alma, yo lo sé\n' +
              'Como un desastre natural\n' +
              'No te puedo detener\n' +
              'Bebé, tú me hace\' mal y me hace\' bien\n' +
              '\n' +
              'Oh-oh, oh-oh\n' +
              'Uah\n' +
              'Uah\n' +
              'O-Ovy On The Drums',
          photo_video: 'songs_images/manual.png',
          url_mp3: 'songs/Anuel AA - El Manual (Audio Oficial) [70RraHwxgU4].mp3',
          genre: 'Trap'
      },
      {
          name: 'Hipocrita',
          duration: 192,
          lyrics: 'Dime si hay alguien más\n' +
              'Pa’ no rogarte ni suplicarte\n' +
              'A mí me sobran de más\n' +
              'No quiero, pero yo puedo olvidarte\n' +
              '\n' +
              'Tú ere\' una hipócrita\n' +
              'Un día me ama\' y otro día me odia\'\n' +
              'Siempre una incógnita\n' +
              'Pero olvidamos cuando nos enredamo\' en las sábanas\n' +
              'Y tú eres buena, pero por dentro tienes tanta maldad\n' +
              'Tú ere\' una hipócrita\n' +
              '\n' +
              'Ooh\n' +
              'Tú ere\' una hipócrita\n' +
              'Ooh\n' +
              'Siempre una incógnita\n' +
              '\n' +
              'Tú eres mía desde los diecinueve\n' +
              'No aparentes ser alguien que no eres\n' +
              'No te alejes y mi paciencia no la pruebes\n' +
              'Solo hazme el amor mientras llueve\n' +
              '\n' +
              'Adentro de alguien más hay hipocresía\n' +
              'Bipolar de noche y de día\n' +
              'Yo te comía y el amor fluía\n' +
              'Y te llené cuando estabas vacía\n' +
              '\n' +
              'Yo nunca estuve el día que Dios dio la cobardía\n' +
              'Y si me fallas, no olvides que te la cobraría\n' +
              'Yo te dije que no compartía\n' +
              'Y nunca pensé que tú a mí me fallarías\n' +
              '\n' +
              'Tú ere\' una hipócrita\n' +
              'Un día me ama\' y otro día me odia\'\n' +
              'Siempre una incógnita\n' +
              'Pero olvidamos cuando nos enredamo\' en las sábanas\n' +
              'Y tú eres buena, pero por dentro tienes tanta maldad\n' +
              'Tú ere\' una hipócrita\n' +
              '\n' +
              'Tengo un problema de inseguridades\n' +
              'Pero pa’ mi corazón tú tienes la llave (la llave)\n' +
              'Nunca hice na’ pa’ que tú no me ames\n' +
              'Pero si me fallas, no esperes que yo te llame\n' +
              '\n' +
              'Baby\n' +
              'Recuerda cuándo te abrí\n' +
              'Y cuándo te la comí\n' +
              'Trépate encima de mí\n' +
              'Y vente pa’ mí, mami\n' +
              '\n' +
              'Mami\n' +
              'Recuerda cuándo te abrí\n' +
              'Y cuándo te la comí\n' +
              'Trépate encima de mí\n' +
              'Y vente pa’ mí, mami\n' +
              '\n' +
              'Dime si hay alguien más\n' +
              'Pa’ no rogarte ni suplicarte\n' +
              'A mí me sobran de más\n' +
              'No quiero, pero yo puedo olvidarte\n' +
              '\n' +
              'Tú ere\' una hipócrita\n' +
              'Un día me ama\' y otro día me odia\'\n' +
              'Siempre una incógnita\n' +
              'Pero olvidamo\' cuando nos enredamo\' en las sábanas\n' +
              'Y tú eres buena, pero por dentro tienes tanta maldad\n' +
              'Tú ere\' una hipócrita\n' +
              '\n' +
              'Ooh\n' +
              'Tú ere\' una hipócrita\n' +
              'Ooh\n' +
              'Siempre una incógnita\n' +
              '\n' +
              'Real hasta la muerte, baby\n' +
              'Zion, baby (Zi-diddy), uah\n' +
              'Anuel\n' +
              'Real hasta la muerte, ¿oíste, bebé?\n' +
              '\n' +
              'Es mejor estar solo\n' +
              'Que estar con alguien que tiene una máscara puesta, baby\n' +
              '\n' +
              'Mera, dime, Frabian\n' +
              'Mera, dime, Gaby Music\n' +
              'Mera, dime, Chris Jeday',
          photo_video: 'songs_images/hipocrita.png',
          url_mp3: 'songs/Anuel AA - Hipócrita feat. Zion (Audio) [J8gcGyYxDbo].mp3',
          genre: 'Trap'
      },
      {
          name: '47 (Remix)',
          duration: 517,
          lyrics: 'Mera dime Ñengo\n' +
              'Real G4 Life hasta la muerte cabrón\n' +
              'Yo le oro a Dios to\'a las noches\n' +
              'Pa\' que el día que yo me muera yo vaya pal\' cielo\n' +
              'Porque si me caigo pal\' infierno\n' +
              'Le vo\'a quitar el cliché al diablo cabrón\n' +
              'En el cielo está Dios, en el infierno está el diablo\n' +
              'Pero entremedio del cielo y el infierno estoy yo lambe bicho\n' +
              'Yo soy lo más cabrón en la isla\n' +
              'Desde Roberto Clemente cabrón\n' +
              'Tú no vistes las noticias cabrón\n' +
              'Nosotros somos intocables Ñengo\n' +
              'Mera dime Casper, mera dime Farru\n' +
              'Los illuminatis, mera dime Darell, brr\n' +
              'Anuel oiste lambe bicho\n' +
              'Trap Murdaz cabrón\n' +
              '\n' +
              'Bebé tú no me va a olvidar\n' +
              'Estos cabrones me quieren matar\n' +
              'Pero tú me brincas encima de este bicho\n' +
              'Y yo te devoro como un animal\n' +
              'Yo sé que me quieren matar\n' +
              'Pero después que yo tenga dinero\n' +
              'Pa\' comprar pistolas y rifles con balas\n' +
              'Yo voy a guerrear\n' +
              'En mi case vivimo\' en guerra, rifles militares\n' +
              'Yo ruego a Dios porque ninguno de los míos resbale\n' +
              'Aquí to\' el mundo se muere, nadie resucita\n' +
              'Cabrones quieren matarte, pa\' verte en una camisa\n' +
              'Yo me compré un 47\n' +
              '(RealG4Life)\n' +
              'Yo me compré un 47, yo me compre un 47\n' +
              'Toa\' las glocks son fuletes\n' +
              'Yo me compré un 47, yo me compre un 47\n' +
              '\n' +
              'Yo me compré un 47\n' +
              'Y tengo un Honda sin marbete\n' +
              'Color vino pa\' hacerle los mandau\' a la muerte\n' +
              '(A la muerte)\n' +
              'Ando tranquilo porque soy guerrero, yo soy ligero\n' +
              'Y voy a estrujarte si nos sacas de primero\n' +
              'Y cuando tire va morirse el que no se agache\n' +
              'De sangre correrán los baches\n' +
              'Dicen, eah diache, te fuiste de escrache\n' +
              'Llegamos nosotros, esto es pa\' hombres\n' +
              'Por eso salen con el pelo roto\n' +
              'Soy agua ardiente, el corriente\n' +
              'Que te conecta como un 47\n' +
              'Cuando manda, cuando zumba, y cuando entra\n' +
              'Te dejan por dentro, yow, con la epiléptica\n' +
              'Te suenan con los palos\n' +
              'Y te rematan con las plásticas\n' +
              '\n' +
              '(Esta es la verdadera vuelta baby)\n' +
              'Ya no estamos en cero\n' +
              'Vivimos la vida como los quileros\n' +
              'Ya no cachamos octavos\n' +
              'Cogimos la vía y los cachamo\' entero\n' +
              'Solo puta y dinero\n' +
              'La fuleta en la mano y los peines enteros\n' +
              'Los carros pal trabajo y completo vestido de negro\n' +
              'Conectao\' en las Islas Canarias\n' +
              'Los rifles me llegan desde Yugoslavia\n' +
              'Estamos crecio\' y controlamo\' el área\n' +
              'Porque ahora no tengo una cone, cabrón tengo varias\n' +
              'Nosotros estamos conectao\' pa\' allá arriba en New York\n' +
              '(Real G4 Life my nigga)\n' +
              '\n' +
              'Y los bajamos a Orlando directo cabrón pal\' calor\n' +
              'Aquí tenemos to\'a las cone\n' +
              'Dime tú quien pone la presión\n' +
              'Así como Darell bo la pone\n' +
              'Soldados en to\'a las posiciones\n' +
              'Las coltas con las extensiones\n' +
              'Ya tenemos to\'a las direcciones\n' +
              'Hijueputa es mejor que abandones\n' +
              'Con los míos me monto en to\'a las misione\n' +
              '\n' +
              'Y si quieren guerra, mandenmen\n' +
              'Pa\' que sepan cabrón no tengo miedo a morir\n' +
              'Un AK 47 y peines de refill\n' +
              'Te mueres sí o sí, después que me ponga pa\' ti\n' +
              'Y si quieren guerra, mandenmen\n' +
              'Pa\' que sepan cabrón no tengo miedo a morir\n' +
              'Un AK 47 y peines de refill\n' +
              'Te mueres sí o sí, después que me ponga pa\' ti\n' +
              '\n' +
              'Yo me compra un 47 y una 27\n' +
              'Por si me quedo sin balas o se me tranca el fulete\n' +
              'Pa\' borrarte la cara cuando el botón apriete\n' +
              'Como grita esta ostia, pa\' guerrear aquí hay billete\n' +
              '\n' +
              'Quieren roncarme y no pueden\n' +
              'Quieren matarme y no pueden\n' +
              'Pero si fallas tirando, en el mismo intento to\'itos se mueren\n' +
              'To\' pa\' mi tienen manos, pero siempre les gano\n' +
              'Si los pillo por ahí dormio\'\n' +
              'Le pago a una puta y los seteamos\n' +
              'Y ahí te secuestramos, te capturamos, picamo\' el philly\n' +
              'Tenemos las botella\' en mano en el V.I. p\n' +
              'Real G como Ñengo y Darell\n' +
              'Real hasta la muerte siempre, Free Anuel\n' +
              '\n' +
              'En mi case vivimo\' en guerra, rifles militares\n' +
              'Yo le ruego a Dios\n' +
              'Porque ninguno de los míos ninguno se me vire\n' +
              'Aquí to\' el mundo se muere, nadie resucita\n' +
              'Cabrones quieren matarte, pa\' verte en una camisa\n' +
              'Yo me compré un 47 (Brrr)\n' +
              'Yo me compré un 47\n' +
              'Yo me compré un 47, yo me compré un 47\n' +
              'Toa\' las glocks son fuletes\n' +
              'Yo me compré un 47\n' +
              '\n' +
              'Que yo estoy ready pa\' ti, tú sabes quién yo soy\n' +
              'Yo ando con Farru en un Rolls-Royce\n' +
              'Los juguetes y no son de KB toys\n' +
              'Te pillamos y te los damos\n' +
              'Antes de que a tu mujer le envíe un voice\n' +
              'Como Hector con el combo de setenta\n' +
              'Yo soy lo más cabrón que nació pa\' los noventa\n' +
              'Me compré un 47 y una 40\n' +
              'Yo cargo un rosario bendecido\n' +
              'Y con to\' eso el diablo me tienta\n' +
              'Ma\' yo estoy regao\' como los Me-mets\n' +
              'Te enterramos y después a tu mujer, yo sé lo me-me\n' +
              'Yo sé que estoy mal, que el cielo me condene\n' +
              'Pero esto es real hasta que en el infierno me queme\n' +
              'Hoy las retro 11 me las customizo y las pinto de roja\n' +
              'Con to\'a la sangre tuya que caiga en el piso\n' +
              'En guerra pisada nunca muere gente\n' +
              'Por eso es que yo no aviso\n' +
              'Mi palabra pesa yo no me retracto\n' +
              'Yo soy la nueva religión la baby quiere un pacto\n' +
              'Con demonios yo no hablo, pero tengo sus contacto\'\n' +
              'Marco el 6-6-6 y en el pecho sienten el impacto\n' +
              '\n' +
              'Recuerdo cuando no tenía un carajo\n' +
              'Que las cosas estaban malas\n' +
              'No tenía ni pa\' un octavo\n' +
              'Gracias a Dios las cosas cambiaron\n' +
              'Y ahora quieren de este bicho\n' +
              'To\' esas putas que picharon\n' +
              'Me compré un 47 y le puse un botón\n' +
              'Las Glock son to\'a fuletes, carbon 15 con el caracol\n' +
              'Ruegale a Dios que no te pille con el de tambor\n' +
              'Si así lo prendo va a sentir el diablo, el calentón\n' +
              '\n' +
              'Mera dime Casper, los intocables, los illuminatis\n' +
              'Yo estoy preso, yo no estoy muerto cabrón\n' +
              'Pero, ¿y si yo salgo mañana?, jajá, brr\n' +
              'Nosotros somos los que tenemos\n' +
              'La puta calle prendía en fuego oíste cabron\n' +
              'Nosotros somos los verdaderos hijueputas\n' +
              'Me wa cagar en la madre\n' +
              '\n' +
              'Fuletazo con la 23, Jordan en el \'93\n' +
              'Me meto pa\' tu canto, el kiosko te tranco\n' +
              'Y le cara te la hago puré\n' +
              'Tengo al diablo en la casa \'e cristal\n' +
              '27, no vamo\' a chotear\n' +
              'Me compré un 47 lo hize fulete\n' +
              'Hijueputa quien quiere guerrear\n' +
              'Te mandamos caliente, 21 pal pecho Roberto Clemente\n' +
              'Te voy a prender el timbal en la cara cabrón\n' +
              'A nombre de Tito Puentes\n' +
              'Se dejaron ver\n' +
              'Ahora estos cabrones cantan como Anuel\n' +
              'Se dejaron ver\n' +
              'Subieron los tuyos a cuenta de lo de el\n' +
              '\n' +
              'En mi case vivimo\' en guerra, rifles militares\n' +
              'Yo ruego a Dios porque ninguno de los míos resbale\n' +
              'Aquí to\' el mundo se muere, nadie resucita\n' +
              'Cabrones quieren matarte, pa\' verte en una camisa\n' +
              'Yo me compré un 47\n' +
              'Yo me compré un 47, yo me compre un 47\n' +
              'Toa\' las glocks son fuletes\n' +
              'Yo me compré un 47, yo me compre un 47\n' +
              '\n' +
              'Yo a veces siento que la muerte está persiguiéndome\n' +
              'Pero yo no wa correr\n' +
              'Las cortas, los palos, los peines\n' +
              'Yo me compré 4 tambores ayer\n' +
              'Ustedes to\' me traicionaron\n' +
              'Como a Jehová lo traicionó Lucifer (Amén)\n' +
              'Y yo nunca wa cambiar la lealtad de un hermano por una mujer\n' +
              '\n' +
              'Mi hijo va a comer, y con el R fulete te vamos a cocer\n' +
              'Las balas van a llover\n' +
              'Pero yo tengo que ver a mi hijo crecer\n' +
              'Yo no me wa esconder\n' +
              'Si yo no soy intocable, pues traten a ver\n' +
              'El AK te va a morder\n' +
              'Los muertos te están esperando, tú te va a caer\n' +
              '\n' +
              'Yo nunca me asusté\n' +
              'Ellos me fantasmearon y se los acosté\n' +
              'Les mandé y me bajé\n' +
              'Y el palo en el pecho yo se lo espeté\n' +
              'Lo resucité y le prendí mi fulete, volví y lo mate\n' +
              'La vida se la quité\n' +
              'Y tirau\' como un zombie yo lo retraté\n' +
              '\n' +
              'En mi case vivimo\' en guerra, rifles militares\n' +
              'Yo ruego a Dios porque ninguno de los míos resbale\n' +
              'Aquí to\' el mundo se muere, nadie resucita\n' +
              'Cabrones quieren matarte, pa\' verte en una camisa\n' +
              'Yo me compré un 47 (Brrr)\n' +
              'Yo me compré un 47, yo me compré un 47\n' +
              'Toa\' las glocks son fuletes\n' +
              'Yo me compré un 47, yo me compré un 47\n' +
              '\n' +
              'Brrr, Anuel, Real hasta la muerte, oíste cabrón\n' +
              'Mera dime Ñengo, RealG4Life hasta que me maten\n' +
              'Me wa cagar en la madre el diablo\n' +
              'Trap Murdaz\n' +
              'Lil Geniuz, Sinfonico, Onyx\n' +
              'The real trap nigga, real gangsta shit\n' +
              'Darell\n' +
              'Brrr, Free Anuel\n' +
              'Real hasta la muerte hijueputa',
          photo_video: 'songs_images/47.png',
          url_mp3: 'songs/Anuel x Nengo Flow, Los G4 - 47 (Remix) ft. Bad Bunny, Darell,  Farruko, Sinfónico, Casper [Audio] [yIpxrDfX6ek].mp3',
          genre: 'Trap'
      },
      {
          name: 'Me acostumbre',
          duration: 270,
          lyrics: 'Ey Yo!\n' +
              'Austin Baby\n' +
              'Luian\n' +
              'Mambo Kings\n' +
              'Let’s Go\n' +
              '\n' +
              '[Arcángel]\n' +
              'Hoy me levanté del lao\' izquierdo de la cama\n' +
              '(De la cama, de la cama)\n' +
              'No quiero dramas y por eso rolo un philisito\'e marihuana\n' +
              'Pal de miles me busqué\n' +
              'Joseando por la mañana\n' +
              'Logré comprarme mi cubana\n' +
              'Me compré mi carro y mi mansión en la nación americana\n' +
              'Nací pa\' ser millo, no quiero fama\n' +
              '\n' +
              '[Bad Bunny]\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A siempre ganar como el 23\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A callarle la boca al que no me cree\n' +
              '\n' +
              '[Arcángel]\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A no importarme el precio de lo que compré\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              '\n' +
              '[Bad Bunny]\n' +
              'A clavarme toda\' esta\' puta\' de tres en tres\n' +
              '\n' +
              '[Arcángel]\n' +
              'Dejarme contarte como yo lo hacía hace 15 años atrás\n' +
              'Me sentaba con Geezy donde cabe el kilo hasta que no quedaba más\n' +
              'Luego las cosas cambiaron\n' +
              'Y nos pusimos a cantar\n' +
              'El mundo viajar, la funda a llegar\n' +
              'Ya no había que bregar (no)\n' +
              'Pero si tu quiere\' que te hable de droga con gusto menor yo te enseño\n' +
              'Conozco\'los capo\' y ninguno son sapos, dominican\' puertorriqueño\n' +
              'No me llevo mucho con los empleados\n' +
              '(¿Por qué?)\n' +
              'Por la sencilla razón de que me crié con los dueños\n' +
              'Un día un pana mío un par de millones de él me puso a contar\n' +
              'Duré to\'a la noche contando billetes y la mano me empezó a picar\n' +
              'Pasaron las horas y yo estaba lejos de todavía terminar\n' +
              'Pa\' mi que eso fue una señal\n' +
              'Que luego me iba a tocar\n' +
              '\n' +
              '[Bad Bunny]\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A siempre ganar como el 23\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A callarle la boca al que no me cree\n' +
              '\n' +
              '[Arcángel]\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A no importarme el precio de lo que compré\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A clavarme estas puta de tres en tres\n' +
              '\n' +
              '[Bad Bunny]\n' +
              'Me acostumbré a que el envidioso siempre me traicione\n' +
              'Y que por las botas mi nombre mencione\n' +
              '(Cabrón sacate mi nombre de la boca)\n' +
              'Yo siempre picheo en la mía tranquilo\n' +
              'Díselo Luian que te engancho este rabo de oro en el cuello\n' +
              'Y ahora paso un kilo\n' +
              'Las boobies siempre estelar\n' +
              'Si no me crees pregunta en el banco popular\n' +
              'Los topos de kush nunca dan regular\n' +
              'Este es high star game y tú no vas a jugar\n' +
              'Dando más palos que David Ortiz\n' +
              'Ando con los viles loco dentro le tiro aquís\n' +
              'Me acostumbré a modelos con flow de París\n' +
              'Él me jodió Donald Trump\n' +
              'Aceite en el vap y ya no fuman blunt\n' +
              'Lo pongo a danzar kuduro como don\n' +
              'Me tocan y adelante el armaggedon\n' +
              'Gracias a Dios por el don\n' +
              'Desde que firmé to\'s quieren coger\n' +
              'Pon tus balas movía\'l tapón\n' +
              'Te puede\' acercártele haciendo el three sixty\n' +
              'Y te damos tapón\n' +
              '\n' +
              '[Arcángel]\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A no importarme el precio de lo que compré\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A clavarme estas puta de tres en tres\n' +
              '\n' +
              '[Bad Bunny]\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A siempre ganar como el 23\n' +
              'Ya me acostumbré\n' +
              'Ya me acostumbré\n' +
              'A callarle la boca al que no me cree',
          photo_video: 'songs_images/meAcostumbre.png',
          url_mp3: 'songs/Arcángel, Bad Bunny - Me Acostumbré (Video Oficial) [xKKeqlBQ3Js].mp3',
          genre: 'Trap'
      },
      {
          name: 'Muriendo De Envidia',
          duration: 181,
          lyrics: 'Se están muriendo de envidia\n' +
              'Las flores, las estrellas y la mar bella\n' +
              'Porque Dios te hizo, Lola\n' +
              'Más bonita que a todas ellas\n' +
              'Se están muriendo de envidia\n' +
              'Las flores, las estrellas y la mar bella\n' +
              'Porque Dios te hizo, Lola\n' +
              'Más bonita que a todas ellas\n' +
              '\n' +
              'Si un día, Dios no lo quiera, pierdo los cuartos y mi talento\n' +
              'Le juro a to’s los presentes que voy a morirme\n' +
              'Igual de contento\n' +
              'Si un día Dios me arrebata to’ lo que hasta ahora me ha regala’o\n' +
              'Nada me va a importar\n' +
              'Mientras tú despiertes aquí a mi la’o\n' +
              '\n' +
              'Nada me va a importar\n' +
              'Mientras tú despiertes aquí a mi la’o (¿cómo?)\n' +
              'Nada me va a importar\n' +
              'Mientras tú despiertes aquí a mi la’o\n' +
              'Nada me va a importar\n' +
              'Mientras tú despiertes\n' +
              '\n' +
              'Se están muriendo de envidia\n' +
              'Las flores, las estrellas y la mar bella\n' +
              'Porque Dios te hizo, Lola\n' +
              'Más bonita que a todas ellas\n' +
              '\n' +
              '¡El Madrileño!\n' +
              'Se están muriendo de envidia (¿cómo, cómo?)\n' +
              'Quédate aquí esta noche, no vengas mañana\n' +
              'Porque no encuentras al Tangana\n' +
              '\n' +
              'Con tu piquete Kardashian\n' +
              'Toditas las gatas te envidian\n' +
              'Se están muriendo, bebé\n' +
              'Se están muriendo de envidia (¿cómo es?)\n' +
              'Oye cómo suena\n' +
              'Muriendo de envidia (eso)\n' +
              'Muriendo de envidia (qué libre ‘ta)\n' +
              'Muriendo de envidia (anda)\n' +
              'Muriendo de envidia (ellos no)\n' +
              'Muriendo de envidia',
          photo_video: 'songs_images/muriendoEnvidia.png',
          url_mp3: 'songs/C. Tangana, Eliades Ochoa - Muriendo De Envidia [HfkjnAv_uRE].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'Tu Me Dejaste De Querer',
          duration: 197,
          lyrics: 'Tú me dejaste de querer cuando te necesitaba\n' +
              'Cuando más falta hacía, tú me diste la espalda (vamos allá)\n' +
              'Tú me dejaste de querer cuando menos lo esperaba\n' +
              'Cuando más te quería, se te fueron las ganas (¡toma que toma!)\n' +
              '\n' +
              '(¡Dale!)\n' +
              '(¡Aire!)\n' +
              '(¡Toma que toma! ¡Vamos allá, allá! ¡Ala!)\n' +
              '(¡Oye, El Madrileño! ¡Manda!)\n' +
              '(¡Que toma, que toma, que toma! ¡Ese Pucho!)\n' +
              '(¡Ala!)\n' +
              '(Venga ya, ¿te la sabes? ¡Dale!)\n' +
              '\n' +
              'Yo me creía que еra el más cabrón\n' +
              'Pero me еstoy notando el corazón (dale, dale)\n' +
              'Estás apretando mucho, mami, déjalo (eso e\')\n' +
              'Si quieres, te doy la razón (¡ala!)\n' +
              '\n' +
              'Yo lo único que quiero es largarme de aquí (¡oh!)\n' +
              'Me da igual dónde, puedes elegir (¡dale!)\n' +
              'Algún día, dentro de poco, me voy a arrepentir\n' +
              'De haberte confesa\'o lo que me haces sufrir (toma que toma)\n' +
              '\n' +
              'Tú me dejaste de querer cuando menos lo esperaba (dale)\n' +
              'Cuando más te quería (madrileño), se te fueron las ganas\n' +
              '\n' +
              'De punta en blanco pa\' ir a tu fiesta\n' +
              'Y he pasa\'o tres días con la misma ropa puesta\n' +
              'Loco por ti, perdiendo apuestas\n' +
              'Dime en quién piensas cuando te acuestas\n' +
              '\n' +
              'Porque yo pienso en ti, son ilusiones\n' +
              'Yo pienso en ti (vamos allá), son ilusiones\n' +
              'Porque yo pienso en ti, son ilusiones\n' +
              'Yo pienso en ti, son ilusiones (¡ala!)\n' +
              '\n' +
              'Tú me dejaste de querer cuando te necesitaba (vamos allá los dos)\n' +
              'Cuando más falta hacía (dímelo, bonito), tú me diste la espalda (dímelo de verdad)\n' +
              'Tú me dejaste de querer cuando menos lo esperaba\n' +
              'Cuando más te quería, se te fueron las ganas\n' +
              '\n' +
              '(¡Toma que toma que toma!)\n' +
              '(¡Ala!)\n' +
              '(¡Eso es! Vaya, dale)\n' +
              '(Ah, ¡ese Pucho! ¡Toma que toma que toma!)\n' +
              '(¡Ey! ¡Pom, pom, pom! ¡Ala, dale!)\n' +
              '(Vaya, vaya; ¡dale, dale!)\n' +
              '(Venga ya, ¡venga ya, Tangana!)\n' +
              '(¡Toma que toma!)\n' +
              '(Dale, dale los que saben, dale)',
          photo_video: 'songs_images/dejasteQuerer.png',
          url_mp3: 'songs/C. Tangana, Niño de Elche, La Hungara - Tú Me Dejaste De Querer [ltmO9XQVdSg].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'Como el agua',
          duration: 224,
          lyrics: 'Limpiaba el agua del río\n' +
              'Como la estrella de la mañana\n' +
              'Limpiaba el cariño mío\n' +
              'Al manantial de tu fuente clara\n' +
              '\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              '\n' +
              'Como el agua clara\n' +
              'Que abaja del monte\n' +
              'Así quiero verte\n' +
              'De día y de noche\n' +
              '\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              '\n' +
              'Yo te eche mi brazo al hombro\n' +
              'Y un brillo de luz de Luna\n' +
              'Iluminaba tus ojos\n' +
              '\n' +
              'De ti deseo yo to el calor\n' +
              'Pa ti mi cuerpo si lo quieres tu\n' +
              'Fuego en la sangre nos corre a los dos\n' +
              '\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              '\n' +
              'Si tus ojillos fueran\n' +
              'Aceitunitas verdes\n' +
              'Toa la noche estaria\n' +
              'Muele que muele, muele que muele\n' +
              'Toa la noche estaria\n' +
              'Muele que muele, muele que muele, muele que muele\n' +
              '\n' +
              'Luz del alma mía divina\n' +
              'Que a mí me alumbra mi corazón\n' +
              'Mi cuerpo alegre camina\n' +
              'Porque de ti lleva la ilusión\n' +
              '\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              '\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              '\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              'Como el agua\n' +
              '\n' +
              'NaNa!',
          photo_video: 'songs_images/comoAgua.png',
          url_mp3: 'songs/Como el agua - Camarón [bKoWfso2_EY].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'MALAMANERA',
          duration: 191,
          lyrics: 'El roncito sabor madera, Fernandito Malamanera\n' +
              'Salgo del metro y me enciendo una palmera\n' +
              'Qué bonita es la mañana cuando hay alguien que te espera\n' +
              '\n' +
              'Gitana canastera con ojos de pantera\n' +
              'Nunca está en la casa, siempre esta por fuera\n' +
              'Quién quisiera, quién pudiera\n' +
              'Caerse en esa jaula y dejar que le mordieran\n' +
              '\n' +
              'No encuentro a campanilla, buscarla en mi cartera\n' +
              'Ratas de alcantarilla, predators riñonera\n' +
              'No te lo repito, si te preguntan los chivatos\n' +
              'No comprendo, non capito\n' +
              '\n' +
              'No parlo el españolo, tú te haces el mongolo\n' +
              'Recoge tu macuto, no pierdas ni un minuto\n' +
              'Este beat es una MILF, la reviento como un puto\n' +
              'La pongo a cuatro patas, yo lo hago modo bruto\n' +
              '\n' +
              'Sara, tu porro no me tira\n' +
              'Todo es una mentira, como Amancio y Zara\n' +
              'Ahí estaba, esperando a que lo hiciera\n' +
              'Un cuchillo entre las manos y la cara demacrada\n' +
              '\n' +
              'Bendita democracia, fuck\n' +
              'Spain is gangsta shit, we are politics mafia\n' +
              'Mente sucia, funerales y desgracias\n' +
              'No me des la mano, no me des las gracias\n' +
              '\n' +
              'De pico pardo, mi adicción a los petardos\n' +
              'Y a los dardos que tú me lanzabas\n' +
              'Muerto en vida, volvería a a tropezarme\n' +
              'Y a levantarme y tú ni te enterarías\n' +
              '\n' +
              'Mantenlo crudo, puro y sin tonterías\n' +
              'Lo tuyo es parafina, lo mío jia-jia\n' +
              'Tu chari canta pop, la mía por bulería\n' +
              'Con Gabriel Escobar, primo, más te gustaría\n' +
              '\n' +
              'Ey you, qué pasa chico, qué pasa tron\n' +
              'Camarera con perico, discoteca, Megatron\n' +
              'El niño chico ha tumbado al gigantón\n' +
              'El musculitos no salva del palizón\n' +
              '\n' +
              'Eso está claro, no voy del palo mi niño malo\n' +
              'Tu historieta de Dalí la pinto con un Pilot\n' +
              'Saben que me lo pulo, que me lo follo a pelo\n' +
              'El primero de la isla, Colón, Marco Polo\n' +
              '\n' +
              'No cojas caramelos de desconocidos\n' +
              'Que te huelen el pelo, te siguen con sigilo\n' +
              'MDMA cocinado por abuelos\n' +
              'Esos raperos están nerviosos, estoy cogiendo vuelo\n' +
              '\n' +
              'Créetelo, que empezamos desde cero\n' +
              'Asúmelo, que te quise y que te quiero\n' +
              'Entiéndelo, yo siempre seré el primero\n' +
              'En cogerte las estrellas desde el cielo\n' +
              '\n' +
              'Estrellarlas contra el suelo, vuelo, vuelo que vuelo\n' +
              'Fernando, eres un chulo como era tu abuelo\n' +
              'Bueno, por lo menos me lo creo\n' +
              'Las señoras de mi barrio dicen: Suena muy feo\'\n' +
              '\n' +
              'Qué pasa\n' +
              'Fernando Costa 2017 se ha colao\' en tu casa',
          photo_video: 'songs_images/malamanera.png',
          url_mp3: 'songs/FERNANDOCOSTA - MALAMANERA (PROD. GABRIEL ESCOBAR) ｜ VIDEOCLIP [JVUrmC8_6sA].mp3',
          genre: 'Rap'
      },
      {
          name: 'NARCOLEPSIA',
          duration: 152,
          lyrics: 'Narcolepsia, resaca y anestesia\n' +
              'Estamos en todos lados como dios en la Iglesia\n' +
              'Drogas de diseño por las islas de Grecia\n' +
              'Fumando amnesia, sarafaz Indonesia\n' +
              'Leyendo el delirio en el libro, necesito colirio\n' +
              'Mi voz en la radio, pal\' barrio\n' +
              'Un trozo de valium, un poco de Larios\n' +
              'Pa\' mis niños macarios, salarios, precarios\n' +
              'Quemando rueda, a jayou y en tercera\n' +
              'La vida me la juega, Fernandito se la cuela\n' +
              'Haciendo la quiniela para no salir en la esquela\n' +
              'Te lo canto más alto, más claro, acapella\n' +
              'Voy crazy, como Kevin Spacey\n' +
              'Soy spicy, como los ritmos de Kase\n' +
              'Pon el play si, quiere que comience mi playlist\n' +
              'Todas esas putas que se llaman Stacy\n' +
              'Modo easy, papas risi, AC/DC\n' +
              'Te han quitao\' las Yeezy, soy un misíl en bici\n' +
              'Tu rap si que está en crisis, gastroenteritis\n' +
              'Ando por tu street cómo por mi city\n' +
              'Vacileo, eso es lo que veo cuándo voy con mis niños guapos\n' +
              'Que si quieren se ponen muy feos\n' +
              'Marroneos, te cabreas, me cabreo, te noqueo\n' +
              'En las calles de mi isla, meneo meneo\n' +
              'Caralho, no se permite ni un fallo\n' +
              'Un saludo desde acá para Caraca\' y Medallo\n' +
              'A mí me escuchan en la calle, a ti los lacayos\n' +
              'Te como tranquilito como una tapa callo\'\n' +
              'Caralho, no se permite ni un fallo\n' +
              'Un saludo desde acá para Caraca\' y Medallo\n' +
              'A mí me escuchan los papás y los papagallos\n' +
              'Te como tranquilito como una tapa callo\'\n' +
              'Ella está sola de colocón\n' +
              'Los porteros la controlan porque vende drug\n' +
              'Le gusta el roncola y el vacilón\n' +
              'Le flipa Marco Carola y el musicón\n' +
              'Se despertó de hangover en un Range Rover\n' +
              'Estamos en el gang y tu estás game over\n' +
              'Está modo destroyer y a tope de power\n' +
              'Me solté dos temas y me hiciste la cover\n' +
              'See upcoming rap shows\n' +
              'Get tickets for your favorite artists\n' +
              'You might also like\n' +
              'MalaManera\n' +
              'FERNANDOCOSTA\n' +
              'Reproches\n' +
              'Ayax y Prok\n' +
              'Nightmares\n' +
              'Delaossa\n' +
              '[Estribillo]\n' +
              'Bebiendo Henny Henny Henny Henny Henny\n' +
              'Liando honey honey honey honey honey\n' +
              'Tu rap, so funny funny funny\n' +
              'One for the show y two for the money\n' +
              '\n' +
              'Bebiendo Henny Henny Henny Henny Henny\n' +
              'Liando honey honey honey honey honey\n' +
              'Tu rap, so funny funny funny\n' +
              'One for the show y two for the money',
          photo_video: 'songs_images/narcolepsia.png',
          url_mp3: 'songs/FERNANDOCOSTA - NARCOLEPSIA (PROD. CHICHOBEATS) [OSAMpZ5A4xQ].mp3',
          genre: 'Rap'
      },
      {
          name: 'OYE',
          duration: 154,
          lyrics: 'Los niño\'\n' +
              'Chacho, -cho, -cho\n' +
              'Díselo, Dollar\n' +
              'Tiritirititan, tiritirititan, eh-eh, ey (yao\', yao\')\n' +
              '\n' +
              'Oye, ¿qué te ha pasa\'o?\n' +
              'Que me han conta\'o que vas de capo y que te han roba\'o\n' +
              'Que to\' lo que tú tienes te lo han presta\'o\n' +
              'Así que cállate la boca que te he pilla\'o\n' +
              '\n' +
              'Oye, ¿qué te ha pasa\'o?\n' +
              'Que me han conta\'o que vas de capo y que te han roba\'o\n' +
              'Que to\' lo que tú tienes te lo han presta\'o\n' +
              'Así que cállate la boca que te he pilla\'o\n' +
              '\n' +
              'Chacho, tеn cuida\'o\n' +
              'Que el niño sale pa\' la callе colora\'o\n' +
              'Los vecino\' le preguntan: ¿Dónde has esta\'o?\n' +
              'Me han comenta\'o que ha llega\'o hoy una carta del juzga\'o\n' +
              '\n' +
              'FERNANDO, échale ron, maldito\' maleante\' de cartón\n' +
              'Se nota que no tienen ilusión\n' +
              'Esto huele raro, esto huele a calentón\n' +
              'Bienvenidos a mi barrio, salam aleikum\n' +
              '\n' +
              'Uh, ah, pisando fuerte\n' +
              'El niño de la calle no le teme a la muerte\n' +
              'Hablando claro, mirando al frente\n' +
              'Aquí no hemos cambiado, somos los de siempre\n' +
              '\n' +
              'Yo\', y si me miras yo a ti te miro\n' +
              'Cada cual tiene su destino\n' +
              'Ay, no te metas en mi camino\n' +
              'Porque el último se fue por donde vino\n' +
              '\n' +
              'Oye, ¿qué te ha pasa\'o?\n' +
              'Que me han conta\'o que vas de capo y que te han roba\'o\n' +
              'Que to\' lo que tú tienes te lo han presta\'o\n' +
              'Así que cállate la boca que te he pilla\'o\n' +
              '\n' +
              'Oye, ¿qué te ha pasa\'o?\n' +
              'Que me han conta\'o que vas de capo y que te han roba\'o\n' +
              'Que to\' lo que tú tienes te lo han presta\'o\n' +
              'Así que cállate la boca que te he pilla\'o\n' +
              '\n' +
              'FERNANDO, que suenan las sirena\'\n' +
              '¿Cuánta\' vece\' yo te he dicho que no te meta\' en problema\'?\n' +
              'Dollar, echa a correr\n' +
              'Que lo\' moro\' con lo\' mosso\' no se llevan muy bien\n' +
              '\n' +
              'Yo estoy con los colombiano\', dominicano\', rumano\'\n' +
              'Y me bajo pa\' la plaza a liarme un par de gramo\'\n' +
              'Chillan los niño\', chillan mis hermano\'\n' +
              'Vivan los moro\', vivan mis gitano\'\n' +
              '\n' +
              'Agua, se han chiva\'o (joder)\n' +
              'Vienen a por ti porque te han delata\'o\n' +
              'Karma, y el que te ha toca\'o\n' +
              'Y eso es lo que pasa por hablar demasia\'o\n' +
              '\n' +
              'Y así que dale\n' +
              'Que el ritmo no pare\n' +
              'La voz de las calle\'\n' +
              'Y el combo perfecto repartiéndote este tumba\'o\n' +
              '\n' +
              'Oye, ¿qué te ha pasa\'o?\n' +
              'Que me han conta\'o que vas de capo y que te han roba\'o\n' +
              'Que to\' lo que tú tienes te lo han presta\'o\n' +
              'Así que cállate la boca que te he pilla\'o\n' +
              '\n' +
              'Oye, ¿qué te ha pasa\'o?\n' +
              'Que me han conta\'o que vas de capo y que te han roba\'o\n' +
              'Que to\' lo que tú tienes te lo han presta\'o\n' +
              'Así que cállate la boca que te he pilla\'o',
          photo_video: 'songs_images/oye.png',
          url_mp3: 'songs/FERNANDOCOSTA FT DOLLAR SELMOUNI - OYE (Videoclip Oficial) [P0z55sXBW7w].mp3',
          genre: 'Rap'
      },
      {
          name: 'PAVOS REALES',
          duration: 272,
          lyrics: 'Tú no tienes nada que hacer\n' +
              'Ha venido el asesino fino que te mata de placer\n' +
              'Abre paso, llega Kase.O\n' +
              'Decir mi propio nombre me produce vértigo\n' +
              '\n' +
              '¡Oh ooh! Recupérate del susto\n' +
              'Y dame los honores de César Augusto\n' +
              'Sueno bien entre los jefes, hago lo que quiero\n' +
              'Me siento en este ritmo como un jeque petrolero\n' +
              '\n' +
              'Vine haciendo surf en un rayo de luz, ups\n' +
              'Lo siento, ni con zoom puedes ver al gurú, surcando el cielo\n' +
              'Así es como se hace una canción\n' +
              'Pregúntanos si quieres aprender, te damos una lección\n' +
              '\n' +
              'Chico, si eres listo no me intentes joder\n' +
              'Hasta ahora solo has visto un poco de mi poder\n' +
              'Así que no quieras saber con quién estoy relacionado\n' +
              'Dame mi respect, a mí y a mi conglomerado\n' +
              '\n' +
              'Oh, cuando Javi llega al puto microphone\n' +
              'Corre la voz y toda la gente se acerca\n' +
              'Al super-estilo suave como el algodón\n' +
              'Prepara tus oídos para la fiesta\n' +
              '\n' +
              'Shabu te hace levitar con su voz angelical\n' +
              'Kase.O tiene el flow más cabrón\n' +
              'Y el del ritmo tropical es McKlopedia\n' +
              'Este que se se viene ¡Es el Ele! ¡Dale man!\n' +
              '\n' +
              'Esto suena en sus cabezas, solo sueñan con grandeza\n' +
              'Sigilosamente entra y destruye su fortaleza\n' +
              'Simple y minimalista es esta pista\n' +
              'Para mí otra conquista\n' +
              '\n' +
              'Suelen meterme en la lista\n' +
              'El hombre orquesta, el gran liricista\n' +
              'Lo pillo y me lo empollo, me los follo si no hay fuelle\n' +
              'Te agarro por el cuello como a pareja de bueyes\n' +
              '\n' +
              'Comencé muy pronto, cuando en Madrid ya firmaba el Muelle\n' +
              'Ya de pequeño tenía el campeón son un fly, un flow de reyes\n' +
              'Puede que te desmayen, puede que te desmelenen\n' +
              'Puede que te entre de repente dolor en las sienes\n' +
              '\n' +
              'Pero en lo que es seguro es que cuando llego y me subo\n' +
              'solo llegas a mi suela y eso en el fondo te duele\n' +
              'Oros en vela, los que hieren me la pelan\n' +
              '\n' +
              'Se les ve venir de lejos, muchos son unos parguela\n' +
              'Todos quieren su parcela, todos quieren su chalet\n' +
              'Quieren joder con nosotros pero no tienen caché\n' +
              '\n' +
              'Shabu, ¡hazte un cacho guapo, co!\n' +
              '\n' +
              'Hoy me llama Ibarra pa\' escupir unas barras\n' +
              'Yo como hago 8 porque sois unas guarras\n' +
              'Yo y mis pepinos, tú y tu huerto ¿Quién barras?\n' +
              'Con marranas, así el sembrao no agarra\n' +
              '\n' +
              'Dices que los números en vídeos te abalan\n' +
              'Miles de millones tienen gatos que cagan\n' +
              'Crees que eres un máquina si un par de chavalas\n' +
              'Te alaban y con tu miembro te empalas\n' +
              '\n' +
              'Los otros ensayan, nosotros en Zion\n' +
              'Mi conglomerao\' no falla\n' +
              'Y somos like iron, sí, como el hierro\n' +
              'Pues antes que doblarnos nos partimos en dos\n' +
              '\n' +
              'Anoche soñé que yo era un cocodrilo\n' +
              'Bajaba con sigilo por el cauce del Nilo\n' +
              'Entonces el faraón se arrimó muy al filo\n' +
              'Al puto Akenatón me lo comí con estilo\n' +
              'Nosotros por cielo y tierra, vosotros en el limbo\n' +
              'Nosotros el pan de leña, vosotros el pan Bimbo\n' +
              'Vosotros bailáis bingo, nosotros más como rimbo\n' +
              'Malditos del Hip Hop, solo rimas y ritmos\n' +
              '\n' +
              'Soy Tetsuo cuando agarro mic\'s\n' +
              'Más embrujo que el de Panoramix\n' +
              'Melodies and Tricks como Punchin\' Kids\n' +
              'Mi flujo de Lujo como Kung-Fu Fist\n' +
              'Hago un nudo en Larynx, mi combo de Lyrics\n' +
              'Esto es Swag Metaphysics\n' +
              'Na\' más que haciendo Aerobic se los mando a Twin Peaks\n' +
              '\n' +
              'Materializo en ipso facto aquello que yo creo y pienso\n' +
              'Futuro oscuro le auguro a los que quieran ser adversos\n' +
              'Advierto desde lo lejos, su complejo, su tropiezo\n' +
              '\n' +
              'Pienso que en vez de los sesos, lo que tienen es un queso\n' +
              'Tanto que hablas, te llenas la boca pa\' hacer eso\n' +
              'Tanta mierda, van cayendo por su propio peso\n' +
              'Quién son los que mantienen el progreso\n' +
              'Ninguno que quiera va a salir ileso\n' +
              'Te asome del peso pa\' dejarte tieso\n' +
              '\n' +
              'En este proceso peso por mi paso\n' +
              'Masoquista, quítate o llevas coñazo\n' +
              'Liricistas, quedan pocos, son escasos\n' +
              'Oportunistas, que van camino al fracaso\n' +
              'De los egoístas recogen los pedazos\n' +
              '\n' +
              'No hay tiempo, descanso ni plazo\n' +
              'Me desplazo que te alcanzo y te paso\n' +
              'Caso, raperos quemao\'s por el falso\n' +
              'Los amordazo llevando el mazo\n' +
              '\n' +
              'Gloria al bravo pueblo que el yugo lanzó, quién como yo\n' +
              'Junto a Kase.O, asesino del micrófono\n' +
              'Váyase con Dios, el que no vio no preguntó\n' +
              'Aquí a cada ladrón se juzga por su condición\n' +
              'Todo aquel la ventana cerró cuando apareció\n' +
              '\n' +
              'McKlopedia, con el señor Javat, Kase.O\n' +
              'Es sublime la escena del crimen, gimen del dolor\n' +
              'Máximo respeto a este conglomerado, por favor\n' +
              'Todo aquel la ventana cerró cuando apareció\n' +
              '\n' +
              'McKlopedia, con el señor Javat, Kase.O\n' +
              'Es sublime la escena del crimen, gimen del dolor\n' +
              'Máximo respeto a este conglomerado, por favor',
          photo_video: 'songs_images/pavosReales.png',
          url_mp3: 'songs/KASE.O - 08. PAVOS REALES con HERMANO L, SHABU ONE SHANT y MCKLOPEDIA Prod. CRUDO MEANS RAW & KASE.O [AdBfUTsMhMI].mp3',
          genre: 'Rap'
      },
      {
          name: 'REPARTIENDO ARTE',
          duration: 281,
          lyrics: 'Repartiendo arte, porque esa es mi cualidad\n' +
              'Te llevo de lo cotidiano a otra realidad\n' +
              'Al estado de la incierta forma\n' +
              'Territorio en el que habito cuando todos duermen\n' +
              'Puedes verme\n' +
              '\n' +
              'Repartiendo arte, porque esa es mi cualidad\n' +
              'Te llevo de lo cotidiano a otra realidad\n' +
              'Al estado de la incierta forma\n' +
              'Territorio en el que habito cuando todos duermen\n' +
              '\n' +
              'Pasaporte con mi nombre rumbo al infinito\n' +
              'Hay mucho mito, pero nadie ha vuelto y lo ha descrito\n' +
              'Ese es mi reto. Estoy saliendo ya de mi esqueleto\n' +
              'Dejando ya obsoleto el ámbito de lo concreto, no me limito\n' +
              'Traigo el tacto de lo abstracto, nada exacto\n' +
              'Un extracto de lo perfecto, nada recto\n' +
              'Un instante rutilante, muy brillante\n' +
              'De la música de un gigante Arquitecto\n' +
              'Pilla esta foto en la que: Floto, exploto\n' +
              'Dejo este universo roto y choco con otro\n' +
              'De hecho yo formo otro que fundo con otro\n' +
              'Que junto con otros que sumo: Resulto muchos nosotros\n' +
              'El punto de expansión total, el origen\n' +
              'Del que todos los caminos salen y al que se dirigen\n' +
              'Donde todos los posibles sucesos suceden\n' +
              'Donde dicen que cocinan sus besos las mujeres\n' +
              'Por si acaso me perdiera he tendido un hilo\n' +
              'Que me sujeta a la tierra para viajar tranquilo\n' +
              'Desde el último balcón del tiempo me asomaré\n' +
              'Si tú quieres recorrerlo dilo, yo allí estaré\n' +
              '\n' +
              'Repartiendo arte, porque esa es mi cualidad\n' +
              'Te llevo de lo cotidiano a otra realidad\n' +
              'Al estado de la incierta forma\n' +
              'Territorio en el que habito cuando todos duermen\n' +
              'Puedes verme\n' +
              '\n' +
              'Repartiendo arte, porque esa es mi cualidad\n' +
              'Te llevo de lo cotidiano a otra realidad\n' +
              'Al estado de la incierta forma\n' +
              'Territorio en el que habito cuando todos duermen\n' +
              '\n' +
              'Ya regreso a la región de la que todo emana\n' +
              'Solo un ser es la Legión de la que formo parte\n' +
              'Quiero hablarte de esa delgada membrana\n' +
              'Esa ventana traspasada por la raza humana, solo en el arte\n' +
              'Puerta de todos los datos matemáticos\n' +
              'Paraíso de insensatos catedráticos\n' +
              'Forma que forma las formas de lo físico\n' +
              'Norma que anula las normas de lo rígido\n' +
              'Residencia de la esencia de la esencia\n' +
              'Evidencia de existencias simultáneas\n' +
              'Es un cúmulo de extrañas coincidencias\n' +
              'De infinitas incidencias espontáneas\n' +
              'Percepción de la perfección\n' +
              'De la percepción de la perfección\n' +
              'Estoy buscando en lo poético\n' +
              'Que hay en lo supra-estético\n' +
              'Que hay en lo macro-cromático\n' +
              'Que hay en lo no animal\n' +
              'Estoy ahí dentro, me veo desde fuera\n' +
              'Justo en el centro de una gran esfera\n' +
              'Que está justo en el centro de una gran esfera\n' +
              'Que está justo en el centro\n' +
              'Espera, porque se me llevan\n' +
              'Números que se aceleran hasta la eternidad\n' +
              'Pero en negativo, esta marea me lleva hacia atrás\n' +
              'Salto al y allí el futuro cambiaré\n' +
              'Tú si quieres recorrerlo dilo, yo allí estaré\n' +
              '\n' +
              'Repartiendo arte, porque esa es mi cualidad\n' +
              'Te llevo de lo cotidiano a otra realidad\n' +
              'Al estado de la incierta forma\n' +
              'Territorio en el que habito cuando todos duermen\n' +
              'Puedes verme\n' +
              '\n' +
              'Repartiendo arte, porque esa es mi cualidad\n' +
              'Te llevo de lo efímero hasta la eternidad\n' +
              'Al estado donde todos duermen\n' +
              'Territorio en el que habito con incierta forma\n' +
              'Puedes verme\n' +
              '\n' +
              '(What does it all mean?)\n' +
              'What does it all mean!?\n' +
              'Antes de dormir\n' +
              '(What does it all mean?)\n' +
              'Creo que por un accidente se me ha roto el hilo y ya no puedo volver\n' +
              'Me quedo aquí para siempre\n' +
              'Cuánto dura un siempre\n' +
              'No lo sé, pero, creo que por un accidente se me ha roto el hilo\n' +
              'Y ya no puedo volver, me quedo aquí para siempre\n' +
              'Cuando acaba un siempre',
          photo_video: 'songs_images/repartiendoArte.png',
          url_mp3: 'songs/KASE.O - REPARTIENDO ARTE (Videoclip Oficial) [1vbZMpRTT5M].mp3',
          genre: 'Rap'
      },
      {
          name: 'LA LEYENDA DEL TIEMPO',
          duration: 221,
          lyrics: 'El sueño va sobre el tiempo\n' +
              'Flotando como un velero\n' +
              'Flotando como un velero\n' +
              '\n' +
              'Nadie puede abrir semillas\n' +
              'En el corazón del sueño\n' +
              'En el corazón del sueño\n' +
              '\n' +
              'El tiempo va sobre el sueño\n' +
              'Hundido hasta los cabellos\n' +
              'Hundido hasta los cabellos\n' +
              '\n' +
              'Ayer y mañana comen\n' +
              'Oscura flores de duelo\n' +
              'Oscura flores de duelo\n' +
              '\n' +
              'El sueño va sobre el tiempo\n' +
              'Flotando como un velero\n' +
              'Flotando como un velero\n' +
              '\n' +
              'Nadie puede abrir semillas\n' +
              'En el corazón del sueño\n' +
              'En el corazón del sueño\n' +
              '\n' +
              'Sobre la misma columna\n' +
              'Abrazados, sueño y tiempo\n' +
              'Abrazados, sueño y tiempo\n' +
              '\n' +
              'Cruza el genio del niño\n' +
              'La lengua rota del viejo\n' +
              'La lengua rota del viejo\n' +
              '\n' +
              'El sueño va sobre el tiempo\n' +
              'Flotando como un velero\n' +
              'Flotando como un velero\n' +
              '\n' +
              'Nadie puede abrir semillas\n' +
              'En el corazón del sueño\n' +
              'En el corazón del sueño\n' +
              '\n' +
              'Y si el sueño finge muros\n' +
              'En la llanura del tiempo\n' +
              'En la llanura del tiempo\n' +
              '\n' +
              'El tiempo le hace creer\n' +
              'Que nace en aquel momento\n' +
              'Que nace en aquel momento\n' +
              '\n' +
              'El sueño va sobre el tiempo\n' +
              'Flotando como un velero\n' +
              'Flotando como un velero\n' +
              '\n' +
              'Nadie puede abrir semillas\n' +
              'En el corazón del sueño\n' +
              'En el corazón del sueño',
          photo_video: 'songs_images/leyendaTiempo.png',
          url_mp3: 'songs/LA LEYENDA DEL TIEMPO - CAMARON DE LA ISLA [MrUWtOtfwDw].mp3',
          genre: 'Flamenco'
      },
      {
          name: 'Mi Vecinita',
          duration: 183,
          lyrics: 'Hey (jaja!)\n' +
              'Mucha gente pensaba que este era el limite, pero\n' +
              'Nosotros seguimos creando\n' +
              'Mi vecinita, le gustan los jangueitos\n' +
              'A cada rato que la veo, anda con su cervecita\n' +
              'Ya no le gusta quedarse en su casita tranquilita\n' +
              'Porque es media liberal la chamaquita\n' +
              '\n' +
              'Su coleccion de CD\'s es desde playero\n' +
              'Pero en su carro siempre anda con lo nuevo\n' +
              'Y si le ponen reggaeton se pone fresca y hasta abajo\n' +
              'A lo under, ella le da sin miedo (le da sin miedo)\n' +
              'La nena no se compara\n' +
              'Lleva una vida de suerte\n' +
              'Mírala como ella baila\n' +
              'Mientras ella canta, se mueve\n' +
              '\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              '\n' +
              'Se le ve que se le sale por los poros\n' +
              'Cuando escucha pito y coro, y la bocina retumbando\n' +
              'Ya la vez ella se pasa en los foros\n' +
              'Bajando reggaeton, y al rato se graba\n' +
              'En su cuarto bailando frente al espejo, y lo tira por internet\n' +
              'Que fresca es bailando Love and Sex\n' +
              'Mueve su cuerpo de vedette\n' +
              'A simple vista se le ve que\n' +
              '\n' +
              'Adicta, adicta, adicta\n' +
              'Adicta, adicta (al sex, sex)\n' +
              'Adicta, adicta, adicta\n' +
              'Adicta, adicta (al sex, sex)\n' +
              'Adicta, adicta (al sex, sex)\n' +
              '\n' +
              'La nena no se compara\n' +
              'Lleva una vida de suerte\n' +
              'Mírala como ella baila\n' +
              'Mientras ella canta, se mueve\n' +
              '\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              '\n' +
              'Adicta a la pista de Chencho y Maldy, del party\n' +
              'Del marque, en el parque quemando\n' +
              'En la esquina la sata, la fina bailando\n' +
              'Mi rima, yo suelto esta rima a la mano\n' +
              'Arriba las que son\n' +
              'Las que son, las que son\n' +
              '\n' +
              'Adicta, adicta, adicta\n' +
              'Adicta, adicta (al sex, sex)\n' +
              'Adicta, adicta, adicta\n' +
              'Adicta, adicta (al sex, sex)\n' +
              '\n' +
              'La nena no se compara\n' +
              'Lleva una vida de suerte\n' +
              'Mirala como ella baila\n' +
              'Mientras ella canta, se mueve\n' +
              '\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              'Eh ah, eh ah\n' +
              '\n' +
              'Oye muchachos, se lo estamos diciendo\n' +
              'Que no estamos jugando (no estamos jugando!)\n' +
              'La society (la society)\n' +
              'Los que no fallan\n' +
              'Fino, fino, fino, fino, como el haze!\n' +
              'Pina Records (pina!)\n' +
              'Duran, The Coach\n' +
              'Con Chencho y Maldy\n' +
              'En el Love and Sex (Love and Sex)',
          photo_video: 'songs_images/vecinita.png',
          url_mp3: 'songs/Plan B - Mi Vecinita [SB8-YY2DyHI].mp3',
          genre: 'Reggaeton'
      },
      {
          name: 'Anuncio Vibra',
          duration: 21,
          lyrics: "Anuncio Vibra..",
          photo_video: 'default.jpg',
          url_mp3: 'songs/anuncio1.mp3',
          type: 'anuncio'
      },
      {
        name: 'Intro',
        duration: 230,
        lyrics:
        '(Sempre Cor, Sempre Cor)\n' +
        '(Sempre Cor, Sempre Cor)\n' +
        '(Sempre Cor, Sempre Cor)\n' +
        'Yeah\n' +
        'Empiezo el día sin desayuno\n' +
        'Cuando madrugo y cae la noche, siento que viví dos días en uno\n' +
        '¿Por qué no lo hago más a menudo?\n' +
        'Son las cuatro y van seis horas que está el cuarto mudo (Ah-ah)\n' +
        'Tan oscuro (Ah-ah)\n' +
        'Yo me muestro tan oscuro (Ah-ah)\n' +
        'Los que están saben que tengo corazón\n' +
        'Que no estoy cortado, lo traigo\n' +

        'Tengo que\n' +
        'Shorty, tengo que (Si no es con corazón, no, no, no)\n' +
        'Poner el corazón, si no no lo hago\n' +
        'Para hacerlo por hacer yo no lo hago\n' +
        'Tengo que (Tengo, tengo)\n' +
        'Shorty, tengo que\n' +
        'Poner el corazón, si no no lo hago (Yeah)\n' +

        'Tos tus referentes\n' +
        'Los de ahora, los de adolescente\n' +
        'Tos me dieron su mano y todos apretaron fuerte\n' +
        'No hablo de la music, evidente\n' +
        'Amor y respeto, idiomas que los Gs entienden\n' +
        'Y esos dos vienen conmigo siempre\n' +
        'Y esos dos hoy me han traído hasta aquí (Hasta aquí)\n' +
        'Yeah, yeah, yeah\n' +
        'En el Bernabéu cenando con mis bros\n' +
        'Pásame ese canapé, hoy eres Toni Kroos\n' +
        'Cifras de infarto, noches cortas, líneas largas\n' +
        'Yo no té piqué el mechero, fue Begoña Vargas (Ja)\n' +
        'Qué bonito rememorarlo en el taxi\n' +
        'Y mi hermano ciego, casi pota el backseat\n' +
        'Parece una tontería, pero no lo es\n' +
        'Historias que siguen vivas cuando tú no estés\n' +

        '(Tengo que)\n' +
        'Shorty, tengo que (Te-te-tengo que)\n' +
        'Poner el corazón, si no no lo hago\n' +
        'Para hacerlo por hacer yo no lo hago\n' +
        'Tengo que\n' +
        'Shorty, tengo que\n' +
        'Poner el corazón, si no no lo hago\n' +

        'Abrazos y contacto aquí solo en Navidad\n' +
        'Está en mi personalidad, yeah\n' +
        'Hasta los 15 nunca de verdad\n' +
        'El primero vino de ella y cambió mi mentalidad\n' +
        'Como la de ozono, cada vez me abro más\n' +
        'Trato de no hacerlo solo, por eso hablo más\n' +
        'En la music, con la baby por mi paz\n' +
        'Pero muchos de los que más quiero nunca lo han oído de mi voz\n' +
        'Y esa mierda no me gusta\n' +
        'Las cartas a mano y las flores en vida\n' +
        'Súper reservado, pero ya es un paso al menos que lo escriba\n' +
        'Que conozca el mundo, que busque lo mío me anima a que me la viva\n' +
        'Pero el hogar no se olvida, yeah\n' +
        'Odio el dinero, pero quiero un chaletón\n' +
        '2K en el chaquetón, que me cubra del frío del cadenón\n' +
        'Odiadores siempre se ven tan solos\n' +
        'Mientras tanto yo lleno de fans bolos\n' +
        'No deseo el mal, no les deseo el paredón\n' +
        'Quiero mirar adentro, sacar mi mejor versión\n' +
        'Aprendí a vivir mi vida, no la de otros\n' +
        'Que venzan sus traumas, que maten sus monstruos\n' +

        'Yeah (Tengo que)\n' +
        'Sempre Cor es no hacer nunca las cosas por hacer\n' +
        'Sempre Cor es hacerlo por los que te odian, pero hacerlo más fuerte por los que te quieren (DamnPablo)\n' +
        'Da igual que sea reggaetón, que sea un corrido, que sea una bachata\n' +
        'Que sea... la rapeada del siglo, pero\n' +
        'Es importante que cuentes cosas y que transmitas cosas\n' +
        'Sempre Cor es esto',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/CMari-Intro-Visualizer.mp3',
        type: "album",
        genre: 'Rap'
      },
      {
        name: '2AM',
        duration: 169,
        lyrics:
        'Tengo sueño todo el día menos a las 2 a. m\n' +
        'El móvil en la mesilla, la musa no avisa y viene\n' +
        'Esto no se me podría haber ocurrío a las 10\n' +
        'Hasta pa dormir yo tengo que ir al revés\n' +
        'Y claro que e mala mía los puñales de mi espalda\n' +
        'Soy de los que confía, pero si fallas la guarda\n' +
        'Te saco de mi vida, te saco de mi casa\n' +
        'Bebé, yo no soy serio, solo te escondo la salsa\n' +

        'Mi vida fácil, sin baches, mamá planchando parches\n' +
        'Aquí no eres bienvenido, mejor que te marches\n' +
        'Tú y yo, baby, el Real en noche de martes, yeah\n' +
        'Hacemos buenas las segundas partes, yeah\n' +
        'No, no, ya no tengo FOMO\n' +
        'Estoy en el hotel, puta, estoy haciendo nono\n' +
        'Wow, todos son tan bobos\n' +
        'Te sacan lo que quieren y luego cambian el cromo\n' +

        'Yeah\n' +
        'Na de rookies, eh, na de roo-roo—\n' +
        'Yeah\n' +
        'Tengo sueño todo el día menos a las 2 a. m\n' +
        'El móvil en la mesilla, la musa no avisa y viene\n' +
        'Esto no se me podría haber ocurrío a las 10\n' +
        'Hasta pa dormir yo tengo que ir al revé\n' +

        'Yo he ganao más que he perdío\n' +
        'De la ruleta gurús, no me fío, no\n' +
        'Del azar para hacer flush, pa hacer chito\n' +
        'Si eres vago no tienes puesto en el team\n' +
        'Pa abajo solo hay un puesto y tiene mi nombre escrito\n' +
        'Tenía un Meet hoy a las 9, pero me he quedao dormío\n' +
        'Es un mito lo del jefe hermano, aquí yo soy el CEO\n' +
        'Pe-pero asumo el error y pido perdón\n' +
        'Tú no asumes na, cabrón, siempre con el "yo no he sío\n' +

        'Yo sin alarma estoy trabajando\n' +
        'Todo legal, aquí el dinero es blanco\n' +
        'Con 23, como Jordan, como Lady toy coronando\n' +
        'Yeah, ya no me estanco\n' +
        'Yeah, ya solo avanzo\n' +
        '2024 lo hicimo, 2025 gestando\n' +
        'A-AMEX got the nitro',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí -  2AM [BE54Hl_YQvo].mp3',
        type: "album",
        genre: 'Rap'
      },
      {
        name: 'IBAN',
        duration: 189,
        lyrics:
        'Toy bendito\n' +
        'DamnPablo\n' +
        'Toy bendito\n' +
        'Yeah\n' +

        'Toy bendito como el agua, tú blandito como el pan\n' +
        'Ya sabía que eras malo, pero hermano, no que tan\n' +
        'Con el Javi y el Iván, 3.000 más para mí van\n' +
        'Yo solo copio y pego cuando te mando el IBAN\n' +
        'Oh, baby, amo esta vida, me sonríe\n' +
        'Son lazy, por eso nunca na les va bien\n' +
        'Fe en mí, siempre tuve, pero dudé\n' +
        'Ya ningún cabrón me la destruye\n' +

        'De peque me prometí no ser uno más\n' +
        'De peque me prometí no sеr uno más\n' +
        'De peque mе prometí no ser uno más\n' +
        'De peque me prometí no ser uno más\n' +

        'Showrooms, eventos, siempre estáis atentos (Yeah, yeah)\n' +
        'Pero pa currar os veo más lentos (Ja)\n' +
        'El tick azul se ve pocho por 1200 (Super pocho)\n' +
        'Podrás mentir, pero nadie se cree tus cuentos\n' +
        'Son 2000 en una hora, sé que no es normal\n' +
        'No rimo con "cora", zorra, eso es normal\n' +
        'No amo presumir, bebé, que no es portá\n' +
        'Pero esta vida es pa contar\n' +
        'Tengo amigos que no saben por qué camino tirar\n' +
        'Clases, curro, grado, sueldo, estudiar o buscar pan\n' +
        'Y yo recuerdo que antes de graduarme hacía 2K al mes\n' +
        'Es verdad, es que no puedo olvidarme\n' +

        'Toy bendito como el agua, tú blandito como el pan\n' +
        'Ya sabía que eras malo, pero hermano, no que tan\n' +
        'Con el Javi y el Iván, 3.000 más para mí van\n' +
        'Yo solo copio y pego cuando te mando el IBAN\n' +
        'Oh, baby, amo esta vida, me sonríe\n' +
        'Son lazy, por eso nunca na les va bien\n' +
        'Fe en mí, siempre tuve, pero dudé\n' +
        'Ya ningún cabrón me la destruye\n' +

        'Ya ningún cabrón me destruye esta puta fe en mí\n' +
        'Y si quiero, hay curro, pero no toco la Fenwick\n' +
        'Si vas a matarme, entiérrame, que soy el fénix\n' +
        'Ese lip combo en mi polla, gloss de Dior y un poco e Benetint\n' +
        'Bitch, I got mixed personalities, a veces me siento Melly\n' +
        'Le follen a Gran Vía, encuéntrame entre Vina y Meli\n' +
        'Mi vida es la pinga, yo no puedo ser más hetero\n' +
        'Tú estás en la esquina y yo posteao en la kelly\n' +
        'Jugándome un Fortnite como un retrasado mental\n' +
        'Con el Javi, con el Garri, también con el Sergio Gramos\n' +
        'Luego subo y grabo un palo en el zulo de madera\n' +
        'Donde creamos cultura, pero ahora de otra manera\n' +

        'DamnPablo\n' +
        'En este beat he entendido los "DamnPablo" (DamnPablo)\n' +
        'Yeah\n' +
        'Toy bendito',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí-IBAN[IZdqFGXWkHc].mp3',
        type: "album",
        genre: 'Rap'
      },
      {
        name: 'Bachata y Reggaeton',
        duration: 124,
        lyrics:
        'Se mueve tan bien sea rápido o lento\n' +
        'Yo no iba a venir, pero por ti hasta vengo solo\n' +
        'Hasta vengo solo\n' +
        'Díganle al DJ que ponga una de Chencho\n' +
        'Que cada vez que la veo bailando me vuelvo loco\n' +
        'Yo me vuelvo loco\n' +

        'Bachata y reggaetón\n' +
        'Si le ponen dembow, más se suelta\n' +
        'En la disco es la boss, es la experta (Uh-oh)\n' +
        'Dicen muchas cosas de ti\n' +
        'Y eso que la mitad no las cuenta\n' +
        'Si le ponen dembow, más se suelta\n' +
        'En la disco es la boss, es la experta (Uh-oh)\n' +
        'Dicen muchas cosas de ti\n' +
        'Y eso que la mitad no las suelta\n' +

        'Solo somos uno, pero pide que la parta (Prra)\n' +
        'Va al gym (Va al gym), solo come pavo y palta (No)\n' +
        'Soldados como en Esparta\n' +
        'Me lo como todo, qué tienes fuera de carta\n' +
        'Y siente el calor, yo quiero de tu interior\n' +
        'Literal, no en plan amor (No)\n' +
        'Me volvió loco cuando me dijo al oído que\n' +
        'Quiere comprobar si es verdad lo que dicen de los flacos (Ja)\n' +
        'Pregunté por ella y me dieron par de datos\n' +
        'Tuvo, pero está sin gato\n' +
        'Cada vez que sales, desacato\n' +
        'Quiere comprobar si es verdad lo que dicen de los flacos\n' +
        'Pregunté por ella y me dieron par de datos\n' +
        'Tuvo, pero está sin gato\n' +
        'Cada vez que sale\n' +

        'Bachata y reggaetón\n' +
        'Si le ponen dembow, más se suelta\n' +
        'En la disco es la boss, es la experta\n' +
        'Dicen muchas cosas de ti\n' +
        'Yo sé que la mitad no las cuenta\n' +
        'Bachata y reggaetón\n' +
        'Si le ponen dembow, más se suelta\n' +
        'En la disco es la boss, es la experta\n' +
        'Dicen muchas cosas de ti\n' +
        'Yo sé que la mitad no las cuenta',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Bachata y Reggaeton (Visualizer) ｜ Sempre Cor [f5cFEwzgpcw].mp3',
        type: "album",
        genre: 'Reggaeton'
      },
      {
        name: 'Richter',
        duration: 176,
        lyrics:
        'AMEX got the nitro\n' +
        'Cada vez está más seca y la cara se te empapó\n' +
        'En tus labios un temblor, 6.7 escala Richter\n' +
        'Si el amor es complicado no has vivido el desamor\n' +
        'Me paso el día en la cama, pero me cuesta dormirme\n' +

        'Otra noche, otra copa\n' +
        'Otro coche, y otra boca\n' +
        'Pero ninguna me da lo que sí me dabas tú\n' +
        'Beba, ya lo dijo el Fuka: "Esto no se trata de cu—"\n' +

        'Cuando te sueño me gusta pensar que tú también\n' +
        'Estás soñándome\n' +
        'Cuando te pienso me gusta soñar que tú también\n' +
        'Estás pensándomе\n' +
        'Y si no lo haces, miénteme; yo lo haría, créеme\n' +
        'Anoche llamé a tu puerta y me abría otro hombre\n' +
        'Verte y no tocarte es como chocar con la pared\n' +
        'Como rezar a un Dios que no responde\n' +

        'Otra noche, otra copa\n' +
        'Otro coche, y otra boca\n' +
        'Pero ninguna me da lo que sí me dabas tú\n' +
        'Beba, ya lo dijo el Fuka: "Esto no se trata de cu—"\n' +
        'El jean es skinny, yo estoy regular\n' +
        'Me hago el harakiri, tengo que regular\n' +
        'Las noches se hacen días, yo soy un vampiro\n' +
        'Eso te mordía en la yugular\n' +
        'Co-como la de Eladio, me gusta natural\n' +
        'Tengo sofá nuevo y lo quiero inaugurar\n' +
        'Te di mi corazón, el del uno y anular\n' +
        'Y yo sé que va a volver, pero cuánto va a durar\n' +

        'Días, semanas, meses o años\n' +
        'A más vuelta le doy, más me hace daño\n' +
        'El gin en el WC, bebí y no tuve sed\n' +
        'Y estoy con la cabeza en la pared del baño\n' +

        'Otra noche, otra copa\n' +
        'Otro coche, y otra boca\n' +
        'Pero ninguna me da lo que sí me dabas tú\n' +
        'Beba, ya lo dijo el Fuka: "Esto no se trata de cu—',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Richter (Visualizer) ｜ Sempre Cor [6fXM97m34Bc].mp3',
        type: "album",
        genre: 'Pop'
      },
      {
        name: 'Sempapa',
        duration: 211,
        lyrics:
        'El Mercurio sube, ya se van las nubes\n' +
        'Ellas también saben que esto es hogar del sol\n' +
        'Hoy no te preocupe, vamo donde cubre\n' +
        'Ahí verás que se hunden toa las penas y el dolor\n' +

        'Me haces sentir bien como en casa\n' +
        'Te embabas, se empapa\n' +
        'Se embala, mirada de bengala\n' +
        'Me mira de frente, se me encara\n' +
        'Se siente caliente, siente lava\n' +
        'Bien como en casa\n' +
        'Te embabas, se empapa\n' +
        'Se embala, mirada de bengala\n' +
        'Me mira de frente y se me encara\n' +
        'Bien caliente, se siente—, hmm\n' +

        'Yo salgo de casa, en dos minutos veo el mar y me mojo (Hm-hm)\n' +
        'Y te echo la crema solar (Hm-hm)\n' +
        'Yo no quiero crema, me gusta mirarme con el rojo (Hm-hm)\n' +
        'Y sé que te gusta cuando te cojo\n' +
        'Si te cojo no te suelto, y si te suelto te rescato (Uh-uh, ah)\n' +
        'Mano arriba como si fuera un atraco\n' +
        'Tú lo das to, la pistola saco (Uh)\n' +
        'Pero en este tema yo no quería hablar de sex, uh-uh\n' +
        'Pe-pero ese bikini te tapa tan poco, que\n' +
        '(Yo te toco, yo te toco, yo te toco) Uh-uh\n' +
        'Quiero ser la arena, se pega por toa tu piel, uh-uh\n' +
        'Voy con los amigos, tráete a tus amigas también, uh-uh, uh-uh\n' +

        'El Mercurio sube, ya se van las nube (Ya se van, que no vuelvan)\n' +
        'Ellas también saben que esto es hogar del sol\n' +
        'Hoy no te preocupe (No-no), vamo donde cubre (Glu-glu, glu-glu)\n' +
        'Ahí verás que se hunden toa las penas y el dolor\n' +

        'Me haces sentir bien como en casa\n' +
        'Te embabas, se empapa\n' +
        'Se embala, mirada de bengala\n' +
        'Me mira de frente y se me encara\n' +
        'Bien caliente, se siente lava\n' +
        'Bien como en casa\n' +
        'Te embabas, se empapa\n' +
        'Se embala, mirada de bengala\n' +
        'Me mira de frente y se me encara\n' +
        'Bien caliente, se siente lava\n' +

        'Tu tens el don, el caràcter, la tècnica\n' +
        'Ni tarriben, no hi ha cap rèplica\n' +
        'Ella és la nena, la sexy, ella sap com va\n' +
        'Quan sent que ja sha acabat el juego, repetim (Hm)\n' +
        'Jo li pregunto si té dispo\n' +
        'Les nenes despisto, repetim (Hm)\n' +
        'Baby, jo et camelo, jo et camelo, jah\n' +
        'Tescric lletres i melos (Lle-lletres i me-melos)\n' +

        '¿Dónde estarás, dónde estaré?\n' +
        '¿Dónde estarás, dó-dón-dónde estaré? (Hm)\n' +
        '¿Dónde estarás, dónde estaré? (Hm)\n' +
        '¿Dónde estarás? Aún no lo sé\n' +
        'Solo—\n' +

        'A ver, a ver, a ver\n' +
        'E-el tema es larguete, pero\n' +
        'Pero yo le metía una última, eh\n' +

        'Me haces sentir bien como en casa\n' +
        'Te embabas, se empapa\n' +
        'Se embala, mirada de bengala\n' +
        'Me mira de frente y se me encara\n' +
        'Se siente caliente, siente lava\n' +
        'Bien como en casa\n' +
        'Te embabas, se empapa\n' +
        'Se embala, mirada de bengala\n' +
        'Me mira de frente y se me encara\n' +
        'Bien caliente, se siente lava',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Sempapa ft. Mushkaa (Visualizer) ｜ Sempre Cor [yC8zw8OKWIs].mp3',
        type: "album",
        genre: 'Reggaeton'
      },
      {
        name: 'Tan Lines',
        duration: 166,
        lyrics:
        'We dont think about you\n' +
        'Bout-bout-bout—, about you\n' +
        'We-we dont think a—, we dont think a— (Bout you)\n' +
        'BLNCO, oh-oh\n' +
        'Yeah-yeah-yeah-yeah\n' +
        'Ay-ay-ay-ah\n' +
        'BLNCO\n' +

        'Y sexy tu tan line\n' +
        'El sol te pegó, fue bien que te dio, pero yo te voy a dar más\n' +
        'Mis dedos, bebé, rozan toda tu piel y me pongo bien loco (Bien loco)\n' +
        'Y si empiezo a besarte, no intentes frenarme, no sé ir poco a poco\n' +
        'Escuchando Plan B te lo choco\n' +
        'Y sexy tu tan line (Wuh)\n' +
        'El sol te pegó, fue bien que te dio, pero yo te voy a dar más\n' +
        'Mis dedos, bebé, rozan toda tu piel y me pongo bien loco (Bien loco)\n' +
        'Y si empiezo a besarte, no intentes frenarme, no sé ir poco a poco\n' +
        'Escuchando Plan B te lo choco\n' +

        'Via arrancarte el pantalón\n' +
        'No me importa que sea nuevo de tienda\n' +
        'Ese e tu problema, no espere que lo atienda\n' +
        'Te pones picante y toa la noche me piensa\n' +
        'Hasta que llega el alba\n' +
        'Bebé, dame cinco y en tres me tiene en tu puerta\n' +
        'El primero e mío y luego hacemos cuenta\n' +
        'El empate empieza cuando bajo mi lengua\n' +
        'Por toa tu línea alba\n' +
        'Me sabe a sal cuando sale del mar\n' +
        'Y es como que sale el mal de mí\n' +
        'Cuando yo estoy dentro e ti\n' +
        'Tú tan chiquitita, tan bonita, bebé\n' +
        'Mente maldita, bebecita, no me deje\n' +
        'Me encanta cómo se vende\n' +

        'Y sexy tu tan line\n' +
        'El sol te pegó, fue bien que te dio, pero yo te voy a dar más\n' +
        'Mis dedos, bebé, rozan toda tu piel y me pongo bien loco\n' +
        'Y si empiezo a besarte, no intentes frenarme, no sé ir poco a poco\n' +
        'Escuchando Plan B te lo choco\n' +

        'Yeah-yeah\n' +
        'We dont think about you\n' +
        'No, no, oh\n' +
        'We-we dont think a—, we dont think a—\n' +
        'We dont think about you',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí, Blnco - Tan Lines [zapXOcVDfaM].mp3',
        type: "album",
        genre: 'Rap'
      },
      {
        name: 'La Ropa',
        duration: 146,
        lyrics:
        'Ya hace un mes de esa vez\n' +
        'Y sigue en mi armario el olor que dejaste\n' +
        'A las 10 puede ser\n' +
        'Hay cosas que siento que tengo que darte\n' +
        'Era de mi padre esa chaqueta vaquera\n' +
        'Se quedó en tu casa la Sierra/Crosses marrón\n' +
        'El carro está encendido, ¿por qué te quedas ahí fuera?\n' +
        'Dale, ma, no temas, solo una conversación\n' +

        'Una blusa, pantalón, la camisa, cinturón\n' +
        'Una goma para el pelo, una falda corta en cuеro\n' +
        'Y en cuero nos quedamo lo do\n' +
        'Y la ropa quе te tenía que dar no te la di (Oh-oh-oh-oh)\n' +
        'Y la que llevabas acabó en el suelo (En el suelo)\n' +
        'No quería que esto hoy se diera así (Oh, yo no quería)\n' +
        'No somos malos, solo nos gusta lo bueno\n' +

        'Un, dos, tres, bailando\n' +
        'Un, dos, bailando\n' +
        '(Solo nos gusta lo bueno; no nos gusta lo—)\n' +
        'Un, dos, tres, bailando\n' +
        'Un, dos, bailando\n' +

        'Empañando la ventana, no se nos ve desde fuera\n' +
        'Lo malo llega mañana, bebé, hoy duerme a mi vera\n' +
        'La ropa está apartada, me he perdido en la novela\n' +
        'Pero si necesito abrigo, que sea tu piel la tela\n' +
        'Que sea tu piel la tela y no me hables de cautela\n' +
        'Que el amor es visceral y si es real puede que duela\n' +
        'Es una montaña rusa, un día suela al otro vuela\n' +
        'No es bonito si se esfuma en la llama de una vela\n' +

        'Esto ha sido todo, 2024\n' +
        'C Marí y BLNCO se juntaron de nuevo\n' +
        '"Tu Forma de Amar" va a quedar corta al lado de esto\n' +
        'Viene el álbum (Oye)\n' +
        'Bailando, bailando (Viene el álbum; oye)\n' +
        'Bailando, bailando, yeah',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - La Ropa [Jr6hlkhR9Ps].mp3',
        type: "album",
        genre: 'Flamenco'
      },
      {
        name: 'Qtalhoy',
        duration: 132,
        lyrics:
        '¿Va bien?\n' +
        '¿Qué tal el día, cariño?, ¿te va bien?\n' +
        'Y tú rápido ya me hablas de alguien\n' +
        'Odias el mundo, te sientes un alien\n' +
        'Tranqui\n' +
        'Luego en casa yo te lo hago más fácil\n' +
        'Y te arropo por si hoy estás frágil\n' +
        'Bebé, te noto frágil\n' +

        'Cuéntame qué tal hoy\n' +
        '¿A quién viste en el metro?\n' +
        'Todos esos detalles, me encanta escucharlo\n' +
        'Es parte de lo nuestro\n' +
        'Y no pienses que no (No pienses que)\n' +
        'Que no leo tus textos (Sí los leo)\n' +
        'Que no escucho tus mensajes de voz\n' +
        'Lo hago a gusto y atento\n' +

        'Tú me das los detalles más innecesarios\n' +
        'Lo que ves en la calle, lo que ves en el barrio\n' +
        'Para ti soy tu diario\n' +
        'Y eso es tan bonito, mi amor\n' +
        'Tú me tienes aprendiendo de series que no veré\n' +
        'Pero te gusta hablarme de ellas\n' +
        'Y a mí me gusta escucharte en ellas (Yeah)\n' +
        'Sexo en Nueva York ya me la sé\n' +
        'Jon Snow ya me la sé\n' +
        'Tú eres agua en el desierto, yo me despierto con sed\n' +
        'Te quiero beber; te quiero, bebé\n' +

        'Cuéntame qué tal hoy\n' +
        '¿A quién viste en el metro?\n' +
        'Todos esos detalles, me encanta escucharlo\n' +
        'Es parte de lo nuestro\n' +
        'Y no pienses que no (No pienses que)\n' +
        'Que no leo tus textos (Sí los leo)\n' +
        'Que no escucho tus mensajes de voz\n' +
        'Lo hago a gusto y atento',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Qtalhoy [OqwDAf1tOIg].mp3',
        type: "album",
        genre: 'Reggaeton'
      },
      {
        name: 'Contacto',
        duration: 175,
        lyrics:
        'Con lo guapa que tú eres y el cuerpo que traes\n' +
        'Yo creo que hiciste un pacto con Dios\n' +
        'Con lo mala que tú eres y lo bien que te va\n' +
        'Yo creo que con el Diablo son dos\n' +

        'Ella no lo mueve, pero tiene contacto\n' +
        'Hace que se muevan las parede del cuarto\n' +
        'Hace que me quede como cuadro sin marco\n' +
        'Una peli, Tim Burton\n' +
        'Ella no me quiere, pero viene y la parto\n' +
        'No soy egoísta, pero no te comparto\n' +
        'Hace que me quede como cuadro sin marco\n' +
        'Una peli, Tim Burton, yeah\n' +

        'Bebé, tú usas hacks, yo te subo al max\n' +
        'Estos son De Gea, les fallan los faxs, yeah\n' +
        'No hay verdad ni en su cancione ni en su vida (Ni en su vida)\n' +
        'Yo estaba en su peak, yo estaba en su vida\n' +
        'Su ma no dio a luz, ella fue esculpida\n' +
        'Y ya te la pongo, está escupida\n' +
        'No querías perder al amor de tu vida\n' +

        'Con lo guapa que tú ere y el cuerpo que traes\n' +
        'Yo creo que hiciste un pacto (Oh-oh) con Dios\n' +

        'Ella no lo mueve, pero tiene contacto\n' +
        'Hace que se muevan las parede del cuarto\n' +
        'Hace que me quede como cuadro sin marco\n' +
        'Una peli, Tim Burton\n' +
        'Ella no me quiere, pero viene y la parto\n' +
        'Hace que me quede como cuadro sin marco\n' +
        'Como el mar sin barco\n' +
        'Una peli, Tim Burton (Eh)\n' +

        'Su cuerpo (Su cuerpo) desprende (Desprende)\n' +
        'Toy muerto (Muerto), yeah, no entiendes (No entiendes)\n' +
        'Y no le cabía en la falda (Fal-fal—) y se le salían la nalga (Nal-nal—)\n' +
        'Y se me movía la espalda (-pal-pal—), cuando se ponía de espaldas\n' +
        'Ella lo mueve como traficante, yeah\n' +
        'Ella me pone detrás y delante, eh\n' +
        'Ella es la prueba, yo un participante, yeah\n' +
        'Ella es la prota, yo soy figurante\n' +

        'Ella no lo mueve, pero tiene contacto\n' +
        'Hace que se muevan las parede del cuarto\n' +
        'Hace que me quede como cuadro sin marco\n' +
        'Una peli, Tim Burton\n' +
        'Ella no me quiere, pero viene y la parto\n' +
        'No soy egoísta, pero no te comparto\n' +
        'Hace que me quede como cuadro sin marco\n' +
        'Una peli, Tim Burton\n' +

        'Con lo guapa que tú eres y el cuerpo que traes\n' +
        'Yo creo que hiciste un pacto con Dios',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Contacto ft. John Pollõn (Visualizer) ｜ Sempre Cor [50zbMwQ8Rd4].mp3',
        type: "album",
        genre: 'Reggaeton'
      },
      {
        name: 'Mil Veces',
        duration: 160,
        lyrics:
        'A figure waits round the corner\n' +
        'I dont know who Ill find\n' +
        'I hear a voice growing stronger inside\n' +
        'AMEX got the nitro\n' +

        'Lunes, pero quiere cenar fuera, está claro\n' +
        'Vamos sushi, lo que tú prefieras, está claro\n' +
        'Veremos la peli que tú quieras\n' +
        'Tocaré tu pelo hasta que duermas\n' +
        'Yo ya ni siquiera le doy vueltas\n' +
        'Porque para qué, si lo tienes claro\n' +
        'Yo lo hago encantado\n' +

        'Hablo con amigos y les pasa igual\n' +
        '¿Nos ganáis o nos dejamos?\n' +
        'De cien veces, tú tienes la razón mil veces\n' +
        'Mil veces en total, en total\n' +

        'Tú, tienes la razón mil\n' +
        'Tienes la razón mil\n' +
        'Tú, tienes la razón mil\n' +
        'Tienes la razón mil\n' +
        'Sí, bebé, tú eres la más graciosa de los dos (Que sí, que sí, que sí)\n' +
        'Sí, bebé, tú eres la más lista de los dos\n' +
        'Mil fotos que te hago y no te gustan ni dos\n' +
        'Me giro después del adiós\n' +

        'Lunes, pero quiere cenar fuera, está claro\n' +
        'Vamos sushi, lo que tú prefieras, está claro\n' +
        'Veremos la peli que tú quieras\n' +
        'Tocaré tu pelo hasta que duermas\n' +
        'Yo ya ni siquiera le doy vueltas\n' +
        'Porque para qué, si lo tienes claro\n' +

        'Tú, tienes la razón mil\n' +
        'Tienes la razón mil\n' +
        'Tú, tienes la razón mil\n' +
        'Tienes la razón mil\n' +

        'A figure waits round the corner',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Mil Veces (Visualizer) ｜ Sempre Cor [aE8CgrhgV5w].mp3',
        type: "album",
        genre: 'Reggaeton'
      },
      {
        name: 'Martiño Rivas Freestyle',
        duration: 178,
        lyrics:
        'El motor es alemán y la van espera abajo (Wuh)\n' +
        'La vida que sueñas es mi trabajo\n' +
        'Ganador desde el día en que mamá me trajo (Oh-oh)\n' +
        'Martiño Rivas está dentro de la van (Uh-uh-uh-uh)\n' +
        'Y sigo siendo yo el más sexy de la van\n' +
        'Disfruto del camino, yo no quiero atajos\n' +
        'Si lo haces con amor, más fácil que llegan los fajos\n' +
        'Si lo haces por los fajos nunca llegarán, nunca llegarán\n' +

        'Y si tú te vas, a veces me siento un alien\n' +
        'Solitario, máximo un brodie como Adrien\n' +
        'Nunca llegará, tos peleando por ser alguien\n' +
        'Y yo buscando no ser nadie\n' +
        'Y si—, si preguntan siempre digo que me va bien\n' +
        'Hasta cuando en ocasiones no fue tan bien\n' +
        'Nunca llegará, no fue tan bien\n' +

        'Long sleeve hasta en verano\n' +
        'El flow es pesado y los cargos suave\n' +
        'Tu novio es pesado y aún no lo sabe\n' +
        '"Suave" de H Roto, ya cayeron diez\n' +
        'Pero a mi yo de hace diez le sigo siendo fiel\n' +
        'Y eso pa mí es clave\n' +
        'Ellos son esclavo, yo me siento el dueño\n' +
        'Lo que digo, lo que pienso y lo que hago (Ah)\n' +
        'Mi único enemigo es mi yo vago (Solo)\n' +
        'Cuando me castiga, me repito que yo valgo (Ah)\n' +
        'Aquí te pasaste, BLNCO, loco\n' +
        'Me dejaste blanco, loco\n' +
        'Yo no soy de amianto (No)\n' +
        'Money over dresscode entrando a la sucursal\n' +
        'Chanclas y gorra pa atrás, pero me halagan igual (Yeah)\n' +
        'Tú me hacías un x3 en los mensuales\n' +
        '¿Cómo coño yo un x2 en festivales?\n' +
        'No llenas eso ni con familiares (Va)\n' +
        'Ni tienes amigos, ni tienes fanes\n' +

        'Yo juego para la gente que gusta el fútbol\n' +
        'Para la gente que sabe mucho de fútbol\n' +

        'Y si tú te vas, a veces me siento un alien\n' +
        'De aquí, nunca llegará, tos peleando por ser alguien\n' +
        'Duele hasta morir, duele el amor\n' +
        'Las cosas siguen, pero tú te vas\n' +
        'Dale vueltas, tú verás\n' +
        'Me grababa los temas en los intros y en el tiempo\n' +
        'Que rappers que molaban dejaban detrás\n' +
        'Dale vueltas, tú verás',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Martiño Rivas Freestyle (Visualizer) ｜ Sempre Cor [rkEIBzEfFKE].mp3',
        type: "album",
        genre: 'Rap'
      },
      {
        name: 'DSPB',
        duration: 200,
        lyrics:
        'Dime si podré buscarte\n' +
        'DamnPablo\n' +
        'Dime si podré buscarte\n' +

        'Los pulgares en círculos, no sé ni qué escribir\n' +
        'Tan real el vínculo, no se pue describir\n' +
        'Yo no te amenazo, pero si tú te vas\n' +
        'Contigo se van mis ganas de vivir\n' +

        'Por qué\n' +
        'Tan bonita por qué\n' +
        'Más bonita si llora\n' +
        'Más bonita si llora\n' +
        'Please, di por qué\n' +
        'Tan bonita, por qué\n' +
        'Más bonita si llora\n' +
        'Más bonita si llora\n' +

        'Cuando discutimos siempre se pone a llover\n' +
        'Es algo divino es como si Dios nos viera\n' +
        'Baby, te lo juro, esto es un amor de novela\n' +
        'Pero de novela en la que el prota acaba muerto\n' +
        'Sí, claro que estoy despierto\n' +
        'Siento angustia mientras llega el texto\n' +
        'Taquicárdico perdido, pensando en qué te contesto\n' +

        'Los pulgares en círculos, no sé ni qué escribir\n' +
        'Tan real el vínculo, no se pue describir\n' +
        'Yo no te amenazo, pero si tú te vas\n' +
        'Contigo se van mis ganas de vivir\n' +
        'Los pulgares en círculos, no sé ni qué escribir\n' +
        'Tan real el vínculo, no se pue describir\n' +
        'Yo no te amenazo, pero si tú te vas\n' +
        'Contigo se van mis ganas de vivir\n' +

        'Dicen los expertos que ahora lo mejor pa los dos es contacto cero\n' +
        'Pero a ti te da más miedo olvidarme que no poder hacerlo (Yeah)\n' +
        'Esto es lo más real que he escrito\n' +
        'Lo más real que vivimos tú y yo\n' +

        'Bebé, por qué\n' +
        'Tan bonita por qué\n' +
        'Más bonita si llora\n' +
        'Más bonita si llora\n' +
        'Please, di por qué\n' +
        'Tan bonita, por qué\n' +
        'Más bonita si llora\n' +
        'Más bonita si llora\n' +

        'Esto es real como pegarse un tiro\n' +
        'Tú eres una flor de cristal cuando estás dormida\n' +
        'Tan frágil, pero brillar nunca se te olvida\n' +
        'Yo te quería cuidar en toda mis vidas\n' +
        'Aún en el chapa blanca te escribo sentado\n' +
        'Lo empecé a matar cuando di por sentado tu amor\n' +
        'Los regalos, los detalles, la flor\n' +
        'Se murió, no la he regado\n' +
        'Y pensé que eran bobadas de Instagram, pero es real\n' +
        'Te juro que lo vi en mis carnes\n' +
        'Y ahora siento que he hecho todo mal como A&R Warner\n' +
        'Darte, claro que quiero darte\n' +
        'Pero ahora es lo de menos, quiero ir a los restaurantes\n' +
        'La última al dormir y la primera al despertarte\n' +
        'Dime si podré buscarte\n' +

        'Dime si podré buscarte\n' +
        'Dime si podré buscarte',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - DSPB (Visualizer) ｜ Sempre Cor [aJF6d_0pKrA].mp3',
        type: "album",
        genre: 'Trap'
      },
      {
        name: 'Mi Primera Cana',
        duration: 180,
        lyrics:
        'Ho-ho-hoy me miré en el espejo y mi primera cana\n' +
        'La yaya imagina a su hermana, mamá\n' +
        'Y a mí me pasará el día de mañana\n' +
        'Y qué miedo me da\n' +
        'Y qué pocas ganas que tengo de hacerme mayor\n' +
        'Quería ser adulto y hoy todo es peor\n' +
        'Volver a cuando nada del mundo preocupaba\n' +
        'Cuando éramos niños todo era color\n' +

        'Cementerios y hospitales cuanto más lejos mejor\n' +
        'Al menos me consuela que nos trate igual a todos\n' +
        'Las enfermedades no entienden de plata y oro\n' +
        'Pienso que algún día olvidaré tu voz y lloro\n' +
        'Vidas nuevas llegan, pero otras se van\n' +
        'Pronto eres padre pero nieto no más\n' +
        'Toco madera que todo sea eso\n' +
        'Y que no se altere el orden vital\n' +
        'Hace 16 que celebramos sus 16\n' +
        'Y papás también cambiaron del 4 al 6\n' +
        'Y yo que veo lo bueno, siempre veo lo bueno\n' +
        'Pero no hay na bueno, mi amor\n' +

        'Hoy me miré en el espejo y mi primera cana\n' +
        'La yaya imagina a su hermana, mamá\n' +
        'Y a mí me pasará el día de mañana\n' +
        'Y qué miedo me da\n' +
        'Y qué pocas ganas que tengo de hacerme mayor\n' +
        'Quería ser adulto y hoy todo es peor\n' +
        'Volver a cuando nada del mundo preocupaba\n' +
        'Cuando éramos niños todo era color\n' +

        'Tictac, tictac\n' +
        'Tic-tic, tictac, tictac\n' +
        'Tiqui-tiqui, tictac, tictac\n' +
        'Tic-tic, tictac, tictac\n' +
        'Tictac, tictac\n' +
        'Tiqui-tiqui, tictac, tictac\n' +
        'Tictac, tictac\n' +
        'Tiqui-tiqui, tictac\n' +

        'Cementerios y hospitales cuanto más lejos mejor\n' +
        'Al menos me consuela que nos trate igual a todos\n' +
        'Las enfermedades no entienden de plata y oro\n' +
        'Pienso que algún día olvidaré tu voz y lloro\n' +
        'Yah, yah, yah\n' +
        'Yah, yah, yah',
        photo_video: 'songs_images/sempreCor.jpeg',
        url_mp3: 'songs/C Marí - Mi Primera Cana (Visualizer) ｜ Sempre Cor [folbfmkaidY].mp3',
        type: "album",
        genre: 'Other'
      },
      {
        name: 'Jugador',
        duration: 177,
        lyrics:
        'I got a van, baby, I got a van\n' +
        'I got a van, baby-baby, I got a van, oh-oh\n' +
        '(I got a van, baby, I got a van)\n' +
        'Oh-oh\n' +
        '(I got a van, baby, I got a van)\n' +

        'Mami, soy un jugador (Yeah)\n' +
        'Sabe, soy un jugador (Tú lo sabes, soy un player)\n' +
        'Cash y sexo en mis canciones (Yeah; más money, más dinero, má sex)\n' +
        'Caminé con mis accione (Más money, más dinero, má sex)\n' +
        'Mami, soy un jugador (Tú lo sabe, soy un player)\n' +
        'Sabes que soy jugador (Tú lo sabes, soy tu player)\n' +
        'Cash y sexo en mis canciones, yo\n' +
        'Caminé con mis accione (Yo)\n' +

        'Me mudé a la capital pa aumentar mi capital (Yo)\n' +
        'Nunca viví tal, por eso no me las tiro de miseria y de metal\n' +
        'Soy real, y vi que ser constante es vital\n' +
        'Esta la escribí a 120 en la autovía\n' +
        'Y ahora lejos de Valеncia pienso: "Mierda, lHorta és vida"\n' +
        'Que lеvante la mano quien no se contradiga\n' +
        'Que le corten la mano que está diciendo mentiras\n' +
        'O no pensando suficiente, baby, subí de nivel (Wow)\n' +
        'Joven rey me hizo mi mente, subí torres, no Miguel\n' +
        'Están buscando la portada y son Capel (Jajaja)\n' +
        'Al final la music manda, como en peli de Chazelle\n' +
        'Ella siempre habla sola\n' +
        '10 kilos, dos weeks con dos feats y sin payola\n' +
        'Ella siempre habla sola, yeah-eh, eh\n' +

        'Y aún no saqué mis ala (I got a van, baby, I got a van)\n' +
        'Aún no gasté mis bala (I got a van, baby, I got a van)\n' +
        'Aún no le di a mil mala\n' +
        'Pero lo voy a hacer\n' +

        'Porque soy un jugador (Yeah)\n' +
        'Mami, soy un jugador (Tú lo sabe, soy un player)\n' +
        'Cash y sexo en mis canciones (Yeah; más money, más dinero, má sex)\n' +
        'Caminé con mis accione (Más money, más dinero, má sex)\n' +
        'Mami, soy un jugador (Tú lo sabe, soy un player)\n' +
        'Sabes que soy jugador (Tú lo sabe, soy el más player)\n' +
        'Cash y sexo en mis cancione (Uh)\n' +
        'Caminé con mis acciones, yeah (Uh)\n' +

        'No son mariposas lo que hay en tu barriga, mi amor\n' +
        'Solo estás arriba, mi amor\n' +
        'De mi vida, eligiendo entre Vilna y Riga\n' +
        'Prometimos no olvidarnos con Erasmus ni con gira\n' +
        'Ponte los audios que te prometí una vida\n' +
        'Allí estáis a -6 y yo sé que mi voz te abriga\n' +
        'A los 30 vuelvo y te hago una barriga\n' +
        'Nos va a salir preciosa, ya lo probamos con IA\n' +
        'Y soñé que te comía, pero no podía olerte\n' +
        'Y fue una sensación fría, como la vida y la muerte\n' +
        'Sabes que aunque no te escriba, siempre vives en mi mente\n' +
        'Si te enamoró mi chulería, que no te duela ahora que soy un player',
        photo_video: 'songs_images/sempreCorDeluxe.jpeg',
        url_mp3: 'songs/C Marí - Jugador (Lyric Video) ｜ Sempre Cor Deluxe [6Ls7p_MV_x8].mp3',
        type: "album",
        genre: 'Trap'
      },
      {
        name: 'Ninja Defuse Freestyle',
        duration: 135,
        lyrics:
        'Poca ilusión\n' +
        'Me hacía a mí el Lambo y la mansión\n' +
        'Pero algo cambió\n' +
        'Y a mí que nunca me llenó pa comprobarlo haré un millón\n' +

        'Lo escribía en el bus, no sabía qué era un booth (Desactivada)\n' +
        'Bien callao como un ninja defuse (Oh-ah), I cant never lose\n' +
        'Si no naces pa brillar, qué más da que te den luz (Oh-ah)\n' +
        'Woh-oh, yo miro por mis "mis", tú por tus "tus" (Oh-oh)\n' +
        'Se disfrazan fácil, flow tutús (Oh-oh)\n' +
        'No disparan ni en los ad-libs con "tu-tus" (Oh-oh-oh; tu-tu-tu-tu-tu)\n' +
        '30 palos y están en to los camerinos (Tu-tu-tu-tu-tu-tu)\n' +
        'Y sus amigos todos tienen 10 años menos (Uh-uh)\n' +
        'Red flag, bro, a niveles extremos (Ah)\n' +
        'Aquí no, así nunca lo hacemos\n' +
        'Callao (Shh), aquí lo hacemos callao (Now every other day, Ill be watching you, oh-ah)\n' +
        'Pero espеra, que los que tienеn 40 son peor aún\n' +
        'Gastan sus 140 teclas en hablar de uno\n' +
        'No sé quién son y to el día dan la lata\n' +
        'No sé tu nombre, tengo que hacer la de Zlatan\n' +
        'Brr, lo mejor cuando solos se retratan\n' +
        'No te odiaban, solo querían atención\n' +
        'Zorra, yo lo aguanto, eso pa mí no es presión\n' +
        'No llenaba la nevera y de pares la habitación\n' +
        '¿Pe-Pe-Pero este niño cuántas tenis tiene? (Oh)\n' +
        'Y yo que heredaba hasta los calcetines (Yo-oh)\n' +
        'El mayor hoy trinca del nene\n' +
        'Y yo puse en sus pies AirForce y TN\n' +
        '¿Pero este niño cuánta ropa tiene? (Oh)\n' +
        'Otro día nuevo, otro paquete viene\n' +
        'Necesito amigos con 43 (Yeah)\n' +
        'Necesito amigos que no usen la M\n' +
        'Sara en las antípodas, al final se atrevió\n' +
        'Me alegré por ella, pero más pena me dio\n' +
        'Vales tanto, no lo dudes\n' +
        'Un halcón pa sus defectos y ciega pa sus virtudes\n' +
        'Recuerdo en un colchón en el suelo\n' +
        'Durmiendo en Guzmán el Bueno\n' +
        'Hoy en un resort, mami, ya crucé el océano\n' +
        'Lo mejor de todo es que no pagué ni el vuelo\n' +

        'Bien, camaradas, listos para la siguiente ronda\n' +
        'Oh-oh, oh-oh\n' +
        'Woh-oh-oh-oh-oh-oh',
        photo_video: 'songs_images/sempreCorDeluxe.jpeg',
        url_mp3: 'songs/C Marí - Ninja Defuse Freestyle (Lyric Video) ｜ Sempre Cor Deluxe [L3a279doYW4].mp3',
        type: "album",
        genre: 'Rap'
      }
      ,
      {
        name: 'Babalà',
        duration: 189,
        lyrics:
        'Release me\n' +
        'Release my body\n' +
        'I know its wrong\n' +
        'So why am I with you now?\n' +
        'AMEX got the nitro\n' +

        'Como un Rollie\n' +
        'Cuando más lindo estoy es encima de una muñeca\n' +
        'Pero, shorty\n' +
        'No estoy en amor ni en odio que los dos me dan jaqueca\n' +
        'Así que no, no, no\n' +
        'No sacaré tiempo para tu evento de mierda\n' +
        'Así que no, no, no\n' +
        'Escuché tu último disco y no conecta\n' +

        'Dale, bebé, no me digas que llegas, ya noto cómo se aprieta\n' +
        'Como un buen rapper, cuida la línea, ese culito es de atleta\n' +
        'Era un tiburón, pero se fue sin aleta\n' +
        'Soy un vacilón, quieren mi cara y mis letra\n' +
        'Ahora mi socio en la empresa es una tarjeta\n' +
        'Los sueños a tiempo sin claqueta\n' +
        'Ma, si me mudé a Madrid fue para cumplir mi meta\n' +
        'No para estar pensando en quién quiere que se lo meta\n' +

        'Como un Rollie\n' +
        'Cuando más lindo estoy es encima de una muñeca\n' +
        'Pero, shorty\n' +
        'No estoy en amor ni en odio que los dos me dan jaqueca\n' +
        'Así que no, no, no\n' +
        'No sacaré tiempo para tu evento de mierda\n' +
        'Así que no, no, no\n' +
        'Escuché tu último disco y no conecta\n' +

        'I love you, pero más me amo a mí\n' +
        'I told you, yo ya te lo advertí\n' +
        'La follo, pero me voy de allí sin un beso\n' +

        'Tenía pájaros en la cabeza, baby, y hoy son águila\n' +
        'Rompí dos gemelas, me sentía yo Osama bin La\n' +
        'Y ahora lleno el show (Yeah), ya sea en León o en Ávila\n' +
        'Nadie me dirá: "Tienes que espabilar"\n' +
        'Las expe—, las expectativas están altas, pienso: "Mátala"\n' +
        'Tienes par de demos a mitad, acábalas\n' +
        'Ahora els titos en La Caixa y no en el matalàs\n' +
        'Una leyenda en Valencia como Babalà\n' +
        'Y dale si está seca, dale más baba y muñeca\n' +
        'Cuando estamos en el sexo no tienes que respetarme\n' +
        'Pero fuera de la pieza no quieras retarme\n' +

        'Los que tienen la influencia nunca hablaron de mis ritmo\n' +
        'Me parecía muy raro estar hablando de mí mismo\n' +
        'Estas líneas dan billetes y no estamos en el bingo\n' +
        'Una estrella es mi apellido, hoy puedes llamarme Ringo',
        photo_video: 'songs_images/sempreCorDeluxe.jpeg',
        url_mp3: 'songs/C Marí - Babalà [Xx0Tu0SXKJk].mp3',
        type: "album",
        genre: 'Trap'
      },
      {
        name: '90%',
        duration: 215,
        lyrics:
        'Teníamos hambre y pa ahorrarnos 10 pavos, no pillaba el AVE, yo pillaba el Ouigo\n' +
        'Ahora con dos propiedades, no sé dónde llegan las prendas que pido\n' +
        'El cartero me conoce, pero ya está confundido\n' +
        'No sabe si duermo en el dúplex del centro o en aquel chalet alejado del ruido\n' +
        'Esto es mentira, pero me he dao dos para hacerlo verdad\n' +
        'Voy a hacer un kilo con los 25, se rio mamá (No llorará)\n' +
        'Cuando el menor de sus hijos pague la hipoteca\n' +
        'No sabe que son 10K por verme cantar en la discoteca\n' +
        'Esto es mentira también, pero solo a la mitad\n' +
        'Son 5.000 por un showcase, le pedí 12 a ese festival\n' +
        'Si me hago seis festis, cabrón, multiplica\n' +
        '¿Qué te duele más? ¿Que haga más flush o que C Marí sea el crush de tu chica?\n' +

        'Que yo sea crush de tu chica te duele\n' +
        'A mí los dedos de contar papeles\n' +
        'Mucho antes de la music\n' +
        'Pa robar a tu baby no necesito FL (Oh-oh)\n' +
        'Ritmo fuerte, okey, la cervical me duele (Oh-oh)\n' +
        'Este mes dormí en tres casas, diez hoteles (Oh-oh, oh-oh)\n' +
        'Y no importa dónde duerma\n' +
        'Lo único que no puedo dormirme es en los laureles (Yeah, yeah, yeah; yeah)\n' +
        'Mil pavos en Marni y Lanvin, y obviamente me veo súper bacano\n' +
        'Diez pavos del Vinted los jeans, y no te sorprende, estoy súper bacano\n' +
        'Tengo quimi con tu físico, bebé, voy súper Cabano (Lets go)\n' +
        'Tu boy es de bolsillo tímido, se le ve súper tacaño\n' +
        'Escribiendo esta canción, durmiendo con el Tuti al lado\n' +
        'Si ve la luz algún día, será porque lo he logrado\n' +
        'Y si no la ve, bebé, pues ya vivirá en mi phone (Oh)\n' +
        'Como tú en mi galería (Oh-oh), baby, yo aún no te he borrado\n' +

        'Y no es cierto, baby, no es cierto (No, no, no)\n' +
        'Que me quieran chingar todas las que vienen al concierto\n' +
        'Baby, no es cierto, baby, no es cierto (No, no, no)\n' +
        'No, yo no diría que todas, solo el 90% (Oh-oh)\n' +
        'Y si te digo que lo siento te estaría mintiendo\n' +
        'Baby, cómo te lo explico, ayuda al movimiento\n' +
        'Te gusté chulo y ahora dices que me estoy subiendo\n' +
        '(Sabía que lo haría bien y aun así la sorprendo; oh-oh)\n' +

        'Que yo sea crush de tu chica te duele (Oh, oh-oh; te duele)\n' +
        'A mí los dedos de contar papele (Oh-oh; contar papele)\n' +
        'Mucho antes de la music (Oh, oh)\n' +
        'Pa robar a tu baby no necesito FL (Oh-oh, oh)\n' +
        'Ritmo fuerte, okey, la cervical me duele (Oh-oh)\n' +
        'Este mes dormí en tres casas, diez hoteles (Oh-oh)\n' +
        'Y no importa dónde duerma\n' +
        'Lo único que no puedo dormirme es en los laureles\n' +

        'Es "crash", no es "crush"\n' +
        'Sempre Cor fue por amor, pero el Deluxe es más por flush\n' +
        'Es "crash", no es "crush"\n' +
        'Es "crash", no es "crush"\n' +
        'Sempre Cor fue por amor, pero el Deluxe es más por flush, yo\n' +
        'Voy a decir "crush", bro, es que "crush" tiene más swag que "crash"\n' +
        '100%\n' +
        'Yeah, yeah, yeah\n' +
        'Es "crash", no e— grr\n' +
        'Es "crash", no e— skrrt\n' +
        'Esto, esto no lo pongas, ¿eh?',
        photo_video: 'songs_images/sempreCorDeluxe.jpeg',
        url_mp3: 'songs/C Marí - 90% (Lyric Video) ｜ Sempre Cor Deluxe [Uwx3W6jQqzM].mp3',
        type: "album",
        genre: 'Trap'
      },
      {
        name: 'Dime que No',
        duration: 147,
        lyrics:
        'No hay nada peor que separarte de alguien a quien quieres todavía\n' +
        'Qué historia tan triste\n' +
        'El amor es la cosa más triste del mundo cuando se acaba\n' +
        '¿Por qué ahora estás más guapo que nunca?\n' +
        'Te dejaste el pelo que me encanta a mí\n' +
        'Soy hielo, baby, o haré que te confundas\n' +
        'Yo ya no sé qué hacer\n' +

        'Si te escribo y son más de las 3, porfa, dime que no\n' +
        'Aunque yo insista, no me dejes\n' +
        'De verdad te lo digo que el placеr se multiplica en dolor\n' +
        'Mi mentе no, mi cuerpo quiere\n' +

        'Y obviamente, estoy hablando ahora desde tu perspectiva\n' +
        'Yo no querría oír un "no" de ti en mi vida\n' +
        'Que no te diga esas cosas que se activa\n' +
        'Una energía aquí dentro que no sé controlar\n' +
        'Y otra vez quiero escribirte, hacer maldades\n' +
        'Disfrazar encuentros de casualidades\n' +
        'Pasar por el bar al que vas con tus padres\n' +
        'Bebé, te prometo que\n' +
        'Yo sigo creyendo en el amor como en una religión\n' +
        'Pero en una relación perdí la fe\n' +
        'Porque si no pudimos tú y yo, que lo pusimos to\n' +
        'Ya nadie va a poder\n' +
        'Si te escribo y son más de las 3, porfa, dime que no (I miss you)\n' +
        'Aunque yo insista, no me dejes\n' +
        'De verdad te lo digo que el placer se multiplica en dolor\n' +
        'Mi mente no, mi cuerpo quiere',
        photo_video: 'songs_images/sempreCorDeluxe.jpeg',
        url_mp3: 'songs/C Marí - Dime que No (Lyric Video) ｜ Sempre Cor Deluxe [qbe5JlQ3Mys].mp3',
        type: "album",
        genre: 'Reggaeton'
      },
      {
        name: '- + Duro',
        duration: 226,
        lyrics:
        'Jay Cas\n' +
        'Bebé, tú no me olvides\n' +
        'No, no, no, no, no, no, no, no\n' +
        'No dejo a ni Dios que opine\n' +
        'Yeah, yeah, yeah, yeah, yeah, yeah, yeah\n' +

        'Ojalá que, ojalá que, ojalá que no me olvides\n' +
        'Y ojalá que, y ojalá que, y ojalá que no me olvides\n' +
        'Y ojalá que, y ojalá que, y ojalá que no me olvides\n' +
        'Yeah\n' +

        'Y yo cada día estoy más duro\n' +
        'Y eso para ti sé que es más duro\n' +
        'Te felicitaban por mi álbum\n' +
        'Tú entre lágrimas: "No estamos juntos"\n' +
        'Que ahora me verás en todas partes\n' +
        'Me duele más a mí, te lo juro\n' +
        'Pero tú eres parte, baby, tú eres parte\n' +

        'Pero ya te expliqué que no es lo mismo estar cuando quieres estar\n' +
        'Que por miedo a no estarlo, yo\n' +
        'No nos gusta a los dos, está claro el dolor afrontarlo\n' +
        'Y no es molestar, no lo quiero escuchar otra vez de tu boca\n' +
        'Cuando me estés hablando\n' +
        'Ser un rockstar, baby, sé que no te está ayudando\n' +
        'Pero tú ya sabes cómo soy y voy a matar todo\n' +
        'Vas a tener que verme en las portadas con oro\n' +
        'Pero sé que tú te alegrarás, siempre encuentras el modo (Tú lo sabes encontrar)\n' +
        'Pero ahora, baby\n' +

        'Y yo cada día estoy más duro\n' +
        'Y eso para ti sé que es más duro\n' +
        'Te felicitaban por mi álbum\n' +
        'Tú entre lágrimas: "No estamos juntos"\n' +
        'Que ahora me verás en todas partes\n' +
        'Me duele más a mí, te lo juro\n' +
        'Pero tú eres parte, baby, tú eres parte\n' +

        'Bato-bato un huevo\n' +
        'Y bato un nuevo récord, okey (Okey, okey)\n' +
        'Entro al juego (Yeah)\n' +
        'Y salgo siendo del juego el rey (Rey, rey)\n' +
        'Tú me quisiste (Ah)\n' +
        'Tú me compraste, tú aceptaste mi ley\n' +
        'Bebé, okey\n' +
        'Cuando lograba algo tú no me felicitabas\n' +
        '¿Qué me importa que el mundo lo haga? Si mi mundo eres tú\n' +
        'Y tú: Carlos, juntos ya vivimos tanto, ya no me sorprende nada\n' +
        'Pero a mí si algo me encanta, lo digo y no me ahorro un "te amo"\n' +
        'Dime cuándo te llamo\n' +
        'Que yo te eché de menos y siempre texteé "te extraño"\n' +
        'Y hoy somos dos extraños, y fuimos todo antaño (Oh-oh)\n' +
        'Y yo loco sigo viendo el corazón que dibujaste con tus dedos en la mampara del baño (Yeah, yeah)\n' +
        'Ojalá que, ojalá que, ojalá que no me olvides\n' +
        'Y ojalá que, y ojalá que, y ojalá que no me olvides\n' +
        'Y ojalá que, y ojalá que, y ojalá que no me olvides\n' +
        'Yeah\n' +

        'Y yo cada día estoy más duro\n' +
        'Y eso para ti sé que es más duro\n' +
        'Te felicitaban por mi álbum\n' +
        'Tú entre lágrimas: "No estamos juntos"\n' +
        'Y ahora me verás en todas partes\n' +
        'Me duele más a mí, te lo juro\n' +
        'Pero tú eres parte, baby, tú eres parte',
        photo_video: 'songs_images/sempreCorDeluxe.jpeg',
        url_mp3: 'songs/C Marí - + Duro (Lyric Video) ｜ Sempre Cor Deluxe [ZzGD3iMPhL8].mp3',
        type: "album",
        genre: 'Pop'
      },
      {
        name: 'Sobrenatural',
        duration: 156,
        lyrics:
        'Netflix decía que si aún estábamos viéndolo\n' +
        'Y hasta lo créditos seguíamos haciéndolo\n' +
        'Yo no quiero chingar con otra, mami, entiéndelo (Uh-uh-uh)\n' +
        'Te traje un porro pa que fumes, mami, enciéndelo\n' +
        'To lo que imaginé contigo estoy cumpliéndolo, eh\n' +
        'Ese tatuaje quiero vértelo\n' +

        'Yo quiero hacerte cosas que nadie te ha hecho\n' +
        'Pa ellos es raro pero pa ti es normal, bebé\n' +
        'Me subes al techo\n' +
        'Cuando lo hacemos es algo sobrenatural, bebé\n' +
        'Yo te busco hasta donde tú no еstás\n' +
        'Ya no voy a la disco si no vas\n' +
        'Yo no sé qué es la droga que me das\n' +
        'Quе no puedo parar de pensar-te\n' +

        'Cuando toco otra piel me quito rápido como si diera calambre, yeh, yeh\n' +
        'Y tú estás igual de rica que antes pero ahora te tengo más hambre, yeh\n' +
        'Ma, los platos prohibidos saben mejor\n' +
        'Y cuando lo has perdido le das valor\n' +
        'Y es un tópico, pero mágico\n' +
        'Como tú y yo haciéndolo en el probador (Mmm)\n' +
        'Quiero pasarte a buscar, vamos a tomar un helado\n' +
        'Sabes que si vienes, el tanga acaba pa un lado\n' +
        'Baby, tú me tienes herido de gravedad\n' +
        'Juro que ese culo desafía la gravedad\n' +
        'Yo quiero hacerte cosas que nadie te ha hecho\n' +
        'Pa ellos es raro pero pa ti es normal, bebé\n' +
        'Me subes al techo\n' +
        'Cuando lo hacemos es algo sobrenatural, bebé\n' +
        'Yo te busco hasta donde tú no estás\n' +
        'Ya no voy a la disco si no vas\n' +
        'Yo no sé qué es la droga que me das\n' +
        'Que no puedo parar de pensar\n' +

        'Pa que yo te olvide, dame una razón\n' +
        'Yo estoy envuelto como un papel de un blunt\n' +
        'Yo te descubrí como a Karim en Lyon\n' +
        'Ese culo es de primera división\n' +
        'Yo te hice todo lo que no supo hacer él\n' +
        'Tengo unas retro que combinan con tu piel\n' +
        'Fundidos como el oro de la Casa de Papel\n' +
        'En la cama del hotel\n' +
        'Tú brillas más que todas las cubanas de Anuel\n' +
        'Pusimos una peli y no llegamos al título\n' +
        'Y hasta los créditos no paramos de chingar\n' +
        'Cuando me veo con otra me siento ridículo\n' +

        'Yo quiero hacerte cosas que nadie te ha hecho\n' +
        'Pa ellos es raro pero pa ti es normal, bebé\n' +
        'Me subes al techo\n' +
        'Cuando lo hacemos es algo sobrenatural, bebé\n' +
        'Yo te busco hasta donde tú no estás\n' +
        'Ya no voy a la disco si no vas\n' +
        'Yo no sé qué es la droga que me das\n' +
        'Que no puedo parar de pensar',
        photo_video: 'songs_images/sobrenatural.jpg',
        url_mp3: 'songs/Raul Clyde, C Marí - Sobrenatural (Visual) [antq9VmyNUo].mp3',
        type: "sencillo",
        genre: 'Reggaeton'
      },
      {
        name: 'DIESEL',
        duration: 176,
        lyrics:
        'To el día entrenando y ese culo siempre está creciendo (Sí)\n' +
        'Yo ya sé la rutina que estás haciendo\n' +
        'Yo sé cómo lo define, ya no le caben los jeanes\n' +
        'Tú en el gym y yo esperando que termine\n' +

        'Pa que empiece\n' +
        'Se quitó del novio y yo le quité los Diesel\n' +
        'Ese toto está esperando, ma, que yo lo bese, y lo bеso\n' +
        'Mía desde que еstaba en la ESO, y eso\n' +
        'Esperando que termine pa que empiece\n' +
        'Se quitó del novio y yo le quité los Diesel\n' +
        'Ese toto está esperando, ma, que yo lo bese, y lo beso\n' +

        'Nunca para de crecer\n' +
        'Ya es tarde, va a anochecer\n' +
        'Pero ahí dentro siempre de día\n' +
        'No es Marte de Galería\n' +
        'Pero si quiere nos perreamo en la disco\n' +
        'Te quito el gistro, deja a tos en visto\n' +
        'Pero a mí me habló pa que se lo metiera\n' +
        'No, no está con cualquiera\n' +
        'Le gustan los de la nueva\n' +
        'Sí, los de la nueva era\n' +
        'Por eso quiere con el Saiko y con el Clyde\n' +
        'Te seguí, me diste un like\n' +
        'Vi tu story en el espejo del gimnasio escuchando Jowell y Randy\n' +
        'Eso está dulce como candy\n' +
        'La "b" no es por la de Cardi\n' +
        'Y ese panty no era de Versace, no sé si me cachi\n' +

        'Pa que empiece\n' +
        'Se quitó del novio y yo le quité los Diesel\n' +
        'Ese toto está esperando, ma, que yo lo bese, y lo beso\n' +
        'Mía desde que estaba en la ESO, y eso\n' +
        'Esperando que termine pa que empiece\n' +
        'Se quitó del novio y yo le quité los Diesel\n' +
        'Ese toto está esperando, ma, que yo lo bese, y lo beso\n' +
        'Mía desde que estaba en la ESO, y eso\n' +

        'Pa que empiece\n' +
        'Se quitó del novio y yo le quité los Diesel\n' +
        'Ese toto está esperando, ma, que yo lo bese, y lo beso\n' +
        'Mía desde que estaba en la ESO, y eso\n' +
        'Esperando a que termine\n' +
        'Eh-eh-eh-eh-eh',
        photo_video: 'songs_images/diesel.jpeg',
        url_mp3: 'songs/Raul Clyde - DIESEL (Video) [xrlsxHMDMP0].mp3',
        type: "sencillo",
        genre: 'Reggaeton'
      },
      {
        name: 'Tuenti Remix',
        duration: 184,
        lyrics:
        '(Yo sé que tú nunca fuiste mía, pero vuelve, eh, eh, eh)\n' +
        '(Tú eres un problema de los que no se resuelven)\n' +
        'Tú encima mía y la luna encima tuya (Encima tuya)\n' +
        'Tus amigas siempre van a hablar mal, no deje que influya\n' +
        'Lo que digan de mí\n' +
        'Porque a vece tú te enfada y no deja que fluya\n' +
        'Y te encierra en ti\n' +
        'Si tú escucha lo que dicen eso es solo culpa tuya\n' +
        '(Eso еs solo culpa tuya)\n' +

        'Yo sé que tú nunca fuiste mía pero vuеlve, eh\n' +
        'Aunque hablen de mí\n' +
        'Tú eres un problema de los que no se resuelven, eh\n' +
        'Yo te resolví\n' +
        'Yo dándote todo pero no me lo devuelves\n' +
        'Si te hablan mierda de mí es pa que me recuerdes\n' +
        'Si no te hablo e que no quiero que pares\n' +
        'Si me ves en el suelo no me dispares, oh\n' +

        'Yo sé que tú nunca fuiste mía pero casi, tú tan frágil\n' +
        'Y yo yendo a verte a casa e tu mai en taxi\n' +
        'Tú ere un recuerdo rico como el Dalsy\n' +
        'Si me dejas solo, me da miedo como en TranZit\n' +
        'Tu novio e un cipollo, no entiende de rollo\n' +
        'Va de tiguerón, pero ni a gato llega\n' +
        'Tú ere demasiao linda pa estar con cualquiera\n' +
        'Las demá te miran mal, pero eso e normal\n' +

        'Porque ella tiene como veinti, bolso de Valenti\n' +
        'Ella fuma hierba desde que tenía Tuenti\n' +
        'Se hizo el Twitter solo pa promocionar el Only\n' +
        'Siempre que le pongo reggaetón se pone horny, yeh\n' +

        'Yo sé que tú nunca fuiste mía pero vuelve, eh\n' +
        'Aunque hablen de mí\n' +
        'Tú ere un problema de los que no se resuelven, eh\n' +
        'Yo te resolví\n' +
        'Yo dándote todo pero no me lo devuelve\n' +
        'Si te hablan mierda de mí, es pa que me recuerde\n' +
        'Si no te hablo e que no quiero que pare\n' +
        'Si me ve en el suelo no me dispare\n' +

        'Ella se fue con el verano y el sol\n' +
        'Dejó la uni, ahora trabaja en el mall\n' +
        'Hablaban de nosotro como TINI y De Paul\n' +
        'Pero pichábamo como en el béisbol\n' +
        'Y la saqué del estadio, flow "Kemba" de Eladio\n' +
        'Te he buscado en la calle, te he buscao en otro labio\n' +
        'Con él un semanal, conmigo era uno diario\n' +
        'Siempre salían con algo y siempre algún comentario, ey\n' +

        'Tiene como veinti, bolso de Valenti\n' +
        'Ella fuma hierba desde que tenía Tuenti\n' +
        'Se hizo el Twitter solo pa promocionar el Only\n' +
        'Siempre que le pongo reggaetón se pone horny\n' +

        'Yo sé que tú nunca fuiste mía pero vuelve, eh\n' +
        'Aunque hablen de mí\n' +
        'Tú eres un problema de los que no se resuelven, eh\n' +
        'Yo te resolví\n' +
        'Yo dándote todo pero no me lo devuelves\n' +
        'Si te hablan mierda de mí es pa que me recuerdes\n' +
        'Si no te hablo e que no quiero que pares\n' +
        'Si me ves en el suelo no me dispares\n' +
        '(Yeh-eh-eh-eh-eh)\n' +

        'El Clyde con el Saiko\n' +
        '(Dímelo, Suave, ey, ey)\n' +
        '(Dímelo, Sunday)',
        photo_video: 'songs_images/tuentiremix.jpg',
        url_mp3: 'songs/Raul Clyde, Saiko - Tuenti Remix (Video) [yxZq841nc6U].mp3',
        type: "sencillo",
        genre: 'Reggaeton'
      },
      {
        name: 'amor de pobreE',
        duration: 226,
        lyrics:
        'Esta noche vamo a rumbear\n' +
        'Y aunque no tenga pa gastar\n' +
        'No me importa lo material\n' +
        'Yo quiero estar contigo\n' +

        'Yo quiero estar contigo, yo quiero estar contigo\n' +
        'Aunque no te pueda invitar, yo quiero estar contigo\n' +
        'Aunque no tenga pa gastar, yo quiero estar contigo\n' +
        'No sé pa ti, pero pa mí no es malo\n' +
        'Aunque no tenga pa comprarte regalo\n' +
        'Si pudiera te compraba el anillo más caro\n' +
        'Y un bolso Prada, sé que pa ellos es raro, oh-oh-oh-oh\n' +
        'Pero pa ti es normal (Pa ti es normal)\n' +
        'A mí me gustas tú, eh, no lo material\n' +
        'Pero si un día me pego, sabe que lo voy a gastar\n' +
        'En ti todo, y aunque todo cambie\n' +
        'Contigo nunca voy a cambiar\n' +

        '(Esta noche vamo a rumbear)\n' +
        'Yo quiero estar contigo\n' +
        '(Y aunque no tenga pa gastar)\n' +
        'Yo quiero estar contigo\n' +
        '(No me importa lo material)\n' +
        'Yo quiero estar contigo\n' +
        'Yo quiero estar contigo (-bear), yo quiero estar contigo\n' +
        'Yo quiero estar contigo\n' +
        'Aunque no te pueda invitar, yo quiero estar contigo\n' +
        'Aunque no tenga pa gastar, yo quiero estar contigo\n' +
        'Yo quiero estar contigo, yo quiero estar contigo\n' +

        'O logras ser feliz con poco y liviano de equipaje\n' +
        'Porque la felicidad está dentro tuyo\n' +
        'O no logras nada (Yeah)\n' +

        'Yo quiero estar contigo, solo con usted\n' +
        'Si tú está, no me hace falta nadie\n' +
        'Lo nuestro es amor, amor de pobre, yeah\n' +
        'Pa que nos lo pasemo bien no hace falta dinero\n' +
        'Solo tú y yo, yo soy tuyo\n' +
        'Tú me llevas al cielo, eh\n' +
        'Peleamos y volvemos porque\n' +

        'Estamo destinado a estar junto\n' +
        'Qué bien que te queda ese conjunto\n' +
        'Encima e tu piel yo a vece me pregunto, eh\n' +
        'Si esto será pa siempre\n' +
        'Yo quiero que sepa que si un día esto se acaba\n' +
        'Y te va, yo siempre voy a estar\n' +
        'Aún nos queda fuego, pero si un día se apaga\n' +
        'Te juro que no voy a olvidar que\n' +

        'Yo quiero estar contigo, aunque no te pueda invitar\n' +
        'Yo quiero estar contigo, aunque no tenga pa gastar\n' +
        'Yo quiero estar contigo, aunque no te pueda costear\n' +
        'Yo quiero estar contigo, yo quiero estar contigo\n' +
        'Yo quiero estar contigo\n' +
        'Aunque no te pueda invitar, yo quiero estar contigo\n' +
        'Aunque no tenga pa gastar, yo quiero estar contigo\n' +
        'No sé pa ti, pero pa mí no es malo, oh-oh-oh-oh-oh\n' +
        'Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh-oh',
        photo_video: 'songs_images/amorpobre.png',
        url_mp3: 'songs/Raul Clyde - amor de pobreE (Visualizer) [WU6rUAYxgUc].mp3',
        type: "sencillo",
        genre: 'Reggaeton'
      },
      {
        name: 'Costablanca',
        duration: 154,
        lyrics:
        'Eh-eh-eh-eh\n' +
        'Eh-eh-eh-eh\n' +
        'Eh-eh-eh-eh\n' +
        'Yo a ti siempre te quiero ve-e-er\n' +
        'Si tienes ganas de verme, dilo\n' +
        'Ayer nos vimos también pero se\n' +
        'Nos quedaron ganas por el camino\n' +
        'Si quieres vamos a buscarlas\n' +
        'O si quieres dejamos que ellas vengan solas\n' +
        'Tú te me disparas como pistola (Hola)\n' +
        'Dime por qué me ignora\n' +

        'Tú a mí me gustas con to, con to lo que te pone\n' +
        'Vestio con tenis o chándal con unos tacones\n' +
        'Antes de que tú me abandones\n' +
        'Probamos de to, toas las posiciones\n' +
        'Me gustaron toas, bebé\n' +
        'Yo sé que te fallé\n' +
        'Pero quizás puedas perdonarme\n' +
        'Quizás puedas olvidarte e todo\n' +

        'Hasta que se acabe el verano\n' +
        'Hasta que se apaguen los rayos de sol\n' +
        'No te vayas, bebé, quédate, por favor\n' +
        'Y volvemos donde lo dejamo\n' +
        'Tú y yo, a ese verano, bebé\n' +
        'Tú te fuiste pero nunca más te olvidas\n' +
        'Aún tengo arena dentro de las 11\n' +
        'Que llevaba el día de cuando, eh\n' +

        'De cuando te lo metí\n' +
        'Tú no eres Kim ni yo soy Kanye\n' +
        'Ahora todo el mundo me habla de ti\n' +
        'Y aunque te vista toa del Shein, y\n' +
        'Ellas de Gucci, tú eres más cara\n' +
        'Tú vales más, eh\n' +
        'Más mala que las demás\n' +
        'Quédate mi mano de Fátima\n' +
        'Pero dame mi alma\n' +

        'Bebé, no te olvides cuando te toqué\n' +
        'Cuando la gorra me la quité\n' +
        'En Costa Blanca yo y usted\n' +
        'Bebé, no te olvides cuando te toqué\n' +
        'Cuando la gorra me la quité\n' +
        'En Costa Blanca yo y usted\n' +

        'Hasta que se acabe el verano\n' +
        'Hasta que se apaguen los rayos de sol\n' +
        'No te vayas, bebé, quédate, por favor\n' +
        'Y volvemos donde lo dejamo\n' +
        'Tú y yo, a ese verano, bebé\n' +
        'Tú te fuiste pero nunca más te olvidas\n' +
        'Aún tengo arena dentro de las 11\n' +
        'Que llevaba el día de cuando, eh\n' +

        'Hasta que se acabe el verano\n' +
        'Hasta que se apaguen los rayos de sol\n' +
        'No te vayas, bebé, quédate, por favor\n' +
        'Y volvemos donde lo dejamo',
        photo_video: 'songs_images/costablanca.jpeg',
        url_mp3: 'songs/Raul Clyde - COSTABLANCA (Video) Prod.Came Beats [UKT9Uctd3Qs].mp3',
        type: "sencillo",
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