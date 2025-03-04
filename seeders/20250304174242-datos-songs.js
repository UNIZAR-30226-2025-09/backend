'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('song', [
      {
        nombre: 'Bohemian Rhapsody',
        duracion: 354,
        lyrics: 'Is this the real life? Is this just fantasy?',
        foto_video: 'bohemian.jpg',
        url_mp3: 'https://example.com/bohemian.mp3'
      },
      {
        nombre: 'Hotel California',
        duracion: 390,
        lyrics: 'On a dark desert highway, cool wind in my hair...',
        foto_video: 'hotel.jpg',
        url_mp3: 'https://example.com/hotel.mp3'
      },
      {
        nombre: 'Shape of You',
        duracion: 263,
        lyrics: 'The club isn’t the best place to find a lover...',
        foto_video: 'shape.jpg',
        url_mp3: 'https://example.com/shape.mp3'
      },
      {
        nombre: 'Smells Like Teen Spirit',
        duracion: 301,
        lyrics: 'Load up on guns, bring your friends...',
        foto_video: 'teen_spirit.jpg',
        url_mp3: 'https://example.com/teen_spirit.mp3'
      },
      {
        nombre: 'Imagine',
        duracion: 187,
        lyrics: 'Imagine there’s no heaven, it’s easy if you try...',
        foto_video: 'imagine.jpg',
        url_mp3: 'https://example.com/imagine.mp3'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('song', null, {});
  }
};
