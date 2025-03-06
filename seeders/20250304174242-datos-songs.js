'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('song', [
      {
        name: 'Bohemian Rhapsody',
        duration: 354,
        lyrics: 'Is this the real life? Is this just fantasy?',
        photo_video: 'bohemian.jpg',
        url_mp3: 'https://example.com/bohemian.mp3'
      },
      {
        name: 'Hotel California',
        duration: 390,
        lyrics: 'On a dark desert highway, cool wind in my hair...',
        photo_video: 'hotel.jpg',
        url_mp3: 'https://example.com/hotel.mp3'
      },
      {
        name: 'Shape of You',
        duration: 263,
        lyrics: 'The club isn’t the best place to find a lover...',
        photo_video: 'shape.jpg',
        url_mp3: 'https://example.com/shape.mp3'
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
