'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tabla USER
    await queryInterface.createTable("User", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nickname: { type: Sequelize.STRING, allowNull: false, unique: true },
      contrasena: { type: Sequelize.STRING, allowNull: false },
      correo: { type: Sequelize.STRING, allowNull: false, unique: true },
      estilo_fav: { type: Sequelize.STRING },
      is_premium: { type: Sequelize.BOOLEAN, defaultValue: false },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false }
    });

    // Tabla ARTIST
    await queryInterface.createTable("Artist", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nombre: { type: Sequelize.STRING, allowNull: false },
      bio: { type: Sequelize.TEXT },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false }
    });

    // Tabla SONG
    await queryInterface.createTable("Song", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nombre: { type: Sequelize.STRING, allowNull: false },
      duracion: { type: Sequelize.INTEGER },
      lyrics: { type: Sequelize.TEXT },
      foto_video: { type: Sequelize.STRING },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false }
    });

    // Tabla PLAYLIST
    await queryInterface.createTable("Playlist", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      user_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE"},
      description: { type: Sequelize.TEXT },
      creation_date: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false },
      type: { type: Sequelize.STRING },
      portada: { type: Sequelize.STRING }
    });

    // Tabla intermedia SONG-ARTIST (M:N)
    await queryInterface.createTable("SongArtist", {
      song_id: { type: Sequelize.INTEGER, references: { model: "Songs", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      artist_id: { type: Sequelize.INTEGER, references: { model: "Artists", key: "id" }, onDelete: "CASCADE", primaryKey: true }
    });

    // Tabla intermedia SONG-PLAYLIST (M:N)
    await queryInterface.createTable("SongPlaylist", {
      song_id: { type: Sequelize.INTEGER, references: { model: "Songs", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "Playlists", key: "id" }, onDelete: "CASCADE", primaryKey: true }
    });

    // Tabla intermedia SONG-LIKE (M:N con USER)
    await queryInterface.createTable("SongLike", {
      user_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      song_id: { type: Sequelize.INTEGER, references: { model: "Songs", key: "id" }, onDelete: "CASCADE", primaryKey: true }
    });

    // Tabla intermedia PLAYLIST-LIKE (M:N con USER)
    await queryInterface.createTable("PlaylistLike", {
      user_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "Playlists", key: "id" }, onDelete: "CASCADE", primaryKey: true }
    });

    // Tabla intermedia PLAYLIST-FEEDBACK (M:N con USER)
    await queryInterface.createTable("PlaylistFeedback", {
      user_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "Playlists", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      valoracion: { type: Sequelize.FLOAT }
    });

    // Tabla FRIENDSHIP (M:N entre USER y USER)
    await queryInterface.createTable("Friendship", {
      user1_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      user2_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      state_friend_request: { type: Sequelize.STRING }
    });

    // Tabla PERMISSION-HAVE (M:N entre USER con PLAYLIST)
    await queryInterface.createTable("PermissionHave", {
      user_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "Playlists", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      type_permission: { type: Sequelize.STRING }
    });

    // Tabla CHAT (M:N entre USER y USER)
    await queryInterface.createTable("Chat", {
      user1_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      user2_id: { type: Sequelize.INTEGER, references: { model: "Users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      txt_message: { type: Sequelize.STRING }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Friendships");
    await queryInterface.dropTable("PlaylistFeedback");
    await queryInterface.dropTable("PlaylistLikes");
    await queryInterface.dropTable("SongLikes");
    await queryInterface.dropTable("SongPlaylists");
    await queryInterface.dropTable("SongArtists");
    await queryInterface.dropTable("Playlists");
    await queryInterface.dropTable("Songs");
    await queryInterface.dropTable("Artists");
    await queryInterface.dropTable("Users");
  }
};
