'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('song', [
      {
        id: 1,
        name: 'Bohemian Rhapsody',
        duration: 354,
        lyrics: 'Is this the real life? Is this just fantasy?',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/bohemian.mp3'
      },
      {
        id: 2,
        name: 'Hotel California',
        duration: 390,
        lyrics: 'On a dark desert highway, cool wind in my hair...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/hotel.mp3'
      },
      {
        id: 3,
        name: 'Shape of You',
        duration: 263,
        lyrics: 'The club isn’t the best place to find a lover...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/shape.mp3'
      },
      {
        id: 4,
        name: 'Smells Like Teen Spirit',
        duration: 301,
        lyrics: 'Load up on guns, bring your friends...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/teen_spirit.mp3'
      },
      {
        id: 5,
        name: 'Imagine',
        duration: 187,
        lyrics: 'Imagine there’s no heaven, it’s easy if you try...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/imagine.mp3'
      },
      {
        id: 6,
        name: 'Billie Jean',
        duration: 294,
        lyrics: 'She was more like a beauty queen from a movie scene...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/billie_jean.mp3'
      },
      {
        id: 7,
        name: 'Wonderwall',
        duration: 259,
        lyrics: 'Today is gonna be the day that they’re gonna throw it back to you...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/wonderwall.mp3'
      },
      {
        id: 8,
        name: 'Yesterday',
        duration: 125,
        lyrics: 'Yesterday, all my troubles seemed so far away...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/yesterday.mp3'
      },
      {
        id: 9,
        name: 'Sweet Child O’ Mine',
        duration: 356,
        lyrics: 'She’s got a smile that it seems to me...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/sweet_child.mp3'
      },
      {
        id: 10,
        name: 'Back In Black',
        duration: 255,
        lyrics: 'Back in black, I hit the sack...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/back_in_black.mp3'
      },
      {
        id: 11,
        name: 'Hey Jude',
        duration: 431,
        lyrics: 'Hey Jude, don’t make it bad...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/hey_jude.mp3'
      },
      {
        id: 12,
        name: 'Let It Be',
        duration: 243,
        lyrics: 'When I find myself in times of trouble...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/let_it_be.mp3'
      },
      {
        id: 13,
        name: 'Uptown Funk',
        duration: 270,
        lyrics: 'This hit, that ice cold, Michelle Pfeiffer, that white gold...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/uptown_funk.mp3'
      },
      {
        id: 14,
        name: 'Rolling in the Deep',
        duration: 228,
        lyrics: 'There’s a fire starting in my heart...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/rolling_in_the_deep.mp3'
      },
      {
        id: 15,
        name: 'Thunderstruck',
        duration: 292,
        lyrics: 'Thunder! Thunder! Thunder! I was caught in the middle of a railroad track...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/thunderstruck.mp3'
      },
      {
        id: 16,
        name: 'Hallelujah',
        duration: 291,
        lyrics: 'Well, I heard there was a secret chord...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/hallelujah.mp3'
      },
      {
        id: 17,
        name: 'Take Me Home, Country Roads',
        duration: 193,
        lyrics: 'Almost heaven, West Virginia...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/country_roads.mp3'
      },
      {
        id: 18,
        name: 'Livin’ on a Prayer',
        duration: 252,
        lyrics: 'Woah, we’re halfway there...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/livin_on_a_prayer.mp3'
      },
      {
        id: 19,
        name: 'Nothing Else Matters',
        duration: 388,
        lyrics: 'So close, no matter how far...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/nothing_else_matters.mp3'
      },
      {
        id: 20,
        name: 'Seven Nation Army',
        duration: 231,
        lyrics: 'I’m gonna fight ‘em all...',
        photo_video: "http://localhost:5001/images/p2.png",
        url_mp3: 'https://example.com/seven_nation_army.mp3'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('song', null, {});
  }
};
