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
        url_mp3: 'songs/Andy & Lucas - Tanto La Queria (Videoclip) [b81kOviE7EI].mp3'

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
          photo_video: "songs_images/laVereda.png",
        url_mp3: 'songs/La vereda de la puerta de atras extremoduro.mp3'
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
        url_mp3: 'songs/Bad Bunny - BAILE INoLVIDABLE (Letra).mp3'
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
        url_mp3: 'songs/Jarabe De Palo - La Flaca (Videoclip Oficial).mp3'
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
        url_mp3: 'songs/Chayanne - Torero (Vídeo Oficial) [GuZzuQvv7uc].mp3'
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
        url_mp3: 'songs/El Canto del Loco - Besos [mzSI1oUXYxs].mp3'
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
        url_mp3: 'songs/El Canto del Loco - Peter Pan [rCxLx_3T5GE].mp3'
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
        url_mp3: 'songs/El Canto del Loco - Zapatillas (Videoclip) [nHxam-MQg-o].mp3'
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
        url_mp3: 'songs/Estopa - Como Camaron (Videoclip) [JmP89cIGJZM].mp3'
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
        url_mp3: 'songs/Fito & Fitipaldis - La casa por el tejado (Videoclip oficial) [8qz8FqmTsJY].mp3'
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
        url_mp3: 'songs/Fito & Fitipaldis - Soldadito marinero (Videoclip oficial) [GxQjx7FkmNA].mp3'
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
        url_mp3: 'songs/Melendi - Barbie de extrarradio (Videoclip Oficial) [f41rIgQF-Mw].mp3'
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
        url_mp3: 'songs/Melendi - Caminando Por La Vida (Videoclip Oficial) [eznXJEjvHbk].mp3'
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
        url_mp3: 'songs/Melendi - Un Violinista En Tu Tejado [eJbIMODHIdw].mp3'
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
        url_mp3: 'songs/Nena Daconte - En Que Estrella Estara [qZ1H-e8Z-LY].mp3'
      },
      {
        name: 'Hallelujah',
        duration: 291,
        lyrics: 'Well, I heard there was a secret chord...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/hallelujah.mp3'
      },
      {
        name: 'Take Me Home, Country Roads',
        duration: 193,
        lyrics: 'Almost heaven, West Virginia...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/country_roads.mp3'
      },
      {
        name: 'Livin’ on a Prayer',
        duration: 252,
        lyrics: 'Woah, we’re halfway there...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/livin_on_a_prayer.mp3'
      },
      {
        name: 'Nothing Else Matters',
        duration: 388,
        lyrics: 'So close, no matter how far...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/nothing_else_matters.mp3'
      },
      {
        name: 'Seven Nation Army',
        duration: 231,
        lyrics: 'I’m gonna fight ‘em all...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/seven_nation_army.mp3'
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